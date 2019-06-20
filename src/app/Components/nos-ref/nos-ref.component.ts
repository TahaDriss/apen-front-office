import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-nos-ref',
  templateUrl: './nos-ref.component.html',
  styleUrls: ['./nos-ref.component.css']
})
export class NosRefComponent implements OnInit {
  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("nos references").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
