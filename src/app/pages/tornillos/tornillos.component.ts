import { CreatedialogComponent } from './../../components/dialogs/createdialog/createdialog.component';
import { DeletedialogComponent } from './../../components/dialogs/deletedialog/deletedialog.component';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Itornillo } from 'src/app/interfaces/Itornillo';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss'],
})
export class TornillosComponent implements OnInit {
  displayedColumns = ['nombre', 'precio', 'formato', 'marca', 'acciones'];
  tornillos!: Itornillo[];


  constructor(
    private service: ServiceService,
    private dialog:MatDialog,
    ) {}

  ngOnInit(): void {
    this.getTornillos();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }
  private getTornillos() {
    this.service.getTornilos().subscribe((res) => {
      this.tornillos = res.data as Itornillo[];
    });
  }
  openCreateDialog(){
    const dialogref = this.dialog.open(CreatedialogComponent,{
      width: '900px',
    });
    dialogref.afterClosed().subscribe( (res) => {
      if (res) {
       this.service.createtornillo(res).subscribe( () => {
        this.getTornillos();
       })
      }
      
    })
  }

  openDeleteDialog(id:number){
    const dialogref = this.dialog.open(DeletedialogComponent,{
      width: '600px',
    });
    dialogref.afterClosed().subscribe( (res) => {
      if (res) {
        this.service.deletetornillo("id",id).subscribe( () => {
          this.getTornillos();
        });
      }
      
    })
  }
}
