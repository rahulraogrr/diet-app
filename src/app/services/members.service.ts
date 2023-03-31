import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  getMemberById(params: null) {
    return this.httpClient.get;
  }

  constructor(private httpClient: HttpClient) { }
}
