import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Services/service.service';
import {Page} from '../../Models/Page';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    // this.service.getPage("test").subscribe(data => {
    //   this.page = data;
    //   console .log(data);
    // })

  }

}
