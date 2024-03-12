import { Injectable } from '@angular/core';
import { HistoricalEntry } from '../models/historical-entry.model';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralService {
  private historicalEntries: HistoricalEntry[] = [];

  constructor() { }

  romanToDecimal(romanNumber: string): number {
    if (!romanNumber) {
      throw new Error('Por favor, ingresa un número romano.');
    }

    const validRomanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!validRomanRegex.test(romanNumber)) {
      throw new Error('El número romano ingresado contiene caracteres inválidos.');
    }

    const romanNumerals: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let decimalNumber = 0;

    for (let i = 0; i < romanNumber.length; i++) {
      const currentLetter = romanNumber[i];
      const currentValue = romanNumerals[currentLetter];
      const nextLetter = romanNumber[i + 1];
      const nextValue = romanNumerals[nextLetter];

      if (nextValue && nextValue > currentValue) {
        decimalNumber += nextValue - currentValue;
        i++;
      } else {
        decimalNumber += currentValue;
      }
    }

    this.addHistoricalEntry({ romanNumber, decimalNumber });

    return decimalNumber;
  }

  private addHistoricalEntry(entry: HistoricalEntry) {
    this.historicalEntries.unshift(entry);
  }

  getHistoricalEntries() {
    return [...this.historicalEntries];
  }
}
