import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {SpeakerService} from './speaker.service';

describe('Speaker Service', () => {
  beforeEachProviders(() => [SpeakerService]);

  it('should ...',
     inject([SpeakerService], (service: SpeakerService) => { expect(service).toBeTruthy(); }));
});
