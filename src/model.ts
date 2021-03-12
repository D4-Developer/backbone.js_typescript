import * as Backbone from "backbone";

class Example extends Backbone.Model {
    constructor(opts?: any) {
        super();
        console.log("Hello from constuctor");
    }
}

new Example();