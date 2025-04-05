import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // functionality to add and remove loader
  addLoader() {
    (document.getElementById('apploader') as HTMLDialogElement).style.display = 'block'
  }
  removeLoader() {
    (document.getElementById('apploader') as HTMLDialogElement).style.display = 'none'

  }

  

}
