import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent implements OnInit {

  output = "";

  constructor() { }

  ngOnInit(): void {
    this.output = "";
    var dividend = 18;
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    var idx;

    for (idx = 0; idx < numbers.length; idx++) {
      var factor;
      var divisor = numbers[idx];

      if (dividend % divisor === 0) {
        factor = true;
      }

      if (factor) {
        this.output += divisor + ' is a factor of ' + dividend + '!\n';
      }
    }
  }

}
