import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewTaskComponent } from './main/new-task/new-task.component';
import { TaskDetailsComponent } from './main/task-details/task-details.component';
import { TaskListComponent } from './main/task-list/task-list.component';

const sideBarRoutes: Routes = [{
  path: 'new-task',
  component: NewTaskComponent,
},
{
  path: 'task-details',
  component: TaskDetailsComponent,
},
{
  path: 'detail/:id',
  component: TaskListComponent,
},
{
  path: '**',
  component: NewTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(sideBarRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
