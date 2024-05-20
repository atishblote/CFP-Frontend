import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private apiBaseUrl = 'https://cricbuzz-cricket.p.rapidapi.com';
  private apiKey = 'ec0dfbdc2emsh7d6339df5b5a91dp149b68jsnf1e0e44cc745';
  private baseUrl = 'https://admin.cricfootbook.com/';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
    });
  }

  private getSiteHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  public getRankings(type: string, category: string): Observable<any> {
    const url = `${this.apiBaseUrl}/stats/v1/rankings/${category}?formatType=${type}`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  public gerScore(endpoint: any): Observable<any> {
    const url =
      'https://api.cricapi.com/v1/match_scorecard?apikey=f90f8f42-5bd5-4020-ac55-837455153d84&id=42fb8e23-54f1-4c8e-863e-51131af5deb5';
    // const url = `http://localhost:3000/${endpoint}`;
    const headers = this.getHeaders();
    return this.http.get(url);
  }

  public getMatchInfo(id: any): Observable<any> {
    const urlss = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const headers = this.getHeaders();
    return this.http.get(urlss, { headers });
  }

  // upcomming fantacy
  public getUpcommingFantacy(endpoint: string): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.getSiteHeaders();
    return this.http.get(url, { headers });
  }

  // signUp
  public signUpUser(endpoint: string, data:any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.getSiteHeaders();
    return this.http.post(url,data, { headers });
  }

  public getCommentry(id: any, endpoint: any): Observable<any> {
    const urlss = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/${endpoint}`;
    const headers = this.getHeaders();
    return this.http.get(urlss, { headers });
  }

  createOrder(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}payment`, formData);
  }

  // sesstion
  userLogin(data: any): void {
    const userDataString = JSON.stringify(data);

    // Store the stringified data in sessionStorage
    sessionStorage.setItem("userdata",userDataString)

  }
  signOut() {
    sessionStorage.removeItem("userdata")
  }

  getUserData(){
    const userDataString = sessionStorage.getItem('userdata');

    // Parse the stringified data back to an object
    return userDataString ? JSON.parse(userDataString) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUserData();
  }
}
