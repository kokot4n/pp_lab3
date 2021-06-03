import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  @Input() radioValue!: number;
  @Input() data!: any;
  rows:any[] = [];
  columns = [{ prop: 'radio' }, { name: 'Icecream' }, { name: 'Pizza' }, { name: 'Burger' }];

  constructor() { }

  ngOnInit(): void { 
    this.rows.push(this.data);
  }

  update(){
    this.rows = [this.data];
    console.log(this.data);
    
  }

}
