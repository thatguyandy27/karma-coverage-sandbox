'use strict';


export class DemoComponent{
    constructor(){
        this.property = 1;
    }

    setMethod(setValue){
        this.methodValue = setValue;
    }

    getMethod(){
        return this.methodValue;
    }
}

export default DemoComponent;
