import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  email!: string;
  password!: string;
  user={email:'',password:''};
loginForm !:FormGroup;
username!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form:any): void {
    console.log(form.value['email'])
    console.log(form);



  }

}
