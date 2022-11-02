import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Session } from '@supabase/supabase-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  totaltornillos!: number;
  session!: Session | null;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getTornillos();
    this.getSession();
  }

  private getSession() {
    this.service.getSession().subscribe((res) => {
      if (!res.error) {
        this.session = res.data.session;
      }
    });
  }

  private getTornillos() {
    this.service.getTornilos().subscribe((res) => {
      this.totaltornillos = res.count as number;
      console.log(res);
    });
  }

  revisar() {
    if (this.session) {
      this.router.navigateByUrl('/tornillos');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }
}
