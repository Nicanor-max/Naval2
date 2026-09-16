import type { Arma } from "../Armas/Interface/Armas.js";
import { UnidadCombate } from "../Armas/UnidadCombate.js";

export class Tanque extends UnidadCombate {
    constructor(arma: Arma) {
        super(2, arma);
    }
}