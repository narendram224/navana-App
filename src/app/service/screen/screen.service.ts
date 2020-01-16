import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private api:ApiService) { }

  getAllScreen(){
     return  this.api.get('audio/screen');
  }
  postNewScreen(body:any){
    return this.api.post('audio/screen',body);
  }
}
