import { connectDB } from "@/lip/connectDB";
import Product from "@/lip/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const data = await Product.find();

        return NextResponse.json(data); 
    } catch (error) {
        return NextResponse.json({
            error,
            msg: 'Something went wrong!'
        }, {status: 400})
    }
}