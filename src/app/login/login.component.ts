import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.router);
    this.router.navigate(['my-profile']);
  }

}
