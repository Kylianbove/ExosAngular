import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { SortTransactionsPipe  } from '../sort-transactions.pipe';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  transactions: any[] = []; // Tableau pour stocker les transactions
  sortKey: string = 'id'; // Par défaut, trier par ID
  sortDirection: number = 1; // 1 pour tri ascendant, -1 pour tri descendant

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // Récupérer les transactions depuis le service
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

   // Méthode pour changer le critère de tri et la direction
   changeSort(key: string) {
    if (key === this.sortKey) {
      this.sortDirection = -this.sortDirection; // Inverser la direction si le même critère est cliqué à nouveau
    } else {
      this.sortDirection = 1; // Réinitialiser la direction si un nouveau critère est sélectionné
      this.sortKey = key;
    }
  }
}
