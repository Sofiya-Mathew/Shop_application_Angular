const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')

const app=express();
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors({origin:true,credentials:true}))

const stripe=require('stripe')("sk_test_51MEeS3SBVsYb0Z0BYnYt2yUd4UsSGOAwRLNqCoAZdpEU5xvpdvZ4m2hyIt82vY6Vhu0piNg8DMctYDQK8WKvCKrO002YNR1z4T")
app.post("/checkout",async(req,res,next)=>{
    try {
        const session=stripe.checkout.sessions.create({
            line_items:req.body.items.map((item)=>({
                currency: 'usd',
                product_data:{
                    name:item.name,
                    images:[item.product]
                },
                units_amount:item.price
            }))
        })
    } catch (error) {
        
    }
})