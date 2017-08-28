import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { NewReport } from '../../models/report';
import { AlienService } from '../../services/alien';
import { EncounterService } from '../../services/encounters';
import { ColonistService } from '../../services/colonist';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    EncounterService
  ]
})

export class ReportComponent implements OnInit {

  aliens: Alien[];

  reportForm = new FormGroup({
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  });

  constructor(
    private alienService: AlienService,
    private encounterService: EncounterService,
    private colonistService: ColonistService,
    private router: Router
    ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  async reportEncounter(){

    const newReport: NewReport = {
      atype: this.reportForm.get( 'atype' ).value,
      date: '2017-08-24',
      action: this.reportForm.get( 'action' ).value,
      colonist_id: this.colonistService.getColonist().id.toString()
    };

    await this.encounterService.reportEncounter(newReport);
    this.router.navigate(['encounters']);
  }

}
