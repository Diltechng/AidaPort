import { NextResponse } from "next/server";
import { connDB } from "../../../../libs/mongodb";
import blogModel from "../../../../models/blog";

export async function POST(req: Request) {
    try{
        const {topic, description} = await req.json();
        if(!topic || !description){
            return NextResponse.json(
                {message: "You cant submit an empty field"},
                {status: 400}
            )
        };
        await connDB();
        await blogModel.create({topic, description});
    
        return NextResponse.json({message: "Topic Created"}, {status: 200});
    } catch(error){
        console.error("Error creating post", error);
        return NextResponse.json({
            message: "Can not create post"
        },
        {status: 500}
    )

    }
   
};

export async function GET(){
    try{
        await connDB();
    const post = await blogModel.find();
    return NextResponse.json({post});
    }catch(err){
        console.error("Can not get Post", err);
        NextResponse.json({message: 'Can not get blog posts'}, {status: 400})
    }
    
}

export async function DELETE(req: Request){
    try{
        const url = new URL(req.url)
    const id = url.searchParams.get("id");
    await connDB();
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic Deleted"}, {status: 200});
    }catch(err){
        console.error("Something went wrong", err);
        NextResponse.json({message: 'Something went wrong'}, {status: 400})
    }
    
}

