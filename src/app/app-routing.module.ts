import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './components/members/members.component';
import { MemberDietStatsComponent } from './components/member-diet-stats/member-diet-stats.component';

const routes: Routes = [
    { path: 'members', component: MembersComponent },
    { path: 'member-diet-stats', component: MemberDietStatsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
