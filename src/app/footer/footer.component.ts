import { Component, OnInit } from '@angular/core';
import{Prograd} from '../prograd'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  topics =['Angular','java','fsd']
  newprograd = new Prograd('abc','abc@gmail.com','angular');
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.newprograd);
}
}
