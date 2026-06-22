import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
@Component({ selector: 'app-notification', standalone: true, imports: [NgFor], providers: [NotificationService], template: `<div class="panel"><h3>Notifications</h3><button (click)="add()">Add Notification</button><p *ngFor="let m of service.messages">{{ m }}</p></div>` })
export class NotificationComponent { constructor(public service: NotificationService) {} add(){ this.service.add('Component scoped notification'); } } // providers:[NotificationService] creates a fresh service instance for this component subtree, so its state is isolated from root-level singletons.
