import { Component, Input } from '@angular/core';
import { HistoricalEntry } from '../../models/historical-entry.model';

@Component({
  selector: 'app-historical-entry',
  templateUrl: './historical-entry.component.html',
  styleUrls: ['./historical-entry.component.css']
})
export class HistoricalEntryComponent {
  @Input() entry!: HistoricalEntry;
}
