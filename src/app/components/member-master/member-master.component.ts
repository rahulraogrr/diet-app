import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/dto/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-master',
  templateUrl: './member-master.component.html',
  styleUrls: ['./member-master.component.css']
})
export class MemberMasterComponent implements OnInit {
  memberData: Member | undefined;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {

  }

  generateView() {
    const params = null;
    this.membersService.getMemberById(params);
  }

}