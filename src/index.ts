/// <reference path="estructura.ts"/>
/// <reference path="cola.ts"/>

namespace estructuras {

    let cola1 = new Cola(10);
    cola1.push(10);
    cola1.push(20);
    cola1.push(30);
    cola1.print();
    console.log(cola1.getSize());
    cola1.pop();
    cola1.pop();
    console.log(cola1.getSize());
    cola1.print();
    cola1.push(40);
    cola1.push(50);
    console.log(cola1.getSize());
    cola1.print();
    console.log(cola1.pseek());
}
