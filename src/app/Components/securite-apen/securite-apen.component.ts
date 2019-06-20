import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-securite-apen',
  templateUrl: './securite-apen.component.html',
  styleUrls: ['./securite-apen.component.css']
})
export class SecuriteApenComponent implements OnInit {


  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("securite apen").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }

}
