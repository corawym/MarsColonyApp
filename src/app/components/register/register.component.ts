import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { NewColonist } from '../../models/colonist';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

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
    name: new FormControl('', [
      Validators.required, 
      Validators.maxLength(100), 
      Validators.minLength(2),
      this.noNumbers(/[0-9]/)
      ]),
    age: new FormControl('', [
      Validators.required,
      Validators.max(150000),
      Validators.min(0)
      ]),
    job_id: new FormControl('', [Validators.required])
  });


  constructor(
    private jobService: JobService, 
    private colonistService: ColonistService
  ) { }


  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  }

  async registerColonist(){
    const newColonist: NewColonist = {
      name: this.registerForm.get( 'name' ).value,
      age: this.registerForm.get( 'age' ).value,
      job_id: this.registerForm.get( 'job_id' ).value
    };

    const colonist = await this.colonistService.registerColonist(newColonist);
    console.log( 'colonist was saved', colonist );
  }


  private noNumbers(validNameRegex): ValidatorFn{
    return (control): { [key: string] : any }   => {
      const forbiddenName = validNameRegex.test(control.value);
      return forbiddenName ? { 'forbiddenName' : { value: control.value } } : null;
    };
  }
}
