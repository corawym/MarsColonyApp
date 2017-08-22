import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  constructor(
    private jobService: JobService, 
    private colonistService: ColonistService
  ) { }


  async ngOnInit() {

    const jobs = await this.jobService.getJobs();
    console.log(jobs);

    const data = {
      name: 'hello',
      age: '2',
      job_id: '1'
    };

    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);

    
  }

}
