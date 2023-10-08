import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { Student } from '../student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student!: Student;
  isStudentUpdated = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private httpService: HttpService, 
    private location : Location,
    private router: Router) {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];
      console.log(id);
      this.getData(id);
    })
  }

  getData(id: number) {
    this.httpService.getStudent(id).subscribe(data => {
      this.student = data;
    });
  }

  save(){
    this.httpService.updateStudent(this.student)
      .subscribe(data=>{
        this.isStudentUpdated = true;
        setTimeout(()=>{
          this.isStudentUpdated = false;
        }, 6000);
      
      })
  
  }

  getBack(){
    //this.location.back();
    this.router.navigate(["/students"]);
  }

}
