import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService} from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    JobService
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private jobService: JobService) { }

// , colonistService: ColonistService

  async ngOnInit() {

    const jobs = await this.jobService.getJobs();
    console.log(jobs);
    
  }

}
