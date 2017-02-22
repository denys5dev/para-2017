import { Injectable } from '@angular/core';

let JQuery = require('./../../../../node_modules/jquery/dist/jquery.min.js');

@Injectable()

export class JQueryService {

    clearMdLabel() {
        //Fix Angular 2 Material ----- REMOVE THIS AS FAST AS YOU CAN!!
        JQuery(document).ready(function () {
            JQuery('.md-input-placeholder').removeClass('md-focused');
            // JQuery('.md-input-placeholder').addClass('md-empty');
        });
        //------------------------------------------------------------
    }

    addMdLabelFocus() {
         //Fix Angular 2 Material ----- REMOVE THIS AS FAST AS YOU CAN!!
        JQuery(document).ready(function () {
            JQuery('.md-input-placeholder').addClass('md-focused');
        })
        //-------------------------------------------------------------
    }
    
}