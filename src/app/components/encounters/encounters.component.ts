import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: []
})
export class EncountersComponent implements OnInit {

  constructor(encounterService: EncounterService) { }

  ngOnInit() {
  }

}
