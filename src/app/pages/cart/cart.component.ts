import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Cart={items:[{
    product:"https://via.placeholder.com/150",
    name:'shoes',
    price:2000,
    quantity:2,
    id:1
  },
  {
    product:"https://via.placeholder.com/150",
    name:'shoes',
    price:2000,
    quantity:2,
    id:1
  }]}

   dataSource:Array<cartItem>=[]
   displayedColumns:Array<string>=[
     'product',
     'name',
     'price',
     'quantity',
     'total',
     'action'
   ]

  constructor(private cartService:CartService,private httpClient:HttpClient) { }

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart:Cart)=>{
        this.cart=_cart;
        this.dataSource=this.cart.items;
      })
  }

  getTotal(items:Array<cartItem>):number{
  return this.cartService.getTotal(items)
  }

  onClearCart():void{
     this.cartService.clearCart()
  }
  onRemoveFromCart(item:cartItem):void{
   this.cartService.removeFromCart(item)
  }

  onAddQuantity(item:cartItem):void{
     this.cartService.addToCart(item)
  }

  onRemoveQuantity(item:cartItem):void{
     this.cartService.removeQuantity(item)
  }

  // onCheckout():void{
  //  this.httpClient.post('http://localhost:4200/checkout',{
  //   items:this.cart.items
  //  }).subscribe(async(res:any)=>{
  //   let stripe=await loadStripe("pk_test_51MEeS3SBVsYb0Z0BvwtSsK9EuEGdCokdi4vcHFH2zU3MhTSkJr9dDAZfTOp9ckx7QjnsdUiQWxeYRfAAqkgFJZRO00uA4Z9SnK")
  //   stripe?redirectToCheckout({
  //     sessionId:res
  //   })
  //  })
  // }
}
