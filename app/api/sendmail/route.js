
import sgMail from "@sendgrid/mail"
import { NextResponse } from "next/server"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request) {
    try {
        const { name, email, message } = await request.json()

        const msg = {
            to: email,
            from: 'wottan@live.com.ar',
            subject: `Tienes una consulta de ${name}`,
            text: message,
            html: `<p>${message}</p>`,
        }

        await sgMail.send(msg)

        return NextResponse.json({ message: "Email enviado con exito" }, { status: 201 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Error al crear heroes:', error: error.message }, { status: 500 })
    }
}