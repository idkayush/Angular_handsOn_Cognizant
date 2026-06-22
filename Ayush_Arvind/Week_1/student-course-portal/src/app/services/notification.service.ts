import { Injectable } from '@angular/core';
@Injectable()
export class NotificationService { messages: string[] = []; add(message: string): void { this.messages.push(message); } }
