export interface Asesor {
  id: number;
  nombre: string;
  activo?: boolean;
  imagen?: string;
  instancia?: string;
  estado?: string | null;
  numero_whatsapp: string;
}
