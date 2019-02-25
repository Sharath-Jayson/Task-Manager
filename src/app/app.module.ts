import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewTaskComponent } from './main/new-task/new-task.component';
import { TaskListComponent } from './main/task-list/task-list.component';
import { TaskDetailsComponent } from './main/task-details/task-details.component';
import { HeaderComponent } from './header/header.component';

import { AppServiceService } from './app-service.service'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
