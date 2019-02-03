import { Observable } from "rxjs/Observable";
import { Subscription, Observer } from "rxjs";
import "rxjs/add/operator/map";

var observable: Observable<any> = Observable.create((observer: Observer<any>) => {
    setInterval(() => {
        observer.next(Math.floor(Math.random() * 6) + 1)
    }, 5000)
})

var observer = observable.map(data => data * 10).subscribe(
    (transformedData: any) => addItem(transformedData)
)



function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
