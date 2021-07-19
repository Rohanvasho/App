package net.guides.springboot2.crud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	private long id;
	private String name;
	private String designation;
	private String email;
	private String salary;
    private String imageUrl;
    private String employeeCode;
	public Employee() {
		
	}
	
	public Employee(String name, String designation, String email,String salary,String employeeCode,String imageUrl) {
		this.name = name;
		this.designation = designation;
		this.email = email;
        this.salary = salary;
        this.imageUrl = imageUrl;
        this.employeeCode = employeeCode;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	
	@Column(name = "designation", nullable = false)
	public String getdesignation() {
		return designation;
	}
	public void setdesignation(String designation) {
		this.designation = designation;
	}
	
	@Column(name = "email", nullable = false)
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
    @Column(name = "salary", nullable = false)
	public String getsalary() {
		return salary;
	}
	public void setsalary(String salary) {
		this.salary = salary;
	}
    @Column(name = "imageUrl", nullable = false)
	public String getimageUrl() {
		return imageUrl;
	}
	public void setimageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
    @Column(name = "employeeCode", nullable = false)
	public String getemployeeCode() {
		return employeeCode;
	}
	public void setemployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ",salary=" + salary + ",imageUrl=" + imageUrl + ",employeeCode=" + employeeCode + ", designation=" + designation + ", email=" + email
				+ "]";
	}
	
}
