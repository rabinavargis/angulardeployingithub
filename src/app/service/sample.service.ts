import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
getDetails='https://nut-case.s3.amazonaws.com/coursessc.json'
data:any  
constructor(private http:HttpClient) { }

  getAllDetails(){
    this.http.get(this.getDetails).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
