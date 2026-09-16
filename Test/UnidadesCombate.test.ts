import { describe, expect, test } from "vitest";
import { UnidadCombate } from "../Naval/Armas/UnidadCombate.js";

describe("UnidadCombate", () => {

  test("debe comenzar con la vida indicada", () => {
    const unidad = new UnidadCombate(10, null as any);

    expect(unidad.getVida()).toBe(10);
  });

  test("debe recibir daño correctamente", () => {
    const unidad = new UnidadCombate(10, null as any);

    unidad.recibirDisparo(3);

    expect(unidad.getVida()).toBe(7);
  });

  test("no debe tener vida negativa", () => {
    const unidad = new UnidadCombate(5, null as any);

    unidad.recibirDisparo(10);

    expect(unidad.getVida()).toBe(0);
  });

  test("debe estar viva si tiene vida mayor a 0", () => {
    const unidad = new UnidadCombate(5, null as any);

    expect(unidad.estaVivo()).toBe(true);
  });

  test("no debe estar viva si tiene vida igual a 0", () => {
    const unidad = new UnidadCombate(0, null as any);

    expect(unidad.estaVivo()).toBe(false);
  });

});