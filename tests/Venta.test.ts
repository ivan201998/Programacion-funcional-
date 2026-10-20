import { describe, it, expect } from "vitest";
import {
  Venta,
  obtenerVentasPagadas,
  obtenerImportesDeVentasPagadas,
  obtenerNombresTecnologiaPagados,
  calcularFacturacionTotal,
  contarVentasPendientes,
  calcularImportePendiente,
} from "../src/Venta";

const ventas: Venta[] = [
  { producto: "Libro TypeScript", categoria: "libros", importe: 25000, pagada: true },
  { producto: "Mouse", categoria: "tecnologia", importe: 18000, pagada: true },
  { producto: "Teclado", categoria: "tecnologia", importe: 45000, pagada: false },
  { producto: "Libro Clean Code", categoria: "libros", importe: 32000, pagada: true },
  { producto: "Monitor", categoria: "tecnologia", importe: 150000, pagada: true },
  { producto: "Auriculares", categoria: "tecnologia", importe: 28000, pagada: false },
];

describe("Ventas", () => {
  it("obtiene las ventas pagadas", () => {
    expect(obtenerVentasPagadas(ventas)).toHaveLength(4);
  });
  it("obtiene los importes pagados", () => {
    expect(obtenerImportesDeVentasPagadas(ventas)).toEqual([25000, 18000, 32000, 150000]);
  });
  it("lista productos de tecnología pagados", () => {
    expect(obtenerNombresTecnologiaPagados(ventas)).toEqual(["Mouse", "Monitor"]);
  });
  it("calcula la facturación total", () => {
    expect(calcularFacturacionTotal(ventas)).toBe(225000);
  });
  it("cuenta ventas pendientes", () => {
    expect(contarVentasPendientes(ventas)).toBe(2);
  });
  it("calcula el importe pendiente", () => {
    expect(calcularImportePendiente(ventas)).toBe(73000);
  });
});