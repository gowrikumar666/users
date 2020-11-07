import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import { UserModel } from '../user-model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: UserModel[];
  public userdetails:UserModel[];
   errorMessage: string;

  constructor(private service:UserService ) {}

  getdataservice(){
      this.service.getuser().subscribe(data => this.users = data);       
  }

  ngOnInit() {
    this.getdataservice();  
  }

  getuserdetails(name: string){
    this.service.getdetails().subscribe(data => {
      this.userdetails =data;
      
    let obj = this.users.filter(m =>m.first_name == name)
    this.userdetails = obj;
    return this.userdetails;
  })

  }

}
