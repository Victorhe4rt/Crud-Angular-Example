import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableInterface } from '../interfaces/table-interface';
  
@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  apiUrl = 'http://localhost:3000/users';

  getUsers(){
    return this.http.get<TableInterface[]>(this.apiUrl);  
  }

constructor(private http: HttpClient) { }

}
