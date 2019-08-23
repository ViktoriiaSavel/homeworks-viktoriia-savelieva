import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selected-photo-component',
    template: `
        <!-- The expanding image container -->
        <div  class="container">
            
            <!-- Expanded image -->
            <img src="{{photoURL}}" id="expandedImg" style="width:75%">
            
        </div>

    `
})

export class SelectedPhotoComponent {

    @Input()
    public photoURL: string;

}