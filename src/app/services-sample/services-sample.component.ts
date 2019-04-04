import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services-sample',
  templateUrl: './services-sample.component.html',
  styleUrls: ['./services-sample.component.css'],
  providers:[DataService]
})
export class ServicesSampleComponent implements OnInit {

  constructor(
    //Injection of service
    private dataService: DataService
  ) {
  }

  ngOnInit() {
  }

  counter: number = 0;

  clk(wh: number) {
    if (wh == 1) {
      this.counter = this.dataService.inc();
    } else {
      this.counter = this.dataService.dec();
    }
  }

}
