import { Observable } from "rxjs/Observable";
import { Observer, Subscription } from "rxjs";
import 'rxjs/add/operator/share';

var observable = Observable.create((observer: Observer<Number | string>) => {
    try {
        observer.next(12);
        observer.next(42);
        setInterval(() => {
            observer.next(Math.floor(Math.random() * 100) + 1);
        }, 2000)
        
    } catch(error) {
        observer.error(error);
    }
}).share();

var observer: Subscription = observable.subscribe(
    (score: any) => addItem(score),
    (error: any) => addItem(error),
    () => addItem('Complete')
);


setTimeout(() => {
    var observer2: Subscription = observable.subscribe(
        (score: any) => addItem('Subscription 2: ' + score)
    )
}, 1000);


function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
