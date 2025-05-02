import { NextResponse } from "next/server";
import { connDB } from "../../../../libs/mongodb";
import subscribeModel from "../../../../models/subscribe";

export async function POST(req: Request) {
    function validateEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { message: "Email is required" },
                { status: 400 }
            );
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                { message: "Please provide a valid email address" },
                { status: 400 }
            );
        }

        await connDB();

        const existingSubscriber = await subscribeModel.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json(
                { message: "This email is already subscribed" },
                { status: 409 }
            );
        }

        await subscribeModel.create({ email });
        
        return NextResponse.json(
            { message: "Successfully subscribed" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Subscription error:", err);
        return NextResponse.json(
            { message: "Failed to subscribe. Please try again later." },
            { status: 500 }
        );
    }
}