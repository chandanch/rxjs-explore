import { Observable } from "rxjs/Observable";
import { Subscription, Observer } from "rxjs";
import {merge} from "rxjs/observable/merge";

var observable = Observable.create((observer: Observer<any>) => {
    observer.next('First Observable value')
})

var observable2 = Observable.create((observer: Observer<any>) => {
    observer.next('Second Observable value')
})

var newObservable = merge(observable, observable2);

newObservable.subscribe((data: any) => addItem(data));


function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
