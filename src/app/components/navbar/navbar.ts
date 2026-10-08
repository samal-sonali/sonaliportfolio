import { AfterViewInit, ChangeDetectionStrategy, Component, DOCUMENT, OnDestroy, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon';
import { ThemeService } from '../../shared/theme.service';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar implements AfterViewInit, OnDestroy {
  protected readonly theme = inject(ThemeService);
  private readonly doc = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('');
  protected readonly progress = signal(0);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.onScroll();
    if (typeof IntersectionObserver === 'undefined') return;
    // A section counts as active once it crosses the upper-middle band of the viewport.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) this.active.set(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ['top', ...this.links.map((l) => l.id), 'contact']) {
      const el = this.doc.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected onScroll(): void {
    const el = this.doc.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    this.scrolled.set(el.scrollTop > 12);
    this.progress.set(max > 0 ? el.scrollTop / max : 0);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
