import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import { Subscription, Observer } from "rxjs";
import "rxjs/add/operator/skipUntil";
import "rxjs/add/operator/map";

var observable1: Observable<Number> = Observable.create((observer: Observer<Number>) => {
    var i = 0;
    setInterval(() => {
        observer.next(i++)
    }, 1000)
})

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('second observable started emitting ...')
}, 4000);

var newObservable = observable1.skipUntil(observable2);

newObservable.subscribe(data => addItem(data));

function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
