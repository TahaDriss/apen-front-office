import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-surveillance',
  templateUrl: './surveillance.component.html',
  styleUrls: ['./surveillance.component.css']
})
export class SurveillanceComponent implements OnInit {


  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("surveillance").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
