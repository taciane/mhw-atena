import { Component, OnInit, HostListener } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  // , 8, 9, 10, 11, 12, 13, 14
  images = [1, 2, 3, 4, 5, 6, 7].map((n) => `assets/avatars-grow-girl/${n}.svg`);
  jobs: any;
  jobs2: any;
  checked: boolean;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.jobs = this.mainService.getTypeOfJob();
    this.jobs2 = [
      {id: 1, cargo: 'Estágio', dataInicio: '06/05/2019', dataTermino: '03/05/2020', descricao: 'Atuação no setor de Suporte/DevOps.'},
      {id: 2, cargo: 'Menor Aprendiz', dataInicio: '03/02/2018', dataTermino: '03/02/2019', descricao: 'Atuação no setor de Suporte.'},
    ]
  }
}
