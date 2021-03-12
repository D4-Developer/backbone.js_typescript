// import * as Backbone from "backbone";
class Example extends Backbone.Model {
    constructor(opts) {
        super();
        this.name = 'default';
        console.log("Hello from constuctor");
        // this.render();
    }
}
class ExampleView extends Backbone.View {
    initialize() {
        this.render();
    }
    render() {
        console.log("render fn call.");
        console.log(this.$el);
        this.$el[0].style.backgroundColor = "#123d5f";
        this.el.style.fontSize = "100px";
        return this;
    }
}
var model = new ExampleView({ el: "#name" });
