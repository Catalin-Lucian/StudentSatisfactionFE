import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  today:Date=new Date();
  errors:string='';
  success:string='';

  username:string='';
  name:string='';
  email:string='';
  password:string='';
  repeatpaassword:string='';
  birthDate:Date=new Date();
  facultyName:string='';

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  handleBirthDateChange(date:any){
    this.birthDate=date;
  }

  onRegister(){
    if (this.password!==this.repeatpaassword){

      this.errors="pasword must be the same";
    }
    if(
      this.username=='' ||
      this.name==''||
      this.email==''||
      this.password==''||
      this.facultyName==''
    ){
      this.errors="Must complete all imputs"
    }
    else{
      this.userService.register({
        username:this.username,
        email:this.email,
        password:this.password,
        name:this.name,
        birthDate:this.birthDate,
        facultyName:this.facultyName,
      }).subscribe(()=>{
        this.success="Register successfull";
      })

    }
  }

}
