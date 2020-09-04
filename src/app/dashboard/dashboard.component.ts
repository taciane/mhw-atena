import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectivesComponent } from './objectives/objectives.component';
import { RealityComponent } from './reality/reality.component';
import { OptionsComponent } from './options/options.component';
import { WhatNextComponent } from './what-next/what-next.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // templateUrl: './dashboard2.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // ImageMap = require("image-map");
  parts = [{
    "shape": "circle",
    "type": "objective",
    "coords": "237,82,82"
  }, {
    "shape": "circle",
    "type": "options",
    "coords": "557,524,80"
  }, {
    "shape": "poly",
    "type": "reality",
    "coords": "342,258,350,248,495,247,504,263,504,397,496,408,355,408,343,399"
  }, {
    "shape": "poly",
    "type": "next",
    "coords": "339,655,346,643,485,643,499,654,499,790,491,804,347,802,339,787"
  }];

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

  partClicked(type) {
    switch(type){
      case 'objective':
        this.openDialog();
        break;

      case 'options':
        this.openOptionsDialog();
        break;

      case 'reality':
        this.openRealityDialog();
        break;

      case 'next':
        this.openWhatNextDialog();
        break;

      default:
        break;
    }
 }

}
