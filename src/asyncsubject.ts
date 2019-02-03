import { AsyncSubject } from "rxjs/AsyncSubject";
import { Subscription } from "rxjs";

var subject = new AsyncSubject<any>()

var observer: Subscription = subject.subscribe(
    data => addItem('Observer 1: ' + data),
    error => addItem(error),
    () => addItem('observer 1 complete')
)

setInterval(() => {
    subject.next(Math.floor(Math.random() * 100) + 1)
}, 100)

setTimeout(() => {
    var observer2: Subscription = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    )
    subject.complete();
}, 500);


function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
