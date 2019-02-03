import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";

var subject = new BehaviorSubject<any>('First');

var observer: Subscription = subject.subscribe(
    data => addItem('Observer 1: ' + data),
    error => addItem(error),
    () => addItem('observer 1 complete')
)

subject.next(Math.floor(Math.random() * 100) + 1);
// subject.next('observer 2 is about to subscribe....')

var observer2: Subscription = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next(Math.floor(Math.random() * 100) + 1);
subject.next(Math.floor(Math.random() * 100) + 1);
subject.next(Math.floor(Math.random() * 100) + 1);

observer2.unsubscribe();

subject.next(Math.floor(Math.random() * 100) + 1);
subject.next(Math.floor(Math.random() * 100) + 1);


function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
