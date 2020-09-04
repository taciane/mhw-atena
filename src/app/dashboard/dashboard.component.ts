import { Component, OnInit, ViewChild } from '@angular/core';
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
export class DashboardComponent implements OnInit{
  public imgUrl: string;
  private step: {id: number, name: string};
  private steps = [{id: 0, name: 'first'},
  {id: 1, name: 'objective'},
  {id: 2, name: 'reality'},
  {id: 3, name: 'options'},
  {id: 4, name: 'next'}];

  public imgParts = [{
    'shape': 'circle',
    'type': 'objective',
    'coords': '',
    'fullCoords': '419,146,141',
    'highlighted': true
  }, {
    'shape': 'circle',
    'type': 'options',
    'coords': '',
    'fullCoords': '977,920,140',
    'highlighted': true
  }, {
    'shape': 'poly',
    'type': 'reality',
    'coords': '',
    'fullCoords': '613,435,866,433,881,458,887,695,870,717,618,715,601,695,601,458',
    'highlighted': true
  }, {
    'shape': 'poly',
    'type': 'next',
    'coords': '',
    'fullCoords': '598,1138,611,1121,875,1125,887,1137,883,1388,880,1410,609,1412,597,1395',
    'highlighted': true
  }];

  @ViewChild('mappedImg') private mappedImg;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.step = this.steps[0];
    this.setImage(this.step.name);
  }

  click(){}

  openDialog(component, step: {id: number, name: string}) {
    console.log('img', this.mappedImg.nativeElement.offsetHeight);

    const dialogRef = this.dialog.open(component, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        if(step['id'] > this.step.id){
          this.step = step;
          this.setImage(this.step.name);
        }
      }
    });
  }

  partClicked(type) {
    switch(type){
      case 'objective':
        this.openDialog(ObjectivesComponent, this.steps[1]);
        break;

      case 'reality':
        this.openDialog(RealityComponent, this.steps[2]);
        break;

      case 'options':
        this.openDialog(OptionsComponent, this.steps[3]);
        break;

      case 'next':
        this.openDialog(WhatNextComponent, this.steps[4]);
        break;

      default:
        break;
    }
 }

 setImage(step: string){
  this.imgUrl = '../assets/img-dashboard-' + step  + '.png';
 }

 updateMap(){
  const heightRatio = this.mappedImg.nativeElement.offsetHeight/this.mappedImg.nativeElement.naturalHeight;
  const widthRatio = this.mappedImg.nativeElement.offsetWidth/this.mappedImg.nativeElement.naturalWidth;

  this.imgParts.map(part => {

    let coords = part.fullCoords.split(',').map(x => parseInt(x));
    let result = '';

    for (let i = 0; i < coords.length; i++){
      if( i === 0 ) { result += Math.trunc(coords[i] * heightRatio); }
      else if ( i % 2 === 0 ){ result += ', ' + Math.trunc(coords[i] * heightRatio); }
      else { result += ', ' + Math.trunc(coords[i] * widthRatio); }
    }
    console.log(coords, result);
    part.coords = result;
  });

 }

}
