import { describe, expect, test } from "vitest";
import { UnidadCombate } from "../Naval/Armas/UnidadCombate.ts";
import { Pistola } from "../Naval/Armas/Pistola.ts";
import { Ametralladora } from "../Naval/Armas/Ametralladora.ts";
import { Escudo } from "../Naval/Escudo/Escudo.ts";

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

  test("El Soldado Dispara a un tanque con la pistola", () => {
    const atacante = new UnidadCombate(1, new Pistola(1));
    const objetivo = new UnidadCombate(2, new Pistola(1));

    atacante.disparar(objetivo);

    expect(objetivo.getVida()).toBe(1);
    expect(atacante.getVida()).toBe(1);
  });


  test("Un soldado dispara a un soldado2 y el soldado2 muere", () => {
  
    const soldado1 = new UnidadCombate(1, new Pistola(1));
    const soldado2 = new UnidadCombate(1, new Pistola(1));
    expect(soldado1.estaVivo()).toBe(true);
    expect(soldado2.estaVivo()).toBe(true);

    soldado1.disparar(soldado2);

  
    expect(soldado2.estaVivo()).toBe(false);
    expect(soldado1.estaVivo()).toBe(true);
  });

  test("Un soldado dispara a un tanque con una ametralladora y el tanque explota" , () => {
    const soldado = new UnidadCombate(1, new Ametralladora(2));
    const tanque = new UnidadCombate(2,new Ametralladora(2));

    expect(soldado.estaVivo()).toBe(true);
    expect(tanque.estaVivo()).toBe(true);

    soldado.disparar(tanque);

    expect(tanque.estaVivo()).toBe(false);
    expect(soldado.estaVivo()).toBe(true);
  });


  


});
