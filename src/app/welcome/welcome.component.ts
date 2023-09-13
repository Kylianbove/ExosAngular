import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  // Déclaration des variables de contrôle
  userName: string = ''; // Nom de l'utilisateur
  selectedFont: string = 'Arial'; // Police de caractère sélectionnée
  fontSize: string = '16px'; // Taille de la police
  textAlignment: string = 'left'; // Alignement du texte (gauche par défaut)
}
