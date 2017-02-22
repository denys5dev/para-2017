import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

declare var tinymce: any;

@Component({
    selector: 'simple-tiny',
    template: `
        <div>
            <textarea id="{{elementId}}"></textarea>
        </div>
    `
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table', 'image'],
            paste_data_images: true,
            // skin_url: 'assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('change', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}