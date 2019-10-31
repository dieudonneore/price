import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-centercontent',
  templateUrl: './centercontent.component.html',
  styleUrls: ['./centercontent.component.scss']
})
export class CentercontentComponent implements OnInit {
  infos:any=[

    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg\''
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg\''
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/iphone.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'\'image\':\'../assets/images/bmw.jpg\''
    },
    {
      'Product':'Banana',
      'Details':'17 bananas',
      'Price': '50 dollars',
      'country':'Ivory Coast',
      'flag':'../assets/images/ivory-coast.png',
      'image':'../assets/images/banana.jpg'
    },

    {
      'Product':'Iphone',
      'Details':'X Iphone 2019',
      'Price': '750 dollars',
      'country':'Nigeria',
      'flag':'../assets/images/nigeria.png',
      'image':'../assets/images/bmw.jpg'
    },

    {
      'Product':'Car',
      'Details':'Black Bmw serie 1234567',
      'Price': '1750 dollars',
      'country':'Germany',
      'flag':'../assets/images/germany.png',
      'image':'../assets/images/bmw.jpg'
    }

  ];
@Output() public product = new EventEmitter();

  constructor(
    private router: Router) {
  }

  ngOnInit() {

  }

  seedetails(){
    this.product.emit('Dieu merci');
  }

}
