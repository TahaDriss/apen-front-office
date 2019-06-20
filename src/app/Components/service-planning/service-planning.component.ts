import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-service-planning',
  templateUrl: './service-planning.component.html',
  styleUrls: ['./service-planning.component.css']
})
export class ServicePlanningComponent implements OnInit {

  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("service planning").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }

}
