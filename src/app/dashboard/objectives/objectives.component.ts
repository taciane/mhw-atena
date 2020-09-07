import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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

  public results =  {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''
  };

  public forms: FormGroup;

  constructor(
    private mainService: MainService,
    private dialogRef: MatDialogRef<ObjectivesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = 1;
    this.currentStep = data;
   }

  ngOnInit(): void {
    this.forms = new FormGroup({
      answer1: new FormControl(this.results.answer1, [Validators.required]),
      answer2: new FormControl(this.results.answer2, [Validators.required]),
      answer3: new FormControl(this.results.answer3, [Validators.required]),
      answer4: new FormControl(this.results.answer4, [Validators.required])
    });

    this.listObjectives = this.mainService.getListObjectives();
    this.objective = this.listObjectives[0];
  }

  selectObjective(item){

  }

}