import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-model',
  templateUrl: './circle-progress-model.component.html',
  styleUrls: ['./circle-progress-model.component.css'],
})
export class CircleProgressModelComponent implements OnInit {
  @Input() outRadioColor: string = '';
  @Input() inRadioColor: string = '';
  @Input() title: string = '';
  @Input() percent!: number;

  constructor() {}

  ngOnInit(): void {}
}
