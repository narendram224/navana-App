import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private api:ApiService) { }

  getAllRecords(screenId:string){
    return this.api.get(`audio/record/${screenId}`);

  }
  PostNewRecord(screenId,body:any){
    return this.api.post(`audio/my/${screenId}`,body);
  }
}
