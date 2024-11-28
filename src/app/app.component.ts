import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Hello ragu!!!', 'Wellcome');
}
click:boolean=false;
}