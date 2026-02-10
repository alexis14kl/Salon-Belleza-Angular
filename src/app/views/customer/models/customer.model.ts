export interface Customer {
  id?: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email?: string;
  direccion?: string;
  notas?: string;
  role_id: number;
  created_at?: string;
  updated_at?: string;
}

export interface ApiResponse<T = any> {
  status: boolean;
  message: string;
  data: T;
}
