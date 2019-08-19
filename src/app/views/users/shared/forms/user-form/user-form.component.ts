import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../../models/user.model';
import Experience from '../../../models/experience.model';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() model: User = new User();
  @Input() type: string;
  @Output() handleSubmit:EventEmitter<User> = new EventEmitter<User>();
  buttonTitle: string = '';

  constructor(private location: Location) { }

  ngOnInit() {
    this.buttonTitle = this.type === 'edit' ? 'Actualizar' : 'Crear';
  }

  onCancel(){
    this.location.back();
  }

  onSubmit(form:NgForm){
    const { valid, value } = form;

    if(valid){
      const newModel = Object.assign({},this.model,value)
      this.handleSubmit.emit(newModel);
    }
  }

  onClick(form:NgForm, action:string, id?:number){

    const { valid, value } = form;

    if(valid){

      if(action === 'add'){

        if(!this.model.experiences){
          this.model.experiences = new Array<Experience>();
        }

        this.model.experiences.push(value);

      }
      else if(action === 'drop'){

        if(this.model.experiences && this.model.experiences.length ){
          this.model.experiences = this.model.experiences.filter( (ex,i) => i !== id );
        }

      }

    }

  }

}
