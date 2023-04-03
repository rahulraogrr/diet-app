import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberDietStatsRequest } from '../components/models/member-diet-stats-request';
import { Member } from '../dto/member';
import { environment } from 'src/environments/environment';
import { membersServiceEndpoints } from '../endpoints/members-service-endpoints';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  createMemberStats(memberDietStatsRequest: MemberDietStatsRequest) {
    const url = environment.apiUrl + environment.dietServiceContext + membersServiceEndpoints.post;
    return this.httpClient.post<Member>(url, memberDietStatsRequest);
  }

  getMemberById(params: null) {
    return this.httpClient.get;
  }

  constructor(private httpClient: HttpClient) { }
}
