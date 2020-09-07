import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private profileImage = 'assets/avatars-grow-girl/1.svg';
  private profileImageDataSource = new BehaviorSubject(this.profileImage);
  public currentProfileImage = this.profileImageDataSource.asObservable();

  constructor() { }

  changeProfileImage(image){
    this.profileImageDataSource.next(image);
  }
}
