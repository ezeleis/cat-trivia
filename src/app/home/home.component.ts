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
    this.http.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat').subscribe((data: any) => {
  this.catFacts = data.text;
  console.log(data);
  });

  }
  

  imagem() {
    console.log('imagem para test');
  }

  gif() {
    console.log('gif para teste');
  }
}
