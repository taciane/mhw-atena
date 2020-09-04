import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectivesComponent } from './objectives/objectives.component';
import { RealityComponent } from './reality/reality.component';
import { OptionsComponent } from './options/options.component';
import { WhatNextComponent } from './what-next/what-next.component';

@Component({
  selector: 'app-dashboard',
  // templateUrl: './dashboard.component.html',
  templateUrl: './dashboard2.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  click(){}

  openDialog() {

    const dialogRef = this.dialog.open(ObjectivesComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){

      }
    });
  }

  openRealityDialog(){
    const dialogRef = this.dialog.open(RealityComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){

      }
    });
  }

  openOptionsDialog(){
    const dialogRef = this.dialog.open(OptionsComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){

      }
    });
  }

  openWhatNextDialog(){
    const dialogRef = this.dialog.open(WhatNextComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
