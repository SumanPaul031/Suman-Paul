import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProjectClick(project){
    // console.log(project.text.split(" ")[0]);
    this.router.navigate(['project', project.text.split(" ")[0]])
  }

}
