import type { Arma } from "./Armas.js";
import { Escudo } from "../Escudo/Escudo.js";

export abstract class UnidadCombate {
  protected vida: number;
  private arma: Arma;
  private escudo: Escudo;

  constructor(vida: number, arma: Arma) {
    this.vida = vida;
    this.arma = arma;
    this.escudo = new Escudo(0);
  }
}