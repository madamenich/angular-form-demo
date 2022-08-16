import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
// title = new FormControl('');

// formArticle = new FormGroup({
//   title : new FormControl(),
//   author: new FormControl(),
//   description: new FormControl()
// })


  formArticle = this.formBuilder.group({
    title: ['',Validators.required,],
    author:[''],
    description:[''],

  })
  constructor(private formBuilder: FormBuilder) { }

  onSubmit(){
  // this.formArticle.setValue({
  //   title:'Updated title',
  //   author:'abc',
  //   description: 'description'
  // });
  //   this.formArticle.patchValue({
  //     title:'Updated title',
  //     // author:'abc',
  //     // description: 'description'
  //   });
    // console.log(this.formArticle);
  }
  updateTitle(){
    // this.title.setValue('SingChheng');
  }

  ngOnInit(): void {

  }

}
