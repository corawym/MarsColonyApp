import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[];

  registerForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    job_id: new FormControl('')
  });


  constructor(
    private jobService: JobService, 
    private colonistService: ColonistService
  ) { }


  async ngOnInit() {

    this.jobs = await this.jobService.getJobs();

    // const jobs = await this.jobService.getJobs();
    // console.log(jobs);

    // const data = {
    //   name: 'hello',
    //   age: '2',
    //   job_id: '1'
    // };

    // const newColonist = await this.colonistService.registerColonist(data);
    // console.log(newColonist);

    // setInterval(() => {
    //   this.data.push({ text: `Encounter ${Math.random()}` });
    // }, 1000);

    // removeListItem(item) {
    // this.data = this.data.filter(li => li !== item);
    // }

    // addListItem(item) {
    //   this.data.push({ text: item });
    // }

  }
}
