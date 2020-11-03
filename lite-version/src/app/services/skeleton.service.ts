import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {
  private deployment:string = 'https://www.deployment-url.com';
  private local:string = 'http://127.0.0.1:8000/storage';
  private baseUrl:string = this.local;
  constructor() { }
  getTeacherPictures(image){
    return this.baseUrl + '/' + image;
  }
  getStudentPictures(image){
    return this.baseUrl + '/' + image;
  }
}
