import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent implements OnInit {
  list: Array<string> = [];

  textInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addItem(value:string) {
    this.list.push(value);
  }

  removeItem(event: any) {
    this.list.pop();
  }

}
