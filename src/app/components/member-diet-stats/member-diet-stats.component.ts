import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { MemberDietStatsRequest } from '../models/member-diet-stats-request';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-member-diet-stats',
  templateUrl: './member-diet-stats.component.html',
  styleUrls: ['./member-diet-stats.component.css']
})
export class MemberDietStatsComponent implements OnInit {

  private destroyed$ = new Subject();

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    
  }

  generateView(){
    const memberDietStatsRequest = this.getMemberDietStatsRequest();
    this.membersService
        .createMemberStats(memberDietStatsRequest)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(response => {
          console.log(response);
        });
  }

  getMemberDietStatsRequest() {
    const memberDietStatsRequest = new MemberDietStatsRequest();
    return memberDietStatsRequest;
  }

}
