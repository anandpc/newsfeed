import { Component, OnInit } from '@angular/core';
import { JsonService } from './json-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'newsfeed';
  todos = [];

  constructor(private jsonService: JsonService){ }

  ngOnInit(){
    this.jsonService.getData().subscribe(data => this.storeData(data));
    this.getDataFromStorage();
  }

  storeData(data){
    let temp: string = JSON.stringify(data);
    window.localStorage.setItem('data',temp);
    console.log('temp : '+temp);
  }

  getDataFromStorage(){
    this.todos = JSON.parse(window.localStorage.getItem('data'));
  }
}
