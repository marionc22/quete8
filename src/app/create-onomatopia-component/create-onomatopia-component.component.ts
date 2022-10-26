import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.css']
})
export class CreateOnomatopiaComponentComponent implements OnInit {

  newOnomatopia : string = "";

  @Output()
  sendOnomaopiatoParent: EventEmitter<string> = new EventEmitter(); 
  createOnomatopia() :void{
    this.sendOnomaopiatoParent.emit(this.newOnomatopia)
  }

  constructor() { }

  ngOnInit(): void { 
  }

}
