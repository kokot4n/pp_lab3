import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {
  @Input() radioValue!: number;
  @Input() data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
