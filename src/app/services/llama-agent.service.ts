import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgentResponse } from '../../models/agentResponse';

@Injectable({
  providedIn: 'root'
})
export class LlamaAgentService {

  private apiUrl = 'http://localhost:3001/get-response';

  constructor(private http: HttpClient) {
  }

  sendMessage(userMessage: string, threadId?: string): Promise<AgentResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      userMessage: userMessage,
      threadId: threadId
    };

    return this.http.post<AgentResponse>(this.apiUrl, body, {headers: headers}).toPromise() as Promise<AgentResponse>;
  }
}
