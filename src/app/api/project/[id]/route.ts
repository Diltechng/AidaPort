import { NextResponse, NextRequest } from "next/server";
import { connDB } from "../../../../../libs/mongodb";
import projectModel from "../../../../../models/project";

export async function PUT(req: Request,{params}){
    try{
        const {id} = params;
    const {newTitle : title, newDescription: description} = await req.json();

    await connDB();

    const update = await projectModel.findByIdAndUpdate(id, {title, description});

    if(!update){
      return  NextResponse.json({message: "You cant update an empty post"}, {status: 404})
    }

    return NextResponse.json({message: "Successfully Updated"}, {status: 200});
    }catch(err){
        console.error("something went wrong", err);
        return NextResponse.json({message: "something went wrong"}, {status: 400});
    }
    
}




export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connDB();
    const {id} = await params;

    if (!id) {
      return NextResponse.json({ message: "Missing project ID" }, { status: 400 });
    }

    const project = await projectModel.findById(id);

    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project }, { status: 200 });

  } catch (err) {
    console.error("Error fetching project:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
