import { Component, OnInit } from '@angular/core';
import { UserCreate } from 'src/app/models/userCreate.model';
import { UserView } from 'src/app/models/userView.model';
import { UserService } from 'src/app/shared/Rest/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.refleshList();
  }

  populateForm(selectedRecord: UserView) {
    let user = new UserCreate();
    user.id = selectedRecord.id;
    user.changePassword = false;
    user.name = selectedRecord.name;
    user.userName = selectedRecord.userName;
    user.status = selectedRecord.status;
    this.userService.formData = user;
    this.userService.edituser = true;
  }
}
