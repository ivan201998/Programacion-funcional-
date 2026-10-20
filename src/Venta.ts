export type Venta = {
  producto: string;
  categoria: "libros" | "tecnologia";
  importe: number;
  pagada: boolean;
};

// ---------- Filtrado y transformación ----------

// 1. Todas las ventas pagadas (filter)
export const obtenerVentasPagadas = (ventas: Venta[]): Venta[] =>
  ventas.filter((venta) => venta.pagada);

// 2. Importes de las ventas pagadas (filter + map)
export const obtenerImportesDeVentasPagadas = (ventas: Venta[]): number[] =>
  obtenerVentasPagadas(ventas).map((venta) => venta.importe);

// 3. Nombres de productos de tecnología pagados
export const obtenerNombresTecnologiaPagados = (ventas: Venta[]): string[] =>
  obtenerVentasPagadas(ventas)
    .filter((venta) => venta.categoria === "tecnologia")
    .map((venta) => venta.producto);

// ---------- Reducción y agregación ----------

// 1. Facturación total de las ventas pagadas (reduce)
export const calcularFacturacionTotal = (ventas: Venta[]): number =>
  obtenerVentasPagadas(ventas).reduce(
    (acumulado, venta) => acumulado + venta.importe,
    0
  );

// 2. Cantidad de ventas pendientes de pago (filter)
export const contarVentasPendientes = (ventas: Venta[]): number =>
  ventas.filter((venta) => !venta.pagada).length;

// 3. Importe total pendiente de cobro (filter + reduce)
export const calcularImportePendiente = (ventas: Venta[]): number =>
  ventas
    .filter((venta) => !venta.pagada)
    .reduce((acumulado, venta) => acumulado + venta.importe, 0);