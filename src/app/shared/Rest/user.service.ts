import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserCreate } from 'src/app/models/userCreate.model';
import { UserView } from 'src/app/models/userView.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  edituser: boolean = false;
  formData: UserCreate = new UserCreate();

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl += 'api/user/'
    this.formData = new UserCreate();
  }

  list: UserView[] = new Array();

  async getAll() {
    this.list = await this.http.get<UserView[]>(this.apiUrl).toPromise();
  }

  async getUserById(userId: number) {
    let result = await this.http.get<UserView>(this.apiUrl + "/" + userId.toString()).toPromise();
    this.formData.id = result.id;
    this.formData.name = result.name;
    this.formData.status = result.status;
    this.formData.userName = result.userName;
  }

  async createUser() {
    return await this.http.post<UserCreate>(this.apiUrl, this.formData).toPromise();
  }

  async UpdateUser() {
    return await this.http.put<boolean>(this.apiUrl + this.formData.id.toString(), this.formData).toPromise();
  }

  refleshList() {
    this.http.get<UserView[]>(this.apiUrl)
      .toPromise()
      .then(res => {
        this.list = res;
      })
  }
}
