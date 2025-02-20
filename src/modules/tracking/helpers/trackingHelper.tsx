export interface TrackingItem {
  estado: string;
  descripcion: string;
  fecha: string;
}

export interface TrackingHelper {
  trackingNumber: string[] | string | number;
  trackingResult: TrackingItem[] | null;
  loading: boolean;
  error: string | null;
  guia_courier?: any;
}
