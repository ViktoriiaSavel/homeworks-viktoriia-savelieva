const { Observable: { create }, range, interval } = require('rxjs');
const { reduce, bufferCount, bufferTime} = require('rxjs/operators');

// 1. Имплементировать функцилнал range используя функцию create.

function rangeFunction(n, m) {
    const rangePublisher = create((observable) => {
        for (let i = n; i <= m; i++) {
            observable.next(`This is number ${i}`);
        }
    })
    return rangePublisher;
};

const rangeSubscriber = rangeFunction(3,7).subscribe(
    (value) => {
        console.log(`Range Subscriber: ${value}`);
    }
);

// 2. Имплементировать функционал interval используя функцию create.

function intervalFunction(n) {
    var intervalPublisher = create((observable) => {
        const interval = setInterval(() => {
            observable.next(`Uhooo`);
        }, n) 
    });
    return intervalPublisher;
};

const intervalSubscriber = intervalFunction(1000).subscribe(
    (value) => {
        console.log(`Interval Subscriber works: ${value}`);
    }
);

// 3. Используя тольк reduce иммплементировать функционал filter.

const reducePublisher = range(10,50)
    .pipe(reduce((acc, val) => {
        if (val % 10 === 0) {
            acc.push(val);
        }
        return acc;
    }, []));

const reduceSubscriber = reducePublisher.subscribe(
    (value) => {
        console.log(`This is how observer with 'reduce' works: ${value}`);
    }
);

// 4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 msec или же когда накапливается 7 элементов.

const bufferPublisher = interval(50)
    .pipe(bufferTime(333) || bufferCount(7));

const bufferSubscriber = bufferPublisher.subscribe(
    (value) => {
        console.log(`This is how observer with 'buffer' works: ${value}`);
    }        
);

