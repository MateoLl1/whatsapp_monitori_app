import { Asesor } from './asesor.interface';
import { Mensaje } from './mensaje.interface';

export interface Conversacion {
  id: number;
  cliente_numero: string;
  asesor: Asesor;
  inicio?: Date;
  fin?: Date;
  estado?: string;
  nombre_cliente?: string;
  mensajes?: Mensaje[];
}
