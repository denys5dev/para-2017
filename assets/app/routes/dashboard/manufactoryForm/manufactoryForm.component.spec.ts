import { TestBed } from '@angular/core/testing';
import { ManufactoryFormComponent } from './manufactoryForm.component';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './../dashboard.service';
import { JQueryService } from './../../../core/fix/JQuery.service';

describe('ManufactoryFormComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MaterialModule.forRoot()],
            declarations: [ManufactoryFormComponent],
            providers: [DashboardService, JQueryService]
        });
    });

    it('should dispaly form', () => {
        const fixture = TestBed.createComponent(ManufactoryFormComponent);
        fixture.autoDetectChanges();
        const component = fixture.componentInstance;
        const element = <HTMLElement>fixture.nativeElement;
        const inputs = element.querySelectorAll('input');
        expect(inputs.length).toBe(8);
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs.item(i);
            expect(input.textContent).toBe('');
        }
    });
});