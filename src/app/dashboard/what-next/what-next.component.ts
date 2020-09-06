import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-what-next',
  templateUrl: './what-next.component.html',
  styleUrls: ['./what-next.component.scss', '../dialog.scss']
})
export class WhatNextComponent implements OnInit {
  public id: number;
  public currentStep: {id: number, nome: string};

  public isAvailable: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.id = 4;
    this.currentStep = data;
    
    this.isAvailable = (this.id <= this.currentStep.id + 1);
  }

  ngOnInit(): void {
  }

}
