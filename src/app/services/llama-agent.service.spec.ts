import { TestBed } from '@angular/core/testing';

import { LlamaAgentService } from './llama-agent.service';

describe('LlamaAgentService', () => {
  let service: LlamaAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamaAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
