import { Itornillo } from './../interfaces/Itornillo';

import { Injectable } from '@angular/core';
import {  AuthResponse, createClient, Session, UserResponse } from "@supabase/supabase-js";
import { Observable,from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  supabaseUrl = 'https://pjxmvcpiplgsjhzmzimq.supabase.co'
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqeG12Y3BpcGxnc2poem16aW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyNDcxNTIsImV4cCI6MTk4MjgyMzE1Mn0.zdVSE-ymlyMbeT-WVSC2nmIFVPqcp3kpcqN5920DiSE'
  supabase = createClient(this.supabaseUrl, this.supabaseKey)
  constructor() { }
  
  signUp(email:string, password:string) {
    return from(this.supabase.auth.signUp({
      email: email,
      password: password
    }))
  }
  signIn(email:string, password:string) {
    return from(this.supabase.auth.signInWithPassword({
      email: email,
      password: password
    }))
  }

  signOut(){
    return from(this.supabase.auth.signOut())
  }

  getSession() {
    return from(this.supabase.auth.getSession())
  }
  getTornilos(){
    return from(this.supabase
      .from('tornillos')
      .select('*',{ count: 'exact' }))
  }
  getTornilosByPag(ofindex:number,toindex:number){
    return from(this.supabase
      .from('tornillos')
      .select('*',{ count: 'exact' })
      .range(ofindex,toindex))
  }
  deletetornillo(column:string,id:number){
    return from(this.supabase
    .from('tornillos')
    .delete()
    .eq(column, id))
  }
  createtornillo(tornillo:Itornillo){
    console.log(tornillo);
    
    return from(this.supabase
      .from('tornillos')
      .insert([
        { nombre: tornillo.nombre , precio: tornillo.precio, formato: tornillo.formato , marca: tornillo.marca  },
      ]))
  }

}
