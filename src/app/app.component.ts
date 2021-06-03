import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecondaryComponent } from './secondary/secondary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  alertIsOpen = false;
  public groupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      radio: 1,
      icecream: true,
      pizza: false,
      burger: false
    });
    
  }
}
