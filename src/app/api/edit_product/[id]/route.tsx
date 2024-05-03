import { connectDB } from "@/lip/connectDB";
import Product from "@/lip/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
    try {

        const body = await request.json();
        const id = URLParams.params.id;
        const { name, category, price } = body;

        await connectDB();

        const data = await Product.findByIdAndUpdate(id, {
            name, category, price
        });

        return NextResponse.json({msg: "Product updated successfully", data}); 
    } catch (error) {
        return NextResponse.json({
            error,
            msg: 'Something went wrong!'
        }, {status: 400})
    }
}