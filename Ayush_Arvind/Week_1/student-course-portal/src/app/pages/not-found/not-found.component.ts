import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector:'app-not-found', standalone:true, imports:[RouterLink], template:'<section class="panel"><h1>404 - Page Not Found</h1><a routerLink="/">Go Home</a></section>' })
export class NotFoundComponent {}
