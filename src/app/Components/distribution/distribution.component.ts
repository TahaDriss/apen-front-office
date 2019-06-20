import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {


  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("distribution").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
