import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("presentation").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }

}
