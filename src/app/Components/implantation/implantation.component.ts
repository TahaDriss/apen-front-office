import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-implantation',
  templateUrl: './implantation.component.html',
  styleUrls: ['./implantation.component.css']
})
export class ImplantationComponent implements OnInit {

  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("implantation").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }

}
