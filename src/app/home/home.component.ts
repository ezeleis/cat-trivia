import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  catFacts: any;
  catImg:any;
  constructor(private http: HttpClient) {}

  ngOnInit() {

  }
  image(){
    this.http.get('https://api.thecatapi.com/v1/images/search').subscribe((data: any) => {
  this.catImg = data[0].url;
    });
  }

  phrase() {
    this.http.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat').subscribe((data: any) => {
      this.catFacts = data.text;
      });
  }
}
