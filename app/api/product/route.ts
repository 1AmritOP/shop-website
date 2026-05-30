import uploadToCloudinary from "@/app/lib/cloudinary";
import { connectToDatabase } from "@/app/lib/db";
import Product from "@/app/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    //connect to db
    // fetch 5-10 products from db
    // return products

    connectToDatabase();
    const products = await Product.find({}).limit(10);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log("Fetch Product ERROR : ", error);
    return NextResponse.json(
      { error: "Failed to fetch products from database" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // connect to db
    // get form data
    // create product
    // return created product

    connectToDatabase();

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const image = formData.get("image") as Blob | null;

    if (!name || !image || !price) {
      return NextResponse.json(
        { message: "All field are required" },
        { status: 400 },
      );
    }
    let imageUrl;
    if (image) {
      imageUrl = await uploadToCloudinary(image);
      console.log(imageUrl);
    }
    const newProduct = await Product.create({
      name,
      img: imageUrl,
      price,
    });
    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (error) {
    console.log("Create Product ERROR : ", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}
