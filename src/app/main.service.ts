import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getListObjectives(){
    return [
      { id: 1, name: 'Quero revolucionar o setor de tecnologia da empresa', },
      { id: 2, name: 'Busco me tornar um profissional excelente', },
      { id: 3, name: 'Pretendo desenvolver meus conhecimentos', },
      { id: 4, name: 'Aspiro uma vaga em uma renomada organização', }
    ];
  }
}
