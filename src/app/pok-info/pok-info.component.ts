import { Component, OnInit, ɵConsole } from '@angular/core';
import { Prevision } from '../objects/prevision';
import { ApiService } from '../services/api.service';
import { Carte } from '../objects/carte';

@Component({
  selector: 'app-pok-info',
  templateUrl: './pok-info.component.html',
  styleUrls: ['./pok-info.component.scss']
})
export class PokInfoComponent implements OnInit {

  prevision : Prevision;
  paquetDeCartes : Carte[];
  cartesCourantes : Carte[] = [];
  rangeDeGagne : number[][];
  rangeDeGagneColor : string[][] = [['A','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['R','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['D','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['V','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['10','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['9','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['8','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['7','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['6','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['5','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['4','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['3','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
  ['2','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0','0,0,0'],
                                  ];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.appelAPICartes();
    this.appelApiPrevision();

  }




  ajouterCarte(carte : Carte ):void {
    this.cartesCourantes.push(carte);
  }

  retirerCarte(carte : Carte ):void {
    this.cartesCourantes = this.cartesCourantes.filter(carteComparaison => carteComparaison.nomCarte !== carte.nomCarte)
  }

  appelAPICartes(): void{
    this.apiService.getPaquetDeCarte().subscribe(listeDeCartes => {
      this.paquetDeCartes = listeDeCartes;
    });
  }

  appelApiPrevision(): void {

    this.apiService.getPrevision(this.cartesCourantes).subscribe(desc => {
      this.prevision = desc;
      this.rangeDeGagne = this.prevision.rangeDeGagne;
      console.log(desc)
      for (let i = 0; i < this.rangeDeGagne.length; i++) {
        for (let j = 0; j < this.rangeDeGagne.length; j++) {
          if (this.rangeDeGagne[i][j] > 0.8) {
            this.rangeDeGagneColor[i][j] = "0,255,0";
          }else if (this.rangeDeGagne[i][j] > 0.6) {
            this.rangeDeGagneColor[i][j] = "255,255,0";
          } else if (this.rangeDeGagne[i][j] > 0.4) {
            this.rangeDeGagneColor[i][j] = "237,127,16";
          } else if (this.rangeDeGagne[i][j] > 0.2) {
            this.rangeDeGagneColor[i][j] = "255,0,0";
          } else {
            this.rangeDeGagneColor[i][j] = "0,0,0";
          }
        }
      }
      console.log(this.rangeDeGagneColor);
    })
}
}
