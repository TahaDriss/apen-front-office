import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';

@Component({
  selector: 'app-nos-activites',
  templateUrl: './nos-activites.component.html',
  styleUrls: ['./nos-activites.component.css']
})
export class NosActivitesComponent implements OnInit {
  page : Page;
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.getPage("nos activites").subscribe(data => {
      this.page = data;
      console .log(data);
    })
  }
}
