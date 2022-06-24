import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service';
import { library } from '../models/library.model';


@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.component.html',
  styleUrls: ['./bookhome.component.css']
})
export class BookhomeComponent implements OnInit {

  libraryResult: any;
  libraryList: any;
  
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }
  getlibraryList(){
    this.libraryService.getlibrary().subscribe((data:any)=> {
      this.libraryResult = data;
      console.log("data");
      this.libraryList = data.libraryResult.results;
      
    });
    }
}
