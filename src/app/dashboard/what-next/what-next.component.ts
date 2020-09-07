import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-what-next',
  templateUrl: './what-next.component.html',
  styleUrls: ['./what-next.component.scss', '../dialog.scss']
})
export class WhatNextComponent implements OnInit {
  public id: number;
  public currentStep: {id: number, nome: string};

  public isAvailable: boolean;

  public results = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '0'
  };

  public forms: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.id = 4;
    this.currentStep = data;
    
    this.isAvailable = (this.id <= this.currentStep.id + 1);
  }

  ngOnInit(): void {
    this.forms = new FormGroup({
      answer1: new FormControl(this.results.answer1, [Validators.required]),
      answer2: new FormControl(this.results.answer2, [Validators.required]),
      answer3: new FormControl(this.results.answer3, [Validators.required]),
      answer4: new FormControl(this.results.answer4, [Validators.required])
    });

  }

}
