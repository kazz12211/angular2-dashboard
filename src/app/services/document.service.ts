import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: any[] = [
    { id: 1, title: 'Document 1', requester: 'User 1', state: 'Submitted', createdAt: '2019-04-21' },
    { id: 2, title: 'Document 2', requester: 'User 2', state: 'Saved', createdAt: '2019-04-20' },
    { id: 3, title: 'Document 3', requester: 'User 2', state: 'Saved', createdAt: '2019-04-17' },
    { id: 4, title: 'Document 4', requester: 'User 5', state: 'Submitted', createdAt: '2019-04-17' },
    { id: 5, title: 'Document 5', requester: 'User 4', state: 'Submitted', createdAt: '2019-04-15' },
    { id: 6, title: 'Document 6', requester: 'User 3', state: 'Withdrawn', createdAt: '2018-04-14' },
    { id: 7, title: 'Document 7', requester: 'User 3', state: 'Processed', createdAt: '2018-04-13' }
  ];

  constructor() { }

  getMyDocuments(): Observable<any[]> {
    return of(this.documents);
  }

  getRecentDocuments(): Observable<any[]> {
    return of(this.documents);
  }
}
