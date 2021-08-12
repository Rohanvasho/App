import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HttpClientService, Employee } from '../service/httpclient.service';



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
  
  ngOnInit() {
     this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.employees=response;
}

//Search by name,email,empoyeeCode or designation
public searchEmployees(key: string): void {
  console.log(key);
  const results: Employee[] = [];
  for (const employee of this.employees) {
    if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.employeeCode.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.designation.toLowerCase().indexOf(key.toLowerCase()) !== -1) 
    {
      //Push the results 
      results.push(employee);
    }
  }

  this.employees = results;
  
}


deleteEmployee(employee: Employee): void 
{
   //Flag is true if user is not an admin
   if(this.httpClientService.flag==false) return ;
   this.httpClientService.deleteEmployee(employee)
     .subscribe( data => {
      this.employees = this.employees.filter(u => u !== employee);
   })
};





}
