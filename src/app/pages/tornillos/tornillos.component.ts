import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Itornillo } from 'src/app/interfaces/Itornillo';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss'],
})
export class TornillosComponent implements OnInit {
  displayedColumns = ['nombre', 'precio', 'formato', 'marca', 'acciones'];
  tornillos!: Itornillo[];

  constructor(private service: ServiceService) {}

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
}
