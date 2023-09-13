import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTransactions'
})
export class SortTransactionsPipe implements PipeTransform {

  transform(transactions: any[], sortKey: string, sortDirection: number): any[] {
    // Vérifie si la liste des transactions ou la clé de tri sont nulles, et renvoie la liste non triée en conséquence
    if (!transactions || !sortKey) {
      return transactions;
    }

    // Trie les transactions en fonction de la clé de tri (sortKey) et de la direction de tri (sortDirection)
    return transactions.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (aValue < bValue) {
        return -sortDirection; // Tri ascendant si aValue est inférieur à bValue
      } else if (aValue > bValue) {
        return sortDirection; // Tri descendant si aValue est supérieur à bValue
      } else {
        return 0; // Aucun tri si les valeurs sont égales
      }
    });
  }

}
