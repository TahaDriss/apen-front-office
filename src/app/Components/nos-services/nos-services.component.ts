import { Component, OnInit } from '@angular/core';
import {Page} from '../../Models/Page';
import {ServiceService} from '../../Services/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {
  private fragment: string;
  page : Page;
  constructor(private service : ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getPage("nos services").subscribe(data => {
      this.page = data;
      console .log(data);
    });
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
