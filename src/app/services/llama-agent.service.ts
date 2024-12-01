import { Injectable } from '@angular/core';
import { AgentResponse } from '../../models/agentResponse';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class LlamaAgentService {

  constructor(private functions: Functions) {
  }

  async sendMessage(userMessage: string, threadId?: string): Promise<AgentResponse> {
    const llamaAgent = httpsCallable(this.functions, 'llamaAgent');
    const response = await llamaAgent({userMessage, threadId});
    return response.data as AgentResponse;
  }
}
