import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import {MatPaginator} from '@angular/material/paginator';

export enum ToggleEnum {
  en,
  fin
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit   {

  blogList: any;
  imageList: string[] = [];
  cp: number = 1;
  toggleEnum = ToggleEnum;
  selectedLang = ToggleEnum.en;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
  }

  ngAfterViewInit() {
    console.log('ngAfter');
  }

  ngOnInit(): void {
    console.log('Oninit');

    //By default the chosen language is english and repective API call shall be triggered right after view initializes
    this.appService.getBlogFeed("en").subscribe(data => {
            this.blogList = data
    });
  }

  onToggleLang($event) {

    //Makes an additional API only if the current langauge is different from the chosen language by the user

    var changed_lang = "";

    if($event.value != this.selectedLang){
      if ($event.value == 0) {
        changed_lang = "en";
      } else {
        changed_lang = "fi";
      }

      this.selectedLang = $event.value;
      this.cp = 1   //If language is changed, sets the current page back to 1

      //Makes another call to API inorder to update the current feed with the updated language
      this.appService.getBlogFeed(changed_lang).subscribe(data => {
      this.blogList = data
    });


    }

  }


}
