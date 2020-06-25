import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title;
  name;
  links: boolean = true;
  description;
  url;
  type;
  role;
  date;
  image;
  // ;
  // ;
  // ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['name'];
    });

    if(this.title == "MEAN-Blog"){
      this.name = "MEAN Blog Website";
      this.url = "https://mean-blog09.herokuapp.com/";
      this.image = "../../../assets/img/mean-blog.PNG";
      this.date = new Date("2020-03-25");
      this.type = "Full Stack Project";
      this.role = "Functional";
      this.description = "It is a simple blog website created in Angular with the help of NodeJs and Express with MongoDB as the database. An admin can verify and control the users and moderators of the website."
    } else if(this.title == "Covid-19"){
      this.name = "Coronavirus Tracker";
      this.title = "Coronavirus Tracker";
      this.url = "https://coronavirus-tracker-a4f64.web.app";
      this.image = "../../../assets/img/covid19-tracker.PNG";
      this.date = new Date("2020-02-13");
      this.type = "Angular Project";
      this.role = "Design";
      this.description = "It is a simple website which shos the daily statistics of coronavirus cases all over the world along with the map showing the highest concentration of cases."
    } else if(this.title == "Coronavirus"){
      this.name = "Covid-19 Statistics";
      this.title = "Covid-19 Statistics";
      this.url = "https://coronavirus-tracker-ii.web.app";
      this.image = "../../../assets/img/covid19-tracker-ii.PNG";
      this.date = new Date("2020-05-05");
      this.type = "Front-End Project";
      this.role = "Design";
      this.description = "This website gives a live update of new cases, deaths and recovered along with the increase in each category with data specific to a country."
    } else if(this.title == "Mybrary"){
      this.name = "Online Library";
      this.url = "https://suman-mybrary.herokuapp.com";
      this.image = "../../../assets/img/mybrary.PNG";
      this.date = new Date("2019-12-19");
      this.type = "Full Stack Project";
      this.role = "Functional";
      this.description = "An Online Book Store where details of the author along with their books are stored for the user to search and find a particular author or book."
    } else if(this.title == "Budget"){
      this.name = "Budget Calculator";
      this.title = "Budget Calculator";
      this.url = "https://budget-app-2031.firebaseapp.com";
      this.image = "../../../assets/img/budget-calculator.PNG";
      this.date = new Date("2019-12-05");
      this.type = "Front-End Project";
      this.role = "Design";
      this.description = "An Online Budget Calculaator where a simple method is used where for expenses you have to provide '-' befor the amount and nothing before the gain with the name of the gain or loss to get the result."
    } else if(this.title == "Firestore"){
      this.name = "Cloud Cafe";
      this.title = "Firestore Demo";
      this.url = "https://firestore-begin.web.app";
      this.image = "../../../assets/img/Firestore.PNG";
      this.date = new Date("2020-06-19");
      this.type = "Firebase Project";
      this.role = "Implementation";
      this.description = "An Simple Cloud Cafe which works using Firebase and uses the database provided by Firebase, i.e. FireStore to store data"
    } else if(this.title == "Firebase"){
      this.name = "Firebase Cloud Functions Demo";
      this.title = "Most Loved Languages";
      this.url = "https://functions-begin.web.app/";
      this.image = "../../../assets/img/Firebase Cloud Functions.PNG";
      this.date = new Date("2020-06-25");
      this.type = "Firebase Project";
      this.role = "Implementation";
      this.description = "An Simple Voting System which works using Firebase Cloud Functions and uses the database provided by Firebase, i.e. FireStore to store data"
    }
  }

}
