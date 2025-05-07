import { NextResponse } from "next/server";
import projectModel from "../../../../models/project";
import { connDB } from "../../../../libs/mongodb";

export async function POST(req: Request){
    try{
        const {title, tech, link, description, status, client, images} = await req.json();

    if(!title || !tech || !link || !description || !status || !client){
        return NextResponse.json(
            {message: "You can not submit an empty field"},
            {status: 500}
        )
    };
    await connDB();
    await projectModel.create({title, tech, link, description, status, client, images});
    return NextResponse.json(
        {message: "Project submitted"},
        {status: 200}
    )
    }catch(err){
        console.error("sorry can not post", err);
        NextResponse.json(
            {message: "oops something went wrong"},
        {status: 500}
        )
    }
    
} 
export async function GET(){
    try{
        await connDB();
       const project = await projectModel.find();
        return NextResponse.json(
            {project})
    }catch(err){
        console.error("can not get", err)
    }
}

export async function DELETE(req: Request){
    try{
        await connDB();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    await projectModel.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic Deleted"}, {status: 200});
    }catch(err){
        console.error("Something went wrong", err);
        
    }
    

}