import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Icon } from '../../shared/icon';
import { MARQUEE, PROFILE } from '../../data/profile';
import { yearsSince } from '../../shared/dates';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly marquee = MARQUEE;
  protected readonly years = yearsSince(PROFILE.careerStart);
  protected readonly typed = signal('');

  private timer?: ReturnType<typeof setTimeout>;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    const reduced = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      this.typed.set(PROFILE.roles[0]);
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const word = PROFILE.roles[this.roleIndex];
    this.charIndex += this.deleting ? -1 : 1;
    this.typed.set(word.slice(0, this.charIndex));

    let delay = this.deleting ? 38 : 85;
    if (!this.deleting && this.charIndex === word.length) {
      delay = 1900;
      this.deleting = true;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % PROFILE.roles.length;
      delay = 350;
    }
    this.timer = setTimeout(() => this.tick(), delay);
  }
}
