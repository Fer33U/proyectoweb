import { feedBackService } from './../../services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface FeedbackData {
  name: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-private-feedback',
  templateUrl: './private-feedback.component.html',
  styleUrls: ['./private-feedback.component.css']
})
export class PrivateFeedbackComponent implements OnInit {

  datos: FeedbackData[] = []; // Especifica el tipo de los elementos en el array
  constructor(private feedBackService: feedBackService, private router: Router) { }

  ngOnInit() {
    this.feedBackService.getPrivateDatos()
      .subscribe(
        res => this.datos = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        }
      )
  }

}
