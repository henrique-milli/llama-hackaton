export interface Message {
  message?: string;
}

export interface Doctor {
  name: string;
  picture: string;
  distance: number;
  specialization: string;
  availability: string;
}

export interface AgentResponse {
  message?: string;
  doctors?: Doctor[]
  threadId?: string;
}
