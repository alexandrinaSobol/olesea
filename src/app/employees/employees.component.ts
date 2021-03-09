import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employes } from '../employes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  
  employee: Employes[] = [];

  //methoda()
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.http.get('assets/employees.json').subscribe(x => this.employee = x["employees"]);
    //this.methoda.subscribe(data => this.employee = data);
  }


}
