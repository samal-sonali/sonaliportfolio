import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../../shared/icon';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  host: { '(window:scroll)': 'onScroll()' },
  template: `
    <footer class="footer">
      <div class="container inner">
        <p class="big">
          {{ profile.name }}<span class="serif"> — crafting the web, one pixel at a time.</span>
        </p>
        <div class="row">
          <span>© {{ year }} {{ profile.name }}. Built with Angular.</span>
          <nav aria-label="Social">
            <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" [size]="18" /></a>
            <a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" [size]="18" /></a>
          </nav>
        </div>
      </div>
    </footer>

    <a href="#top" class="to-top" [class.show]="showTop()" aria-label="Back to top">
      <app-icon name="arrowUp" [size]="20" />
    </a>
  `,
  styles: `
    .footer {
      padding-block: 48px 40px;
      border-top: 1px solid var(--line);
    }

    .big {
      font-size: clamp(1.4rem, 3.4vw, 2.2rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.2;

      .serif {
        color: var(--muted);
      }
    }

    .row {
      margin-top: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      font-size: 0.88rem;
      color: var(--muted);
    }

    nav {
      display: flex;
      gap: 10px;

      a {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 1px solid var(--line);
        transition: color 0.25s, border-color 0.25s, transform 0.3s var(--ease);

        &:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }
      }
    }

    .to-top {
      position: fixed;
      right: clamp(16px, 3vw, 28px);
      bottom: clamp(16px, 3vw, 28px);
      z-index: 40;
      display: grid;
      place-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--ink);
      color: var(--bg);
      box-shadow: var(--shadow-md);
      opacity: 0;
      transform: translateY(16px);
      pointer-events: none;
      transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);

      &.show {
        opacity: 1;
        transform: none;
        pointer-events: auto;
      }

      &:hover {
        transform: translateY(-3px);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly showTop = signal(false);

  protected onScroll(): void {
    this.showTop.set(window.scrollY > 700);
  }
}
