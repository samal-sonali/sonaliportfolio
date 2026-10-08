import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { Icon } from '../../shared/icon';
import { EDUCATION } from '../../data/profile';

@Component({
  selector: 'app-education',
  imports: [RevealDirective, Icon],
  template: `
    <section id="education" class="section">
      <div class="container">
        <div class="section-head" reveal>
          <span class="eyebrow">Education</span>
          <h2 class="section-title">The <span class="serif gradient-text">foundations.</span></h2>
        </div>

        <div class="grid">
          @for (e of items; track e.school; let i = $index) {
            <article class="edu card" [class.main]="i === 0" reveal [revealDelay]="i * 90">
              <span class="icon"><app-icon name="cap" [size]="22" /></span>
              <span class="period">{{ e.period }}</span>
              <h3>{{ e.degree }}</h3>
              <p class="school">{{ e.school }}</p>
              @if (e.detail) {
                <p class="detail">{{ e.detail }}</p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr;
      gap: 18px;
    }

    .edu {
      padding: 30px 26px;
      display: flex;
      flex-direction: column;
      transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
      }

      &.main {
        background: var(--ink);
        color: var(--bg);
        border-color: transparent;

        .icon {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        :root[data-theme='dark'] & .icon,
        .school,
        .detail {
          color: inherit;
        }
        .detail,
        .period {
          opacity: 0.7;
        }
        .period {
          color: inherit;
        }
      }
    }

    .icon {
      display: grid;
      place-items: center;
      width: 50px;
      height: 50px;
      border-radius: 15px;
      background: var(--accent-soft);
      color: var(--accent);
      margin-bottom: 26px;
    }

    .period {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: var(--accent);
    }

    h3 {
      margin-top: 8px;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.3;
    }

    .school {
      margin-top: 6px;
      color: var(--ink-2);
      font-weight: 500;
    }

    .detail {
      margin-top: auto;
      padding-top: 18px;
      font-size: 0.88rem;
      color: var(--muted);
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
      .edu.main {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 560px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  protected readonly items = EDUCATION;
}
