import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  apiUrl = 'https://cdn.contentful.com/spaces/53ej2eikb0yu/entries?access_token=128b6fb3dc0d0413786f7efb211ff4f7b77b538c72fa705fe3bc7454b3d0b880';
  data: object;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .subscribe(data => {
      this.data = data["items"];
    });
  }

  ngOnInit() {
  }

}
