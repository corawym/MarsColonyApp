import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report';
import { EncounterService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [
    EncounterService
  ]
})
export class EncountersComponent implements OnInit {

  loading = false;

  encounters: Report[];

  constructor(private encounterService: EncounterService) { }

  async ngOnInit() {
    this.loading = true;
    this.encounters = await this.encounterService.getEncounter();
    this.loading = false;
  }
}
