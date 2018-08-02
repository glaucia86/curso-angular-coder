import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // Propriedades de Student:
  name: string = 'Luke'
  isJedi: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
