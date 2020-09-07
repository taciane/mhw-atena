import { Component, OnInit, HostListener } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  // , 8, 9, 10, 11, 12, 13, 14
  images = [1, 2, 3, 4, 5, 6, 7].map((n) => `assets/avatars-grow-girl/${n}.svg`);
  jobs: any;
  jobsTest: any;
  checked: boolean;
  formacoes: any;

  public selectedImage: string;
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  constructor(
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jobs = this.mainService.getTypeOfJob();
    this.jobsTest = this.mainService.getJobsTest();
  }
  redirectDash(){
    this.router.navigate(['dashboard']);
  }

  selectImage(image: string){
    this.selectedImage = image;
  }
}
