import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListnursesComponent } from './list-nurses';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListnursesComponent', () => {
  let component: ListnursesComponent;
  let fixture: ComponentFixture<ListnursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListnursesComponent,
        HttpClientTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListnursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
