import { describe, expect, test } from "vitest";
import { Escudo } from "../Naval/Escudo/Escudo.js";

describe("Escudo", () => {

  test("un escudo de 50% debe reducir el daño a la mitad", () => {
    const escudo = new Escudo(50);

    const danioFinal = escudo.reducirDanio(2);

    expect(danioFinal).toBe(1);
  });

  test("un escudo de 25% debe reducir 25% del daño", () => {
    const escudo = new Escudo(25);

    const danioFinal = escudo.reducirDanio(2);

    expect(danioFinal).toBe(1.5);
  });

  test("un escudo de 0% no debe reducir el daño", () => {
    const escudo = new Escudo(0);

    const danioFinal = escudo.reducirDanio(2);

    expect(danioFinal).toBe(2);
  });

  test("un escudo de 100% debe bloquear todo el daño", () => {
    const escudo = new Escudo(100);

    const danioFinal = escudo.reducirDanio(2);

    expect(danioFinal).toBe(0);
  });

});