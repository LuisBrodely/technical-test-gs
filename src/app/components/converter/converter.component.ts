import { Component } from '@angular/core';
import { RomanNumeralService } from '../../services/roman-numeral.service';
import { HistoricalEntry } from 'src/app/models/historical-entry.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  romanNumber: string = '';
  decimalNumber: number = 0;
  errorMessage: string = '';
  historicalEntries: HistoricalEntry[] = [];

  constructor(private romanNumeralService: RomanNumeralService) {}

  convertToDecimal() {
    try {
      this.decimalNumber = this.romanNumeralService.romanToDecimal(this.romanNumber);
      this.historicalEntries = this.romanNumeralService.getHistoricalEntries();
      this.errorMessage = '';
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      }
    }
  }
}
