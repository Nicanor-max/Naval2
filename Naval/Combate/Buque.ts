import type { Arma } from "../Armas/Interface/Armas.ts";
import { UnidadCombate } from "../Armas/UnidadCombate.ts";

export class Buque extends UnidadCombate {
    constructor(arma: Arma) {
        super(3, arma);
    }
}