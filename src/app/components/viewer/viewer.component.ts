import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  speak:boolean=true ;
  id:string;
  public show:any = {player1:true,player2:true,player3:true,player4:true};
  Product:any={
    recordId:'',
    englishNormal:'',
    englishSpeakable:0,
    hindiNormal:'',
    hindiSpeakable:'',
    kannadaNormal:'',
    kannadaSpeakable:'',
    oriyaNormal:'',
    product_picture:''

  }
  constructor(private activatedRoutes:ActivatedRoute,private records:AudioService) { }
myform:FormGroup;
allRecords :Array<any>= [];
  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe((ids)=>{
      this.id = ids.get('id');
      console.log(this.id);
      this.records.getAllRecords(this.id).subscribe((record)=>{
        this.allRecords = record.obj;
        console.log(record.obj);
        
      })
      
    })
    
    let first = document.getElementById("play");
    console.log(first);
  }
  optionalExtraProcessing(data:any){
    console.log(data.value);
    // let inputdata  = document.getElementById('b1');
  }

  doSpeak(event){
    this.speak=!this.speak;  
  }
  
 togglePlay(data:any,play) {
   switch (data) {
     case 'player1':
       this.show.player1 = !this.show.player1;
       console.log(play);
       
       this.show.player1?play.pause():play.play(); 
       break;
   
       case 'player2':
       this.show.player2 = !this.show.player2;
       this.show.player2?play.pause():play.play();
       break;
       case 'player3':
        this.show.player3 = !this.show.player3;
        this.show.player3?play.pause():play.play();
       break;
       case 'player4':
         console.log("palyer ");
         
        this.show.player4 = !this.show.player4;
        this.show.player4?play.pause():play.play();
       break;
   
     default:
      this.show.player4?play.pause():play.play();
       break;
   }
 };
 fileChange(event:any){
  this.Product.product_picture =event.target.files[0];
}
  onSubmit(){
  console.log(this.Product.product_picture);
  try {
    const form = new FormData();
    for (const key in this.Product) {
      if (this.Product.hasOwnProperty(key)) {
          if (key=='product_picture') {
            form.append(
              'product_picture',
              this.Product.product_picture,
              this.Product.product_picture.name
            );
              console.log("if",form);
              
          }else{
            form.append(key,this.Product[key]);
            console.log("else",form);
            
          }
      }
    }
    console.log("the form data us",form);
    
    // api call here
 this.records.PostNewRecord(this.id,form).subscribe((resonse)=>{
   this.allRecords.push(resonse.product);
   
 });
    

  } catch (error) {
      console.log("err",error);
      
  }
 
 }
}
