import type { Arma } from "../Armas/Interface/Armas.ts";
import { UnidadCombate } from "../Armas/UnidadCombate.ts";

export class Soldado extends UnidadCombate {
    constructor(arma: Arma) {
        super(1, arma);
    }
}