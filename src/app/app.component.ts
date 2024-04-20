import { contact } from './app.mode';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TrashHauling';
  contact: any = { name: '', email: '', phone:'' };

  constructor(private HttpClient: HttpClient ){

  }
  Success(message: string) {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			text: message,
			showConfirmButton: false,
			timer: 1500,

		})
	}
  Error( title: string = '') {

		Swal.fire({
			position: 'top-end',
			icon: 'error',
			text: title,
			showConfirmButton: false,
			timer: 5000
		})
	}

  Send(){
      const model:contact={
        name:this.contact.name,
        email:this.contact.email,
        phone:this.contact.phone
      }
      if(!model.email||!this.contact.name||!this.contact.phone){
        this.Error("Some data is missing or incorrect")
      }
      let endPointUrl='http://upskilling-egypt.com:3001/contact'
      this.HttpClient.post(endPointUrl,model).subscribe(res=>{
            this.Success("Email Send Successfuly")

      },(error)=>{
        this.Error("Some data is missing or incorrect")
      }
    )
  }
}


