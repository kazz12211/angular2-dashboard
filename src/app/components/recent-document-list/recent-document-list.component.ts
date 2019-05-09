import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-recent-document-list',
  templateUrl: './recent-document-list.component.html',
  styleUrls: ['./recent-document-list.component.css']
})
export class RecentDocumentListComponent implements OnInit {

  documents: any[];

  constructor(private documentService: DocumentService) { 
    documentService.getRecentDocuments().subscribe(docs => {
      this.documents = docs;
    });
  }

  ngOnInit() {
  }

}
