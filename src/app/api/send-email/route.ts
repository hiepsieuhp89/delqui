import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { message: "必須項目をすべて入力してください。" },
        { status: 400 }
      );
    }

    // Check if sender email is configured
    if (!process.env.AWS_SES_SENDER_EMAIL) {
      console.error('AWS_SES_SENDER_EMAIL is not configured');
      return NextResponse.json(
        { message: 'メール送信の設定が不完全です。管理者にお問い合わせください。' },
        { status: 500 }
      );
    }

    // Cấu hình SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SES_ENDPOINT,
      port: 465, // Sử dụng port 465 cho TLS Wrapper
      secure: true, // true cho port 465, false cho port 587
      auth: {
        user: process.env.AWS_SES_ACCESS_KEY, // SMTP username
        pass: process.env.AWS_SES_SECRET_KEY, // SMTP password
      },
    });

    // Tạo nội dung email
    const mailOptions = {
      from: process.env.AWS_SES_SENDER_EMAIL,
      to: process.env.AWS_SES_RECIPIENT_EMAIL || "",
      replyTo: email,
      subject: `ウェブサイトからのお問い合わせ: ${name} (${company})`,
      text: `
名前: ${name}
会社名: ${company}
メールアドレス: ${email}
電話番号: ${phone}
お問い合わせ内容:
${message}
      `,
      html: `
<h2>ウェブサイトからのお問い合わせ</h2>
<p><strong>名前:</strong> ${name}</p>
<p><strong>会社名:</strong> ${company}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>電話番号:</strong> ${phone}</p>
<p><strong>お問い合わせ内容:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "メール送信に失敗しました。後でもう一度お試しください。" },
      { status: 500 }
    );
  }
}
