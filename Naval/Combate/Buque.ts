import type { Arma } from "../Armas/Interface/Armas.js";
import { UnidadCombate } from "../Armas/UnidadCombate.js";

export class Buque extends UnidadCombate {
    constructor(arma: Arma) {
        super(3, arma);
    }
}