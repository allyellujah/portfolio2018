import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    setTimeout(function(){
      let logo = document.getElementById("logo");
      logo.className += " post-animate";
    }, 1500);
  }

  ngOnInit() {

  }

}
