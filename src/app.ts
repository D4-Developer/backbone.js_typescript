// import * as Backbone from "backbone";


declare module Backbone {
	export class Model {
		constructor (attr?: any , opts?: any );
		get(name: string): any;
		set(name: string, val: any): void;
		set(obj: any): void;
		save(attr?:any , opts?:any ): void;
		destroy(): void;
		bind(ev: string, f: Function, ctx?: any): void;
		toJSON(): any;
		trigger(eventName: string, ...args: any[]): any;
	}
	export class Collection {
		constructor (models?: any , opts?: any );
		bind(ev: string, f: Function, ctx?: any): void;
		collection: Model;
		length: number;
		create(attrs: any, opts?: any ): Collection;
		each(f: (elem: any) => void ): void;
		fetch(opts?: any): void;
		last(): any;
		last(n: number): any[];
		filter(f: (elem: any) => any): Collection;
		without(...values: any[]): Collection;
		trigger(eventName: string, ...args: any[]): any;
	}
	export class View {
		constructor (options?: any );
		$(selector: string): any;
		el: HTMLElement;
		$el: any;
		model: Model;
		remove(): void;
		delegateEvents: any;
		make(tagName: string, attrs?: any , opts?: any ): View;
		setElement(element: HTMLElement, delegate?: boolean): void;
		tagName: string;
		events: any;

		static extend: any;
	}
}

class Example extends Backbone.Model {
    name: String = 'default';

    constructor(opts?: any) {
        super();
        console.log("Hello from constuctor");
        // this.render();
    }
}

class ExampleView extends Backbone.View {
    
	// el = $('.name');
	tagname: string;
    className: string;
    mainElement: HTMLElement;
    model: Example;

    initialize () {
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

var model = new ExampleView({el: "#name"});
