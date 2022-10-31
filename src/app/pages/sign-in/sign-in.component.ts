import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public formGroup !: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: "",
      password:"",
    });
  }

}
