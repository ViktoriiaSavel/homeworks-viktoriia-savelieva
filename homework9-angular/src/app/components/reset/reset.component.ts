import { Component } from '@angular/core';
import store from '../../store/store';
import actions from '../../store/actions';

const { RESET } = actions;

@Component({
    selector: 'app-reset',
    template: `
        <br><br>
        <button (click)='handler()'>Reset</button>
    `
})
export class ResetComponent {
    public handler(): void {
        store.dispatch({ type: RESET });
    }
}