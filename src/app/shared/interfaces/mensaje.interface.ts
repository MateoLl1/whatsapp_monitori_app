import { Conversacion } from './conversacion.interface';

export interface Mensaje {
  id: number;
  conversacion: Conversacion;
  mensaje: string;
  fecha: Date;
  fromMe: boolean;
}

