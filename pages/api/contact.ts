import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function contactForm(req:NextApiRequest,res:NextApiResponse){
    let language = req.headers['locale'];
    
    try {
        
        let  transporter = nodemailer.createTransport({
            port: 465,
            host: process.env.COMPANY_HOST,
            auth: {
                user: process.env.USER_NAME,
                pass: process.env.USER_PASS,
            },
            secure: true,
        });
        
        const {
            userName,
            userLastName,
            userEmail,
            userPhone,
            userCompany,
            userCountry,
            userState,
            userCity,
            userMessage
        } = req.body;
        
        let message = {
            from: `${userName} ${userLastName}`,
            to: process.env.USER_NAME,
            html:`
                <div style="padding:20px 30px;display:float;width:100%;">
                    <h1>${userName} ${userLastName}</h1>
                    <p style="font-size:16px;">${userMessage}</p>
                    <footer style="display:float;width:100%;">
                        <span style="font-size:22px;">Data:</span>
                        <ul style="list-style:none;font-size:20px;display:float;width:100%;">
                            <li>Company: ${userCompany}</li>
                            <li>Email: ${userEmail}</li>
                            <li>Phone: ${userPhone}</li>
                            <li>Country: ${userCountry}</li>
                            <li>State: ${userState}</li>
                            <li>City: ${userCity}</li>
                        </ul>
                    </footer>
                </div>
            `
        }
        await transporter.sendMail(message, function (err, info) {
            if (err) {
                return res.status(400).json(errorMessage(language));
            } else {
                return res.status(200).json(successMessage(language));
            }
        });
    } catch (e) {
        return res.status(400).json(errorMessage(language));
   }
}

function successMessage(language:any)
{
    let responseEs = {
        ok: true,
        message: "Gracias por contactarme, te responderé tan pronto como sea posible"
    }
    let responseEn = {
        ok: true,
        message: "Thanks, I will respond as soon as possible."
    }

    if(language === "es"){
        return responseEs
    } else {
        return responseEn
    }
}

function errorMessage(language:any)
{
    let responseEs = {
        ok: false,
        message:"Parece que hay un error, intentá con otro medio de contacto.",
    }
    let responseEn = {
        ok: false,
        message:"Sorry seems to be an error, try another contact method.",
    }

    if(language === "es"){
        return responseEs
    } else {
        return responseEn
    }
}