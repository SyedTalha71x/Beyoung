import Products from '@/utils/Models/Products';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

connectDB();
export async function GET(request: Request) {
    try {
        const fetchproducts = await Products.find({ category: 'Beyoung Products' });
        return NextResponse.json({ message: 'Successfully Fetched the product', fetchproducts }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
    }
}
