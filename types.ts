export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface RoomFeature {
  text: string;
}
