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
    private httpClientService:HttpClientService
  ) { }
  
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


public searchEmployees(key: string): void {
  console.log(key);
  const results: Employee[] = [];
  //Can search by name,email,salary or designation 
  for (const employee of this.employees) 
  {
    if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.salary.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.designation.toLowerCase().indexOf(key.toLowerCase()) !== -1) 
    {
      //push the search results
      results.push(employee);
    }
  }
  this.employees = results;
  if (results.length === 0 || !key) {
    this.httpClientService.getEmployees();
  }
}
deleteEmployee(employee: Employee): void 
{
   //flag is true if the user is an admin
   if(this.httpClientService.flag==false) return ;
  
   this.httpClientService.deleteEmployee(employee)
     .subscribe( data => {
      this.employees = this.employees.filter(u => u !== employee);
   })
};





}
