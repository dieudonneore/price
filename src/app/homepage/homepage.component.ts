import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  message:any;
  infos:any=[
    {
      'idproduct': 1,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 2,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 3,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'idproduct': 4,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 5,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 6,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'idproduct': 7,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 8,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 9,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'idproduct': 10,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 11,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 12,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'idproduct': 13,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 14,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 15,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg\''
    },
    {
      'idproduct': 16,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 17,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 18,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg\''
    },
    {
      'idproduct': 19,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 20,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 21,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'idproduct': 22,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 23,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'idproduct': 24,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'\'image\':\'../assets/images/bmw.jpg\''
    },
    {
      'idproduct': 25,
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'idproduct': 26,
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/bmw.jpg'
    },

    {
      'idproduct': 27,
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    }

  ];

  detailsproduct:any [];

  constructor() {}

  ngOnInit() {}

  displaydetails(info){
    this.detailsproduct = info;
    console.log(this.detailsproduct)
  }


}
