import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages: any = {};
  currentPage: string = 'home';
  documents: any[];
  requests: any[];

  constructor(private router: Router, private documentService: DocumentService, private requestService: RequestService) {
    documentService.getMyDocuments().subscribe( docs => {
      this.documents = docs;
      requestService.getMyRequests().subscribe( reqs => {
        this.requests = reqs;
      });
    });
  }

  ngOnInit() {
    this.pages = {
      home: {
        title: 'ホーム',
        subTitle: 'ドキュメントとリクエストの概要'
      },
      documents: {
        title: 'ドキュメント',
        subTitle: 'ドキュメントの作成と編集'
      },
      requests: {
        title: 'リクエスト',
        subTitle: 'あなたへのリクエスト'
      },
      userPrefs: {
        title: 'ユーザ設定',
        subTitle: 'ユーザ設定の変更'
      }
    };
 }

  logout() {
    this.router.navigate(['/login']);
  }

  admin() {
    this.router.navigate(['/dashboard']);
  }

  isAdmin(): boolean {
    return true;
  }

  activeState(page: string): string {
    if(page === this.currentPage) {
      return 'active';
    } else {
      return '';
    }
  }
}

