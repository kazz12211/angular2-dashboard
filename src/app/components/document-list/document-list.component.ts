import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any[];

  constructor(private documentService: DocumentService) { 
    documentService.getMyDocuments().subscribe( docs => {
      this.documents = docs;
    });
  }

  ngOnInit() {
  }

}
