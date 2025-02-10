import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const { name, email, message } = await req.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: 'Nuevo mensaje desde el formulario',
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
        })

        return NextResponse.json({ message: "Email enviado con exito" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Error al crear heroes:', error: error.message }, { status: 500 })
    }
}