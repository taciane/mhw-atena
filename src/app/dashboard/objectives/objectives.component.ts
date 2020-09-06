import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss', '../dialog.scss']
})
export class ObjectivesComponent implements OnInit {

  listObjectives = [];
  objective: number;
  public id: number;
  public currentStep: {id: number, nome: string};

  constructor(
    private mainService: MainService,
    private dialogRef: MatDialogRef<ObjectivesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = 1;
    this.currentStep = data;
   }

  ngOnInit(): void {
    this.listObjectives = this.mainService.getListObjectives();
    this.objective = this.listObjectives[0];
  }

  selectObjective(item){

  }

}