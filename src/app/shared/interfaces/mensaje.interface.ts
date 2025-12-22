export interface Mensaje {
  id: string;
  from: 'asesor' | 'cliente';
  texto: string;
  fecha: string;
}
