import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { By } from '@angular/platform-browser';

describe('EmployeeComponent', () => {
    let component: EmployeeComponent;
    let fixture: ComponentFixture<EmployeeComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({ imports: [EmployeeComponent] });
        fixture = TestBed.createComponent(EmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show full name', () => {
        const headerDe = fixture.debugElement.query(By.css('h1'));
        const headerEl = headerDe.nativeElement;

        const testUser = { _id: '12345', first_name: 'Mario', last_name: 'Girón', email: 'mario@gmail.com', username: 'mariog', id: 3, image: '', password: '1212' };
        component.user = testUser;

        fixture.detectChanges();

        expect(headerEl.textContent).toBe(`${testUser.first_name} ${testUser.last_name}`);
    });

    // it('it should modify the background color when we click on the button', () => {
    //     const btnDe = fixture.debugElement.query(By.css('#btnSelectUser'));
    //     const divDe = fixture.debugElement.query(By.css('.user-card'));

    //     btnDe.triggerEventHandler('click');
    //     fixture.detectChanges();

    //     expect(divDe.nativeElement.style.backgroundColor).toBe('tomato');
    // })

});
