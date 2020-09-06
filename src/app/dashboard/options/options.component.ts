import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss', '../dialog.scss']
})
export class OptionsComponent implements OnInit {
  public id: number;
  public currentStep: {id: number, nome: string};

  public isAvailable: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.id = 3;
    this.currentStep = data;

    this.isAvailable = (this.id <= this.currentStep.id + 1);
  }

  ngOnInit(): void {
  }

}
