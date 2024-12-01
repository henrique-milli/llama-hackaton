export interface Message {
  message?: string;
}

export interface Doctor {
  name: string;
  picture: string;
  distance: number;
  specialization: string;
  rating: number;
}

export interface AgentResponse {
  message?: string;
  doctors?: Doctor[]
  threadId?: string;
}
