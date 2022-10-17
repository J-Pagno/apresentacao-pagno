import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-button',
  templateUrl: './actions-button.component.html',
  styleUrls: ['./actions-button.component.css'],
})
export class ActionsButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() href: string = '';

  constructor() {}

  ngOnInit(): void {}
}
