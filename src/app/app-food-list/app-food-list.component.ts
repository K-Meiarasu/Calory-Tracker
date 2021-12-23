import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  public foods=[
    {
      name : 'Apple',
      image : 'https://www.seekpng.com/png/detail/9-92740_apple-png.png',
      calories :52,
      qty:1,
    },
    {
      name : 'Banana',
      image : 'https://www.seekpng.com/png/detail/34-341853_banana-png-image-with-transparent-background-1-pound.png',
      calories :89,
      qty:1,
    },
    {
      name : 'Dates',
      image : 'https://www.seekpng.com/png/full/237-2376411_dates-png-image-date-fruit-transparent-background.png',
      calories :282,
      qty:1,
    },
    {
      name : 'Grapes',
      image : 'https://www.seekpng.com/png/full/25-250412_free-png-transparent-grapes-png-png-images-transparent.png',
      calories :67,
      qty:1,
    },
    {
      name : 'Biscuits',
      image : 'https://www.seekpng.com/png/full/137-1371447_free-png-biscuit-png-images-transparent-biscuits-png.png',
      calories :353,
      qty:1,
    },
    {
      name : 'Strawberries',
      image : 'https://www.seekpng.com/png/detail/782-7822936_strawberry-png-image-strawberry-clipart-strawberry-fruit-png.png',
      calories :33,
      qty:1,
    }
  ]
  isClicked=false;
  public food1=[
    {
      name : '',
      image : '',
      calories : 0,
      qty:1,
    },
  ]
  name='';
  calories: any;
  image='';
  word:string='';
  total=0;
  qaty:number=1;
  constructor() { }
  ngOnInit(): void {
  }
  newfood()
  {
    console.log(this.qaty);
    this.foods.push({name :this.name, image: this.image, calories: this.calories, qty:this.qaty});
  }
  addl=false;
  append(n:any,val:any)
  {
    this.isClicked=true;
    n.qty=val;
    console.log(val);
    this.total=this.total+(n.calories*n.qty);
    this.food1.push(n)
  }
}
