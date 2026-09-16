import type { Arma } from "../Armas/Interface/Armas.js";
import { UnidadCombate } from "../Armas/UnidadCombate.js";

export class Soldado extends UnidadCombate {
    constructor(arma: Arma) {
        super(1, arma);
    }
}