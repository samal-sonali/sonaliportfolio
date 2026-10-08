import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { Icon } from '../../shared/icon';
import { EXPERIENCE, PROFILE } from '../../data/profile';
import { yearsSince } from '../../shared/dates';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, Icon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly stats = [
    { value: `${yearsSince(PROFILE.careerStart)}+`, label: 'Years building for the web' },
    { value: `${EXPERIENCE.length}`, label: 'Companies shipped with' },
    { value: '20%', label: 'Engagement lift from UI work' },
    { value: `${PROFILE.languages.length}`, label: 'Languages spoken' },
  ];
}
