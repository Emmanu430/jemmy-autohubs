    import { Resend } from "resend";
    import { NextResponse } from "next/server";

    const resend = new Resend(process.env.RESEND_API_KEY);

    export async function POST(req: Request) {
    try {
        const { name, phone, email, interest, message } = await req.json();

        if (!name || !phone || !email) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
        from: "Jemmy Autohubs <onboarding@resend.dev>",
        // to: "your@email.com",
        to: "alabii1.0e@gmail.com",
        replyTo: email,
        subject: `New enquiry: ${interest || "General"}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
        });

        if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        }

        console.log("Email sent:", data);
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Contact route crashed:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}