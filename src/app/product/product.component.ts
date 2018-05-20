import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<product>;
  constructor() { }

  ngOnInit() {
    this.products=[
      new product(1,"title1","testname"),
      new product(2,"title2","testname"),
      new product(3,"title3","testname"),
      new product(4,"title4","testname")
    ]
  }

}

export class product{
  constructor(
    public id:number,
    public title:string,
    public name: string
  ) { }
}
