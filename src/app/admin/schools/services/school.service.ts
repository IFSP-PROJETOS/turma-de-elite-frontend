import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {take} from "rxjs/operators";
import School from "../../../shared/model/school";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  createSchool(school: School){
    return this.http.post<any>(`${environment.apiUrl}/api/schools`,school);
  }

  getSchools(pageSize: number, pageIndex: number){
    return this.http.get<any>(`${environment.apiUrl}/api/schools?size=${pageSize}&pageNumber=${pageIndex}`).pipe(take(1));
  }

  getSchoolById(schoolId: number){
    return this.http.get<any>(`${environment.apiUrl}/api/schools/${schoolId}`).pipe(take(1));
  }
}
