import { Session } from '@supabase/supabase-js';
import { Component, OnInit } from '@angular/core';
import { User} from '@supabase/supabase-js';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  session!:Session | null;

  constructor(
    private Service:ServiceService,
  ) { }

  ngOnInit(): void {
    this.getSession();
  }
  private getSession(){
    this.Service.getSession().subscribe( (res) => {
      if (!res.error) {
        this.session = res.data.session   
      }
    } )
  }
  signOut(){
    this.Service.signOut().subscribe( (res) => {
      if (!res.error) {
        this.getSession();
      }
    } )
  }
  

}
