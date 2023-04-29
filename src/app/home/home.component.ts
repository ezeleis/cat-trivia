import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  catFacts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://cat-fact.herokuapp.com/facts').subscribe(data => {
      this.catFacts = data;
    });
  }

  imagem() {
    console.log('imagem');
  }

  gif() {
    console.log('gif');
  }
}
