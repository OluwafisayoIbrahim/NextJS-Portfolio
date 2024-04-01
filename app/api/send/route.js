import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) { 
  try {
    const { email, subject, message } = await request.json();

    const senderEmail = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass,
      }
    });

    const mailOption = {
      from: senderEmail,
      to: senderEmail,
      subject: "New Contact Message",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <title></title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
              /* Your CSS styles */
              .email-container {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 20px;
                background-color: #f9f9f9;
                font-family: Arial, sans-serif;
              }
              .form-heading {
                color: #2a2a2a;
                font-size: 18px;
                margin: 0 0 8px;
              }
              .form-answer {
                color: #2a2a2a;
                font-size: 16px;
                margin: 0 0 24px;
              }
              .footer {
                margin-top: 20px;
                font-size: 14px;
                color: #999;
              }
            </style>
          </head>
          <body style="margin: 0 !important; padding: 0 !important; background: #fff">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px">
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td>
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="padding: 0 0 0 0;">
                                    <h2>New Contact Message</h2>
                                    <div class="email-container">
                                      <div class="form-container">
                                        <h3 class="form-heading">Sender's Email:</h3>
                                        <p class="form-answer">${email}</p>
                                        <h3 class="form-heading">Subject:</h3>
                                        <p class="form-answer">${subject}</p>
                                        <h3 class="form-heading">Message:</h3>
                                        <p class="form-answer">${message}</p>
                                      </div>
                                    </div>
                                    <p class="footer">This email was sent via your contact form on Your Website.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    };
    
    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send Email" }, { status: 500 });
  }
}
