import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin.module').then(m => m.AdminModule)
  },

  { path: '', redirectTo: 'admin',  pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
