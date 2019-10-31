import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rightcontent',
  templateUrl: './rightcontent.component.html',
  styleUrls: ['./rightcontent.component.scss']
})
export class RightcontentComponent implements OnInit {

  information:any[];

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

}
