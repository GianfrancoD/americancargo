export interface TrackingItem {
  estado: string;
  descripcion: string;
  fecha: string;
}

export interface TrackingHelper {
  trackingNumber: string;
  trackingResult: TrackingItem[] | null;
  loading: boolean;
  error: string | null;
  guiaCourier: string | null;
}
