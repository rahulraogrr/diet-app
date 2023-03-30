import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberMasterComponent } from './components/member-master/member-master.component';

const routes: Routes = [
    { path: 'member-master', component: MemberMasterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
