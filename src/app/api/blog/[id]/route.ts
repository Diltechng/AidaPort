import { NextRequest, NextResponse } from "next/server";
import { connDB } from "../../../../../libs/mongodb";
import blogModel from "../../../../../models/blog";

export async function PUT(req: Request, {params}){
    try{
        const {id} = params;
        const {newTopic: topic, newDescription:description} = await req.json();
        await connDB();
        const update = await blogModel.findByIdAndUpdate(id, {topic, description});
        if(!update){
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });

        }
        return NextResponse.json({message: "Updated"}, {status: 200})
    }catch(err){
        console.error("something went wrong", err);
       return NextResponse.json({message: "something went wrong"}, {status: 400});
    }
}

export async function GET(req: NextRequest, {params} : {params: {id: string}}){
    const {id} = await params;
    try{
        await connDB();
        
        console.log(id)
        if(!id){
            return NextResponse.json({message: "Missing blog ID"}, {status: 400});
        }
        const post = await blogModel.findById(id);
        if(!post){
            return NextResponse.json({message: "Blog not found"}, {status: 404});
        }
        return NextResponse.json({post}, {status: 200});
    }catch(err){
        console.error("can not get", err);
        return NextResponse.json({message: "can not get blog"}, {status: 400});
    }
}