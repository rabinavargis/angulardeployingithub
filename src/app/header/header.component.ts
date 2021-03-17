import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:String="";
  top:String="abc";

  onClick(){
    // console.log("Welcome yo all")
    alert("Welcome yo all")
  }
}
