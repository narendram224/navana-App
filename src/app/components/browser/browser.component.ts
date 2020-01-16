import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/service/screen/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  screens: any;
newArr:Array<any>=[];
newScreen:string='';
  constructor(private screenService:ScreenService,private router:Router) { }

  ngOnInit() {
    this.getAllScreen();
  }

  getAllScreen(){
    this.screenService.getAllScreen().subscribe((scns)=>{
       this.screens = scns.products;
       console.log(scns);
       
      // scns.products.forEach(element => {
      //           scns.count.forEach(element2 => {
      //               if (element['_id']===element2['_id']) {
      //                   element.count = element2.count;
      //                   this.newArr.push(element);
      //                   console.log(this.newArr);
                        
      //               }
      //           });
            
      // });
      for (let i = 0; i < scns.products.length; i++) {
        // const element = scns.products[i];
        for (let index = 0; index < scns.count.length; index++) {
          if(scns.products[i]['_id']===scns.count[index]['_id']){
            scns.products[i].count = scns.count[index].count;
            this.newArr.push( scns.products[i]);
          }
        }
        this.newArr.push( scns.products[i]);
      }
      this.newArr = this.newArr.reduce((acc, current) => {
        const x = acc.find(item => item._id === current._id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      console.log(this.newArr);
      // console.log(merged);
      
      
    },err=>{alert(err)});
  }
  
  gotoView(id:string){
    this.router.navigate(['view',id]);
   console.log(id);
   
  }
  addNewScreen(){
    console.log(this.newScreen);
    this.screenService.postNewScreen({"name":this.newScreen}).subscribe((scn)=>{
      //  this.newArr.push(scn.products)
      console.log(this.newArr);
      alert("successfully added record");
    })
    
  }
}
