import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HttpClientService, Employee } from '../service/httpclient.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees:Employee[];
  public editEmployee: Employee;
  

  constructor(
    private httpClientService:HttpClientService,private sanitizer: DomSanitizer
  ) { }
  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}
  ngOnInit() {
     this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.employees=response;
}


deleteEmployee(employee: Employee): void {
   console.log(this.httpClientService.flag+"hi")
   if(this.httpClientService.flag==false) return ;
   this.httpClientService.deleteEmployee(employee)
     .subscribe( data => {
      this.employees = this.employees.filter(u => u !== employee);
   })
};





}