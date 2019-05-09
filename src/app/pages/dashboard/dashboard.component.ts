import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pages: any = {};
  currentPage: string = 'dashboard';

  constructor(private router: Router) { }

  ngOnInit() {
    this.pages = {
      dashboard: {
          title: 'ダッシュボード',
          subTitle: 'Webサイトの管理'
      },
      documents: {
          title: 'ドキュメント',
          subTitle: 'ワークフロードキュメントの管理'
      },
      users: {
          title: 'ユーザ',
          subTitle: 'ユーザの管理'
      },
      roles: {
          title: 'ロール',
          subTitle: 'ユーザロールの管理'
      },
      groups: {
          title: 'グループ',
          subTitle: 'ユーザグループの管理'
      },
      dataAccessGroups: {
          title: 'データアクセス',
          subTitle: 'データアクセスグループの管理'
      },
      workflow: {
          title: 'ワークフロー',
          subTitle: 'ワークフロールールの変更'
      },
      config: {
          title: 'サイト設定',
          subTitle: 'サイトの設定'
      }
    };
  }

  activeState(page: string): string {
    if(page === this.currentPage) {
        return 'active';
    } else {
        return '';
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/']);
  }

}
