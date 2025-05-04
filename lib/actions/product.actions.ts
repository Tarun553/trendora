"use server"
import {PrismaClient} from "@prisma/client";
import { ConvertToJSObject } from "@/lib/utils";
const prisma = new PrismaClient();
export const getProducts = async () => {
    const products = await prisma.product.findMany({
        
        orderBy: {createdAt:'desc'}
    });
    return ConvertToJSObject(products);
};
