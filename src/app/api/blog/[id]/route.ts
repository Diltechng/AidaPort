import { NextResponse } from "next/server";
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

export async function GET(req: Request, {params}){
    try{
        await connDB();
        const {id} = params;
        const blog = await blogModel.findOne({_id: id});
        return NextResponse.json({blog}, {status: 200});
    }catch(err){
        console.error("can not get", err);
        return NextResponse.json({message: "can not get blog"}, {status: 400});
    }
}