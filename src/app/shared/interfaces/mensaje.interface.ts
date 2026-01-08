export interface Mensaje {
  id: number;
  mensaje: string;
  fecha: Date;
  fromMe: boolean;
  objeto: string | null;
  tipo: string | null;
}
