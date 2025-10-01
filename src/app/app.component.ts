import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from './services/user.service';

// 1. Implement a user filter system with two inputs:
//    - text input to filter users by name (case-insensitive)
//    - select input to filter users by role ("all", "admin", "user", "guest")
// 2. The filtering logic should be fully reactive.
// 3. Version 1: implement using RxJS
// 4. Version 2: implement using Angular Signals
// 5. Version X: implement using your approach
// 5. BONUS:
//    - Add ability to reset filters
//    - Add sorting
//    - Add tests

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSearch(value: string) {}
  onRoleChange(role: any) {} // add type
}
