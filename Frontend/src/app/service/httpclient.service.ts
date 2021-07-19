import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public id:any,
    public name:string,
    public email:string=null,
    public designation:string,
    public salary:string,
    public imageUrl:string=null,
    public employeeCode:string=" "
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public flag:any =true;
  
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employee/all');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employee/delete" + "/"+ employee.id);
  }
  public createEmployee(employee) {
    employee.salary="20000";
    employee.id=1;
    employee.imageUrl="abc";
    console.log(employee)
    return this.httpClient.post<Employee>("http://localhost:8080/employee/add", employee);
  }

  public updateEmployee(employee) {
    console.log(employee)
    return this.httpClient.put<Employee>("http://localhost:8080/employee/update", employee);
  }

getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}