import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { Icon } from '../../shared/icon';
import { EXPERIENCE } from '../../data/profile';
import { duration, formatMonth } from '../../shared/dates';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective, Icon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  protected readonly jobs = EXPERIENCE.map((job) => ({
    ...job,
    period: `${formatMonth(job.start)} — ${formatMonth(job.end)}`,
    length: duration(job.start, job.end),
  }));
}
