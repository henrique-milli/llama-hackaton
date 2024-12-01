import { Component, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { LlamaAgentService } from '../../services/llama-agent.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatToolbar, MatCard, MatButtonModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, FormsModule, NgForOf, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewChecked {
  userMessage: string = '';
  messages: { isUser: boolean, content?: string }[] = [];
  isLoading: boolean = false;
  threadId?: string;

  @ViewChild('messagesArea') private messagesArea!: ElementRef;

  constructor(private llamaAgentService: LlamaAgentService) {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesArea.nativeElement.scrollTop = this.messagesArea.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }

  async onSubmit() {
    if (this.userMessage.trim()) {
      this.messages.push({isUser: true, content: this.userMessage});
      this.isLoading = true;
      this.messages.push({isUser: false});
      try {
        const response = await this.llamaAgentService.sendMessage(this.userMessage, this.threadId);
        if (response.message) {
          this.messages[this.messages.length - 1].content = response.message;
          this.threadId = response.threadId;
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.isLoading = false;
      }
      this.userMessage = '';
    }
  }

  onEndorse() {
    alert('Thanks, that means a lot!\nReach out to me\n- Email henrique.milli@hmd.digital\n- LinkedIn https://www.linkedin.com/in/henrique-milli/\nLearn more on https://hmd.digital');
  }
}
