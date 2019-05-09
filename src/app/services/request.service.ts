import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requests: any[] = [
    { id: 100, title: 'Document 1', requester: 'User 2', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-05' },
    { id: 101, title: 'Document 2', requester: 'User 3', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-06' },
    { id: 102, title: 'Document 3', requester: 'User 4', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-07' },
    { id: 103, title: 'Document 4', requester: 'User 2', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-08' },
    { id: 104, title: 'Document 5', requester: 'User 3', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-09' },
    { id: 105, title: 'Document 6', requester: 'User 4', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-05' },
    { id: 106, title: 'Document 7', requester: 'User 5', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-06' },
    { id: 107, title: 'Document 8', requester: 'User 2', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-07' },
    { id: 108, title: 'Document 9', requester: 'User 3', action: 'Approval Request', state: 'Expired', submittedDate: '2019-04-08' },
    { id: 109, title: 'Document 10', requester: 'User 4', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-09' },
    { id: 110, title: 'Document 11', requester: 'User 5', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-10' }
  ];

  constructor() { }

  getMyRequests(): Observable<any[]> {
    return of(this.requests);
  }


}
