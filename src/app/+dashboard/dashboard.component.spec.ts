import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {DashboardComponent} from './dashboard.component';

describe('Component: Dashboard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DashboardComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([DashboardComponent], (component: DashboardComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(DashboardComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(DashboardComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <ev-dashboard></ev-dashboard>
  `,
  directives: [DashboardComponent],
})
class DashboardComponentTestController {
}
