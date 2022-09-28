import { NextApiRequest, NextApiResponse } from "next";


export default function contactForm(req:NextApiRequest,res:NextApiResponse){
    console.log(req.body)
    return res.json({
        message: "Todo bien."
    })
}