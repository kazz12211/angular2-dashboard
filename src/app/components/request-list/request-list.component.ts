import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: any[];

  constructor(private requestService: RequestService) { 
    this.requestService.getMyRequests().subscribe(reqs => {
      this.requests = reqs;
    });
  }

  ngOnInit() {
  }

}
