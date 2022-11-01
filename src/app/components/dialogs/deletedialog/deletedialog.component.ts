import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  constructor(
    public dialogref:MatDialogRef<DeletedialogComponent>
  ) { }

  ngOnInit(): void {
  }
  onClickNo(){
    this.dialogref.close();
  }

}
