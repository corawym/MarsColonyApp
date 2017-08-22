import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService} from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(jobService: JobService, colonistService: ColonistService) { }


  ngOnInit() {
  }

}
