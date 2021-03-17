import { Component, OnInit } from '@angular/core';
import {SampleService} from '../service/sample.service'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private SampleService: SampleService) { }

  ngOnInit(): void {
   
  }

}
