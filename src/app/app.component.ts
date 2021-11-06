import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Walmart';

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
  }

   goHome() {
    this.router.navigate(['/'], { state: { } });
  }
}

