import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-service-rh',
  templateUrl: './service-rh.component.html',
  styleUrls: ['./service-rh.component.css']
})
export class ServiceRHComponent implements OnInit {


  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("services des ressources humaines").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
