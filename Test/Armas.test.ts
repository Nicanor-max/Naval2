import { describe, expect, test } from "vitest";
import { Pistola } from "../Naval/Armas/Pistola.ts";
import { Ametralladora } from "../Naval/Armas/Ametralladora.ts";

describe("Pistola", () => {

  test("debe comenzar con las municiones indicadas", () => {
    const pistola = new Pistola(5);

    expect(pistola.getMuniciones()).toBe(5);
  });

  test("debe descontar una municion al disparar", () => {
    const pistola = new Pistola(5);

    pistola.disparar();

    expect(pistola.getMuniciones()).toBe(4);
  });

  test("debe hacer 1 de daño", () => {
    const pistola = new Pistola(5);

    expect(pistola.disparar()).toBe(1);
  });

  test("sin municiones no debe hacer daño", () => {
    const pistola = new Pistola(0);

    expect(pistola.disparar()).toBe(0);
  });

});

describe("Ametralladora", () => {

  test("debe comenzar con las municiones indicadas", () => {
    const ametralladora = new Ametralladora(5);

    expect(ametralladora.getMuniciones()).toBe(5);
  });

  test("debe descontar una municion al disparar", () => {
    const ametralladora = new Ametralladora(5);

    ametralladora.disparar();

    expect(ametralladora.getMuniciones()).toBe(4);
  });

  test("debe hacer 2 de daño", () => {
    const ametralladora = new Ametralladora(5);

    expect(ametralladora.disparar()).toBe(2);
  });

  test("sin municiones no debe hacer daño", () => {
    const ametralladora = new Ametralladora(0);

    expect(ametralladora.disparar()).toBe(0);
  });

});