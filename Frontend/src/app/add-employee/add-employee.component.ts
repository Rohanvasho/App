import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit 
{
  
  //User Initialized
  user: Employee = new Employee(0,null,"","",null," ");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  //Using httpClientService to create an employee
  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}
