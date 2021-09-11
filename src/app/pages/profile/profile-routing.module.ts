import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DisplayComponent} from '@app/pages/profile/pages/display/components/display.component'
import {UserResolver} from "@app/pages/profile/pages/form/resolvers/user-resolver";

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
    resolve: {
      user: UserResolver
    }
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/display/display.module').then(m => m.DisplayModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
