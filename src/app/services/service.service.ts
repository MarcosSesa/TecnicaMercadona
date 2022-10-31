import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, createClient } from "@supabase/supabase-js";
import { Observable, filter, map, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  supabaseUrl = 'https://pjxmvcpiplgsjhzmzimq.supabase.co'
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqeG12Y3BpcGxnc2poem16aW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyNDcxNTIsImV4cCI6MTk4MjgyMzE1Mn0.zdVSE-ymlyMbeT-WVSC2nmIFVPqcp3kpcqN5920DiSE'
  supabase = createClient(this.supabaseUrl, this.supabaseKey)
  constructor() { }
  
  signUp(email:string, password:string): Observable<AuthResponse>{
    return from(this.supabase.auth.signUp({
      email: email,
      password: password
    }))
  }
  signIn(email:string, password:string): Observable<AuthResponse>{
    return from(this.supabase.auth.signInWithPassword({
      email: email,
      password: password
    }))
  }

}
