import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDefinitionComponent } from './column-definition.component';

describe('ColumnDefinitionComponent', () => {
  let component: ColumnDefinitionComponent;
  let fixture: ComponentFixture<ColumnDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDefinitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
