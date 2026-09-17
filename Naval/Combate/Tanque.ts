import type { Arma } from "../Armas/Interface/Armas.ts";
import { UnidadCombate } from "../Armas/UnidadCombate.ts";

export class Tanque extends UnidadCombate {
    constructor(arma: Arma) {
        super(2, arma);
    }
}