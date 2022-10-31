import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public formGroup !: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private snackBar: MatSnackBar,
    private router: Router

    ) {
   }

  ngOnInit(): void {
    this.buildForm();
  }
  signin() {
    this.service
      .signIn(this.formGroup.value.name, this.formGroup.value.password)
      .subscribe( (res) => {
        if(res.error){
          this.snackBar.open('Ha sucedido un error', 'Aceptar', {
            duration: 3000
          });
        }else{
          this.router.navigateByUrl("/")
        }
      });
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: "",
      password:"",
    });
  }

}
