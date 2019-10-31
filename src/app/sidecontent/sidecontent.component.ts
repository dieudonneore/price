import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidecontent',
  templateUrl: './sidecontent.component.html',
  styleUrls: ['./sidecontent.component.scss']
})
export class SidecontentComponent implements OnInit {
  menus:any=[
    {

    }
  ];

  categories:Array<{icon: string,title:string,theme:any}>;

  constructor() {
    this.categories=[
      {
        icon: 'local_taxi',
        title: 'Vehicles',
        theme: 'homepage'
      },
      {
        icon: 'home',
        title: 'Real-estate',
        theme: 'homepage'
      },
      {
        icon: 'assignment_turned_in',
        title: 'Fashion',
        theme: 'homepage'
      },

      {
        icon: 'device_hub',
        title: 'Electronics',
        theme: 'homepage'
      },

      {
        icon: 'local_cafe',
        title: 'Services',
        theme: 'homepage'
      },
      {
        icon: 'transfer_within_a_station',
        title: 'Jobs',
        theme: 'homepage'
      },
      {
        icon: 'sentiment_satisfied_alt',
        title: 'Animal & pets',
        theme: 'homepage'
      },

      {
        icon: 'work',
        title: 'Travel',
        theme: 'homepage'
      },
      {
        icon: 'record_voice_over',
        title: 'Education',
        theme: 'homepage'
      }
    ];
  }

  ngOnInit() {
  }

}
