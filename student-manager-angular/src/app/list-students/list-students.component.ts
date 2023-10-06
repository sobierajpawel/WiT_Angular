import { Component } from '@angular/core';
import { HttpService } from '../http-service.service';
import { Student } from '../student';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
    // 1. Dodamy interfejs Studenta - DONE!
    // 2. Utworzymy sobie serwis do komunikacji z cześcia backendowa - wyślę requst GET - DONE!
    // 3. Sprawdze czy pobrałem dane
    isTableVisible : boolean = false;
    buttonText = "Pokaż";
    students : Student[] = [];

    constructor(private httpService: HttpService){

    }

    showTable(){
      this.isTableVisible = !this.isTableVisible;
      console.log(this.isTableVisible);

      if (this.isTableVisible) {
        this.buttonText = "Schowaj";
      } else {
        this.buttonText = "Pokaż";
      }
    }

    getData(){
      this.httpService.getStudents().subscribe(data =>{
        console.log(data);
        this.students = data;
      });
    }
}
