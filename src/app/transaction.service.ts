import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  // Récupérer la liste des transactions depuis un fichier JSON
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/transactions.json');
  }

  // Récupérer une transaction par son ID depuis un fichier JSON
  getTransactionById(id: string): Observable<any> {
    return this.http.get<any>(`assets/data/${id}.json`);
  }
}
