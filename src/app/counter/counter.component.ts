import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count:number=0
  red:boolean=false
  green:boolean=false
  black:boolean=true
  name:string=""
  increment(){
    this.count+=1
    this.red=this.count<0?true:false
    this.green=this.count>0?true:false
    this.black=this.count==0?true:false    
  }
  decrement(){
    this.count-=1
    this.red=this.count<0?true:false
    this.green=this.count>0?true:false
    this.black=this.count==0?true:false
  }
  reset(){
    this.count=0
    this.red=this.count<0?true:false
    this.green=this.count>0?true:false
    this.black=this.count==0?true:false
  }
  changeName(e:any){
    this.name=e.target.value
  }
 addTodo(){

  console.log(this.name)
 }
}
