import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-evenementiel',
  templateUrl: './evenementiel.component.html',
  styleUrls: ['./evenementiel.component.css']
})
export class EvenementielComponent implements OnInit {

  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("evenementiel").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }

}
