import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { NewReport } from '../../models/report';
import { AlienService } from '../../services/alien';
import { EncounterService } from '../../services/encounters';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

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



  constructor(
    private alienService: AlienService,
    private encounterService: EncounterService
    ) { }

  async ngOnInit() {

    const aliens = await this.alienService.getAliens();
    console.log(aliens);

    const data = {
      atype: "Octospider",
      date: "2017-10-01",
      action: "Web developer.",
      colonist_id: "4"
    };

    const newReport = await this.encounterService.reportEncounter(data);
    console.log(newReport);

  }


}
