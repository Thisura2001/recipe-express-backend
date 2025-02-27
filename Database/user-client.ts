import {PrismaClient,User} from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(user: { password: any; username: any }) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const addedUser = await prisma.user.create({
        data: {
            username : user.username,
            password : hashedPassword,
        },
    });
    console.log("User created:", addedUser);
}

export async function verifyUserCredentials(verifyUser: { password: any; username: any }) {
    const user : User | null = await prisma.user.findUnique({
        where: { username: verifyUser.username },
    });
    if (!user) {
        return false;
    }

    return await bcrypt.compare(verifyUser.password, user.password);
}