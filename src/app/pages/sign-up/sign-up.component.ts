import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public formGroup!: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  signup() {
    this.service
      .signUp(this.formGroup.value.name, this.formGroup.value.password)
      .subscribe((res) => {
        if (res.error) {
          this.snackBar.open(
            'Comprueba el correo y que la contraseña tenga minimo 6 caracteres',
            'Aceptar',
            {
              duration: 3000,
            }
          );
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: '',
      password: '',
    });
  }
}
