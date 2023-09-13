import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0; // Premier nombre de l'opération
  num2: number = 0; // Deuxième nombre de l'opération
  operation: string = 'add'; // Par défaut, l'opération est l'addition
  result: number = 0; // Résultat de l'opération
  history: {
    time: Date; // Horodatage de l'opération
    operationString: string; // Chaîne de caractères représentant l'opération (num1 op num2)
    result: number; // Résultat de l'opération
  }[] = []; // Tableau pour stocker l'historique des opérations

  // Méthode pour effectuer le calcul
  calculate() {
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }

    // Créer une chaîne de caractères représentant l'opération
    const operationSymbol = this.operation === 'add' ? '+' :
                            this.operation === 'subtract' ? '-' :
                            this.operation === 'multiply' ? '*' :
                            this.operation === 'divide' ? '/' : '';
    const operationString = `${this.num1} ${operationSymbol} ${this.num2}`;

    // Ajoutez l'opération à l'historique
    this.history.push({ 
      time: new Date(),// Horodatage actuel
      operationString: operationString, // Chaîne de caractères de l'opération
      result: this.result // Résultat de l'opération
    });
  }

  // Méthode pour effacer une entrée de l'historique
  clearHistoryEntry(index: number) {
    this.history.splice(index, 1); // Supprime l'entrée de l'historique à l'index spécifié
  }
}