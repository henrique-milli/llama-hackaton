export interface Doctor {
  uid: string;
  name: string;
  picture: string;
  distance: number;
  specialization: string;
  rating: number;
  address: string;
}

export interface AgentResponse {
  message?: string;
  doctors?: Doctor[]
  threadId?: string;
}
