import Products from '@/utils/Models/Products';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

connectDB();
export async function POST(request: Request) {
    try {
        const reqBody = await request.json();
        const { title, slug, image, image2, color, size, price, availableqty, category } = reqBody;
        const addProducts = new Products({
            title, slug, image, image2, color, size, price, availableqty, category
        });
        await addProducts.save();
        return NextResponse.json({ message: 'Successfully added the product', addProducts }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
    }
}
