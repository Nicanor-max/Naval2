import { describe, expect, test } from "vitest";
import { Pistola } from "../Naval/Armas/Pistola.js";
import { Ametralladora } from "../Naval/Armas/Ametralladora.js";

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

