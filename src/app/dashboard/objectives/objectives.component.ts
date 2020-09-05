import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  listObjectives = [];
  objective: number;

  constructor(
    private mainService: MainService,
    private dialogRef: MatDialogRef<ObjectivesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.listObjectives = this.mainService.getListObjectives();
    this.objective = this.listObjectives[0];
  }

  selectObjective(item){

  }

}
