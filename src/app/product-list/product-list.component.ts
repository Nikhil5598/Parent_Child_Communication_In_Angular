import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private Http:HttpClient) { }

Product_list: any[] = [];



  ngOnInit(): void {
   this.Http.get("https://fakestoreapi.com/products").subscribe((res) =>{this.Product_list=res as any[];}

  )
  console.log(this.Product_list);
  }

}
