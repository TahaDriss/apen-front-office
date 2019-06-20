import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-politique-commerciale',
  templateUrl: './politique-commerciale.component.html',
  styleUrls: ['./politique-commerciale.component.css']
})
export class PolitiqueCommercialeComponent implements OnInit {


  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("politique commerciale").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
