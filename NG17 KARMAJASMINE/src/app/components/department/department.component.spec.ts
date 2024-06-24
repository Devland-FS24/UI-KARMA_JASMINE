import { DepartmentComponent } from './department.component';

describe('DepartmentComponent', () => {
    let component: DepartmentComponent;

    beforeEach(async () => {
        component = new DepartmentComponent();
    });

    it('should change the boolean value on each click', () => {
        expect(component.active).toBeTrue();
        component.handleClick();
        expect(component.active).toBeFalse();
        component.handleClick();
        expect(component.active).toBeTrue();
    });

    it('message should be modified when we change the boolean', () => {
        expect(component.message)
            .withContext('Before click')
            .toMatch(/on/);
        component.handleClick();
        expect(component.message)
            .withContext('After click')
            .toMatch(/off/);
    })
});
