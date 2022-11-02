import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss'],
})
export class CreatedialogComponent implements OnInit {
  public formGroup!: FormGroup;
  formatos: string[] = [
    'maiores oficina',
    'quia delenti',
    'Onion',
    'harum at',
    'modi veniam',
    'Eos tenetur',
  ];
  constructor(
    private formBuilder: FormBuilder,
    public dialogref: MatDialogRef<CreatedialogComponent>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: '',
      precio: 0,
      formato: '',
      marca: '',
    });
  }
  onClickNo() {
    this.dialogref.close();
  }
}
