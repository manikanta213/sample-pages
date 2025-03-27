import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('togglePassword') togglePassword!: ElementRef;

  constructor(private renderer: Renderer2) {}

  togglePasswordVisibility() {
    const inputType = this.passwordInput.nativeElement.type;
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';

    // Change icon
    const newIcon = inputType === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
    this.renderer.setProperty(this.togglePassword.nativeElement, 'innerHTML', `<i class="${newIcon}"></i>`);
  }
}
