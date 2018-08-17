import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  apiUrl = '';
  data: object;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .subscribe(data => {
      // console.log(data);
      this.data = data["items"];
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    
  }

}
