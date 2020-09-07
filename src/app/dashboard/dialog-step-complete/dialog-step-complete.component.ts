import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-step-complete',
  templateUrl: './dialog-step-complete.component.html',
  styleUrls: ['./dialog-step-complete.component.scss', '../dialog.scss']
})
export class DialogStepCompleteComponent implements OnInit {
  public imgUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.imgUrl = data;
  }

  ngOnInit(): void {
  }

}
