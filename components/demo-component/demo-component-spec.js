'use strict';
/* globals describe, it, beforeEach, jasmine*/

import DemoComponent from './demo-component.js';

describe('DemoComponent', () => {

    describe('#constructor', () => {

        it('should set a property', () => {
            let demoComponent = new DemoComponent();

            expect(demoComponent.property).toBeTruthy();
        });
    });
});