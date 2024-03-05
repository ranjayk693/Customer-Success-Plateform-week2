import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // Injecting the HttpClient
  constructor(private http: HttpClient) {}

  /*CRUD operation with ApprovedData*/
  getApprovedTeamData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/approve-team');
  }

  postApproveTeamData(data: any): Observable<any> {
    return this.http.post('https://localhost:44347/api/app/approve-team', data);
  }

  putApproveTeamData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/approve-team/${id}`,
      data
    );
  }

  deleteApproveTeamData(id: string): Observable<any> {
    return this.http.delete(
      `https://localhost:44347/api/app/approve-team/${id}`
    );
  }

  /*CRUD operation with  ClientFeedback*/
  getClientFeedbackData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/client-feedback');
  }
  postClientFeedbackData(data: any): Observable<any> {
    return this.http.post(
      'https://localhost:44347/api/app/client-feedback',
      data
    );
  }
  putClientFeedbackData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/client-feedback/${id}`,
      data
    );
  }

  deleteClientFeedbackData(id: string): Observable<any> {
    return this.http.delete(
      `https://localhost:44347/api/app/client-feedback/${id}`
    );
  }

  /*CRUD operation with  MeetingMinute*/
  getMeetingMinuteData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/meeting-minute');
  }
  postMeetingMinuteData(data: any): Observable<any> {
    return this.http.post(
      'https://localhost:44347/api/app/meeting-minute',
      data
    );
  }
  putMeetingMinuteData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/meeting-minute/${id}`,
      data
    );
  }

  deleteMeetingMinuteData(id: string): Observable<any> {
    return this.http.delete(
      `https://localhost:44347/api/app/meeting-minute/${id}`
    );
  }

  /*CRUD operation with ProjectUpdate*/
  getProjectUpdateData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/project-update');
  }
  postProjectUpdateData(data: any): Observable<any> {
    return this.http.post(
      'https://localhost:44347/api/app/project-update',
      data
    );
  }
  putProjectUpdateData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/project-update/${id}`,
      data
    );
  }

  deleteProjectUpdateData(id: string): Observable<any> {
    return this.http.delete(
      `https://localhost:44347/api/app/project-update/${id}`
    );
  }

  /*CRUD operation with Resources */
  getResourcesData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/resources');
  }
  postResourcesData(data: any): Observable<any> {
    return this.http.post('https://localhost:44347/api/app/resources', data);
  }
  putResourcesData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/resources/${id}`,
      data
    );
  }

  deleteResourcesData(id: string): Observable<any> {
    return this.http.delete(`https://localhost:44347/api/app/resources/${id}`);
  }

  /*CRUD operation to ADD the Project */
  // This api call is used to add the data into it
  getProjectData(): Observable<any> {
    return this.http.get('https://localhost:44347/api/app/project');
  }
  postProjectData(data: any): Observable<any> {
    return this.http.post('https://localhost:44347/api/app/project', data);
  }
  putProjectData(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://localhost:44347/api/app/project /${id}`,
      data
    );
  }
  deleteProjectData(id: string): Observable<any> {
    return this.http.delete(`https://localhost:44347/api/app/project/${id}`);
  }
}
