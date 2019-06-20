import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-incendie',
  templateUrl: './incendie.component.html',
  styleUrls: ['./incendie.component.css']
})
export class IncendieComponent implements OnInit {

  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("incendie").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
