import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  op1!: any;
  op2!: any;
  rslt!:any;

  constructor(private router:Router) {}

  addition(): void{
    this.rslt= this.op1 + this.op2;
  }
  soustraction(): void{
    this.rslt= this.op1 - this.op2;
  }
  multiplication(): void{
    this.rslt= this.op1 * this.op2;
  }
  division(): void{
    this.rslt= this.op1 / this.op2;
  }
  clear():void{
    this.op1="";
    this.op2="";
    this.rslt = "";
    
  }
  goToMw(): void{
    this.router.navigate(['meteo-widget'])
  }

}
