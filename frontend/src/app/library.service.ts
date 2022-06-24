import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

//method to communicate with backend api
  getlibrary(){
    return this.httpClient.get('http://localhost:7000/Library/list');
  }


}
