import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';
import { Icon } from '../../shared/icon';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);

  protected name = '';
  protected email = '';
  protected message = '';

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      location.href = `mailto:${PROFILE.email}`;
    }
  }

  /** No backend: opens the visitor's mail app with the message pre-filled. */
  protected send(): void {
    const subject = `Portfolio enquiry from ${this.name.trim()}`;
    const body = `${this.message.trim()}\n\n— ${this.name.trim()}${this.email.trim() ? ` (${this.email.trim()})` : ''}`;
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
