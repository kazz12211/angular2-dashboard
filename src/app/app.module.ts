import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { RecentDocumentListComponent } from './components/recent-document-list/recent-document-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { DagListComponent } from './components/dag-list/dag-list.component';
import { WorkflowSettingComponent } from './components/workflow-setting/workflow-setting.component';
import { SiteConfigComponent } from './components/site-config/site-config.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    OverviewComponent,
    DocumentListComponent,
    RequestListComponent,
    UserPreferencesComponent,
    RecentDocumentListComponent,
    UserListComponent,
    RoleListComponent,
    GroupListComponent,
    DagListComponent,
    WorkflowSettingComponent,
    SiteConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
