import { CanDeactivateFn } from '@angular/router';
export interface CanComponentDeactivate { hasUnsavedChanges: () => boolean; }
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = component => component.hasUnsavedChanges() ? window.confirm('You have unsaved changes. Leave?') : true;
