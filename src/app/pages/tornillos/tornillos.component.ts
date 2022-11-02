import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreatedialogComponent } from './../../components/dialogs/createdialog/createdialog.component';
import { DeletedialogComponent } from './../../components/dialogs/deletedialog/deletedialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  dataSource!: MatTableDataSource<Itornillo>;
  tornillos!: Itornillo[];
  loading:boolean=false;
  indexof:number =0;
  indexto:number=9;
 



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
    this.service.getTornilosByPag(this.indexof,this.indexto).subscribe((res) => {
      this.tornillos = res.data as Itornillo[]
      this.dataSource = new MatTableDataSource(this.tornillos);
      this.loading=true;
    });
  }

  OnPageChange(event:PageEvent){
    this.indexof= event.pageIndex*event.pageSize;
    this.indexto=event.pageIndex*event.pageSize+event.pageSize;
    this.getTornillos();
    
    
  }

  openCreateDialog(){
    const dialogref = this.dialog.open(CreatedialogComponent,{
      width: '900px',
    });
    dialogref.afterClosed().subscribe( (res) => {
      if (res) {
       this.service.createtornillo(res).subscribe ( () => {
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
