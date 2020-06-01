import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  logo;

  constructor() { }

  ngOnInit(): void {
    // this.logo = document.querySelectorAll('#logo path');
    // console.log(typeof this.logo);
    // this.logo.forEach(element => {
    //   console.log(element, element.getTotalLength());
    // });
  }

  ngAfterViewInit(): void{
    
  }

}
