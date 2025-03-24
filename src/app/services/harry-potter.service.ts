import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private readonly http = inject(HttpClient);
  private readonly URL_HOWARTS_STAFF = "https://hp-api.onrender.com/api/characters"

  constructor() { }

  getStaff(): Observable<any>{
    return this.http.get<any>(this.URL_HOWARTS_STAFF);
  }

}
