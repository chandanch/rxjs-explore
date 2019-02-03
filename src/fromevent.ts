import { Observable } from "rxjs/Observable";
import { Observer, Subscription } from "rxjs";
import { fromEvent } from "rxjs/Observable/fromEvent";

var observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    var observer = observable.subscribe((data: any) => addItem(data))
}, 2000);

function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
