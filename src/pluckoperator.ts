import { from } from "rxjs/Observable/from";
import { Subscription, Observer } from "rxjs";
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/map";

var observable = from(
    [
        {name: 'chandio', score: 23, level: 2},
        {name: 'Duidio', score: 45, level: 1},
        {name: 'Fardio', score: 73, level: 2},
        {name: 'Gardio', score: 83, level: 2}
    ]
)

observable.pluck('name')
    .map((name: string) => name.toUpperCase())
    .subscribe(transformedData => addItem(transformedData));

function addItem(value: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
