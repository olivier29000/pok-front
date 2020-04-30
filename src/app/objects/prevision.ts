import { Carte } from './carte';

export class Prevision {

  constructor(

    public rangeDeGagne : number[][],
    public pourcentageDeGagne : number,
    public  cartes : Carte[]){}

  }
