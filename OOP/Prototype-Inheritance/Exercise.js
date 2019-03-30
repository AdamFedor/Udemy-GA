// Design 2 objeccts; HtmlElement (parent) & HtmlSelectElement
const e = new HtmlElement();
// click instance method, one prototype method: focus
// e.click() //returns "clicked"
// e.focus() // returns "focused"

function HtmlElement () {
    this.click = function () {
        console.log('clicked');
    }
}

// since this is a prototype method
HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement (items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1); // indexOf for where, 1 is deleteCount, then nothing after to replace. So it's removed.
    }
    this.render = function () {
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
}

// Cannot do Object.create here
HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Exercise #2
function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src=${this.src}" />`
    }
};
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;