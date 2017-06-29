import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromEventPattern';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/generate';
import 'rxjs/add/observable/if';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/race';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/onErrorResumeNext';
import 'rxjs/add/observable/pairs';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/using';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/dom/webSocket';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/bufferToggle';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/distinctUntilKeyChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/isEmpty';
import 'rxjs/add/operator/audit';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/every';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/max';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/mergeScan';
import 'rxjs/add/operator/min';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/onErrorResumeNext';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishBehavior';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/race';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/sampleTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/sequenceEqual';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/timestamp';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/window';
import 'rxjs/add/operator/windowCount';
import 'rxjs/add/operator/windowTime';
import 'rxjs/add/operator/windowToggle';
import 'rxjs/add/operator/windowWhen';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/zipAll';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    title = 'app works!';

    //create observables
    obs = Observable.of(1, 2, 3, 4);

    //create array. This array will be made into observable in one of the code function below
    array = [0, 1, 2, 3, 4, 5];

    // create subject
    // there is no need for initial value
    subject = new Subject<boolean>();

    // create behaviorSubject which require initial value
    // true is an initial value. if there is a subscription
    // after this, it would get true value immediately
    behaviorSubject = new BehaviorSubject<boolean>(true);

    // subscription is created when an observable is being subscribed
    subscription: Subscription;

    // boolean variable for showing stop observable using takeWhile operator
    isTrue: boolean = true;

    ngOnInit() {
        // this.howToHandleErrorV1();
        // this.howToHandleErrorV2();
        // this.howToUseRetry();
        // this.usingMap();
        // this.usingMapToMakeInnerObservable();
        // this.usingMapAndMergeAll();
        // this.usingFlatMap();
        // this.transformArray();
        // this.setArrayToObservableThenTransform();
        // this.reduceArray();
        // this.reduceObservableArray();
        // this.reduceObservableArray_Abstract2();
        // this.scanObservableArray();
        // this.subject.next(false); /* Subscription wont get anything at this point before the subscribeSubject() */
        // this.subscribeSubject();
        // this.subscribeBehaviorSubject();
        // this.mergeObservable();
        // this.mergeObservableAndThrowError();
        // this.mergeObservableAndErrorResumeNext();
        // this.mergeObservableAndErrorCatch();
        // this.coldObservable();
        // this.hotObservable();
        // this.basicInterval();
        // this.usingFinallyOperator();
    }



    /*
     * This uses Catch for V1. This introduces Closure. It is effectively the same as V2.
     * */
    howToHandleErrorV1() {
        this.obs
            .map(x => {
                if ( x === 3 ) {
                    throw 'I hate threes'; // When it hitted error it actually unsubscribe itself at x === 3 of throw error
                }
                return x;
            })
            .catch(err => Observable.throw('Caught error here Observable.throw')) // continue go down the error path use Observable.throw
            .catch(err => Observable.of('Caught error here Observable.of')) // catch just use Observable.of
            .subscribe(
                x => console.log(x),
                err => console.error(err), // If not catch any where, the I hate threes errors will be propagated to here
                () => console.log('done completed')
            );
    }



    /*
     * There is a difference between V1 and V2. For V2 it is using onErrorResumeNext which
     * */
    howToHandleErrorV2() {
        let good = Observable.of('Caught error here Observable.of');

        this.obs
            .map(x => {
                if ( x === 3 ) {
                    throw 'I hate threes'; // When it hit error it actually unsubscribe itself at x === 3 of throw error
                }
                return x;
            })
            .onErrorResumeNext(good) // To catch just use Observable.of
            .subscribe(
                x => console.log(x),
                err => console.error(err), // If not catch any where, the I hate threes errors will be propagated to here
                () => console.log('done completed')
            );
    }



    /*
     * For this we use see it retries three times then console.error(err);
     * So retryWhen is for trying network connection websocket
     * */
    howToUseRetry() {
        this.obs
            .map(x => {
                if ( x === 3 ) {
                    throw 'I hate threes'; // When it hitted error it actually unsubscribe itself at x === 3 of throw error
                }
                return x;
            })
            .retry(3) // retry three times
            .retryWhen(err => err.delay(2000).take(3)) // similar but with 2 seconds delay and the error is not propagated.
            .retryWhen(err => err.delay(2000).take(3).concat(Observable.throw('bad'))) // this it would throw an error.
            .subscribe(
                x => console.log(x),
                err => console.error(err), // If not catch any where, the I hate threes errors will be propagated to here
                () => console.log('done completed')
            );
    }


    /*
     * Using observable merge operator
     * */
    mergeObservableAndThrowError() {
        let mergedObs = Observable.merge(
            this.obs, //1, 2, 3, 4
            Observable.throw('Stop Error'),
            Observable.from(this.array), //0, 1, 2, 3, 4, 5
            Observable.of(999) //999,
        );

        mergedObs.subscribe(
            val => console.log(val), //this should show 1, 2, 3, 4, Stop Error
            error => console.log(error),
            () => console.log("completed")
        );
    }


    /*
     * Using observable onErrorResumeNext just like merge operator
     * */
    mergeObservableAndErrorResumeNext() {
        let mergedObs = Observable.onErrorResumeNext(
            this.obs, //1, 2, 3, 4
            Observable.throw('Stop Error'),
            Observable.from(this.array), //0, 1, 2, 3, 4, 5
            Observable.of(999) //999,
        );

        mergedObs.subscribe(
            val => console.log(val), //this should show 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 999
            error => console.log(error),
            () => console.log("completed")
        );
    }

    /*
     * Using observable merge operator and catch
     * */
    mergeObservableAndErrorCatch() {
        let mergedObs = Observable.merge(
            this.obs, //1, 2, 3, 4
            Observable.throw('Stop Error'),
            Observable.from(this.array), //0, 1, 2, 3, 4, 5
            Observable.of(999) //999,
        ).catch(e => {
            console.log(e);
            return Observable.of('catch error here');
        });

        mergedObs.subscribe(
            val => console.log(val), //this should show 1, 2, 3, 4, Stop Error, Catch Error Here
            error => console.log(error),
            () => console.log("completed")
        );
    }


    /*
     * Using observable merge operator
     * */
    mergeObservable() {
        let mergedObs = Observable.merge(
            this.obs, //1, 2, 3, 4
            Observable.from(this.array), //0, 1, 2, 3, 4, 5
            Observable.of(999) //999,
        );

        mergedObs.subscribe(
            val => console.log(val), //this should show 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 999
            error => console.log(error),
            () => console.log("completed")
        );
    }


    /*
    * Basic example of using map
    * Use Case: for most of Angular version > 2+ we use this after making a http call to map to e.g. res.json();
    * */
    usingMap() {
        this.obs
            .map(x => x * 2) // transform the input by multiple of 2
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log('done completed')
            );
    }

    /*
    * As the name described using map to make inner observable
    * Use Case: ?
    * */
    usingMapToMakeInnerObservable() {
        this.obs
            .map(x => Observable.timer(500).map(() => x + 3)) // transform the input wrapping it with another observable and addition of 3
            //.map(x => Observable.timer(500).map((x) => x + 3)) // !!! REMEMBER Not the same as the immediate above
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log('done completed')
            );
    }

    /*
    * Map and Merge all is the same as just one FlatMap
    * Use Case: ?
    * */
    usingMapAndMergeAll() {
        this.obs
            .map(x => Observable.timer(500).map(() => x + 3)) // transform the input wrapping it with another observable and addition of 3
            .mergeAll()
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log('done completed')
            );
    }

    /*
    * Flat map is the same as map then merge all
    * transform the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable
    * Use Case: ?
    * */
    usingFlatMap() {
        this.obs
            .flatMap(x => Observable.timer(500).map(() => x + 10)) // transform the input wrapping it with another observable and addition of 10
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log('done completed')
            );
    }

    /*
    * This keeps creating new array. It is good that it creates new array of arr for immutability.
    * But it's bad because there is clean up and resource intensive for mobile
    * Use Case: ?
    * */
    transformArray() {
        let result = this.array
            .filter(( x, i, arr ) => {
                console.log('filtering ' + x);
                console.log('is the source array ' + (arr === this.array));
                return x % 2 === 0;
            })
            .map(( x, i, arr ) => {
                console.log('mapping ' + x);
                console.log('is the source array ' + (arr === this.array));
                return x + '!';
            })
            .reduce(( r, x, i, arr ) => {
                console.log('reducing ' + x);
                return r + x;
            }, '--');

        console.log(result);
    }

    /*
    * This is more efficient for resource management because it linearly scans and discard when not right
    * Use Case: ?
    * */
    setArrayToObservableThenTransform() {
        let obsArray = Observable.from(this.array); // Use Observable.from() instead of Observable.of()
        obsArray
            .filter(( x: any ) => {
                console.log('filtering ' + x);
                return x % 2 === 0;
            })
            .map(( x ) => {
                console.log('mapping ' + x);
                return x + '!';
            })
            .reduce(( r, x ) => {
                console.log('reducing ' + x);
                return r + x;
            }, '--')
            .subscribe(
                x => console.log(x)
            );
    }

    /*
    * This is the same as reduceObservableArray()
    * Use Case: We want to sum questionnaire score
    * */
    reduceArray() {
        let result = this.array.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 3
        ); // 3 is the init value.
        console.log('reduceArray ' + result); // output 18 => 3 + (0 ... 5)
    }

    /*
    * This is the same as reduceArray()
    * But this waits for all the arrays to finish emitting before reducing them to one single number
    * See the next method to understand better
    * Use Case: We want to sum questionnaire score
    * */
    reduceObservableArray() {
        let obsArray = Observable.from(this.array); //Make an array object into Observable
        obsArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 3
        ).subscribe(
            val => console.log('reduceObservableArray ' + val)
        );
    }

    /*
    * The exact same reduce function/method as of reduceObserableArray() above
    * This proves that it waits for all 6 numbers to come in then reduce them
    * Use Case: ?
    * */
    reduceObservableArray_Abstract2() {
        let obsArray = Observable.interval(1000).take(6); //emits 6 times of 0, 1, 2, 3, 4, 5
        obsArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 3
        ).subscribe(
            val => console.log('reduceObservableArray_Abstract2 ' + val)
        );
    }

    /*
    * This is the same as the above reduceObserableArray_Abstract2()
    * except this is using scan instead of reduce which produces result at each emission
    * Use Case: ?
    * */
    scanObservableArray() {
        let obsArray = Observable.interval(1000).take(6); //emits 6 times of 0, 1, 2, 3, 4, 5
        obsArray.scan(
            (accumulator, currentValue) => accumulator + currentValue, 3
        ).subscribe(
            val => console.log('scanObservableArray() ' + val)
        );
    }

    /*
    * Push the next val into the behavior subject
    * */
    nextSubject(val: boolean) {
        this.subject.next(val);
    }

    /*
    * Any values push into the subject would not be can shown
    * before this subscribeSubject() is called
    * */
    subscribeSubject() {
        this.subject
            //.take(1) //when we include .take(1) we will have a complete. Without this it will continue subscribing
            .subscribe(
                val => console.log(val),
                err => console.error(err),
                () => console.log('completed')
            );
    }

    /*
    * This is the proper way to return a subject as observable
    * */
    getSubject(): Observable<boolean> {
        return this.subject.asObservable();
    }

    /*
     * Push the next val into the behavior subject
     * */
    nextBehaviorSubject(val: boolean) {
        this.behaviorSubject.next(val);
    }

    /*
    * For angular Behavior subject for a data service as a angular service often initializes
    * before component and behavior subject ensures that the component consuming the
    * service receives the last updated data even if there are no new
    * updates since the component's subscription to this data.
    * Use Case: ?
    * */
    subscribeBehaviorSubject() {
        this.behaviorSubject
            // .first()
            .subscribe(
                val => console.log(val),
                err => console.error(err),
                () => console.log('completed')
            );
    }


    /*
    * cold observable is like a recast of video
    * Use Case: Normal default every day use
    * */
    coldObservable() {
        let incrementalObs = Observable.interval(1000).take(10).map(x => x + 1);
        incrementalObs.subscribe(val => console.log('a: ' + val));
        setTimeout(function() {
            incrementalObs.subscribe(val => console.log('      b: ' + val));
        }, 4500);
    }


    /*
    * hot observable is like watching a live video
    * Use Case: When we want to async pipe a few times yet only want a single subscription
    * */
    hotObservable() {
        let incrementalObs = Observable.interval(1000).take(10)
            .map(x => x + 1)
            .publish().refCount(); //can also use .share()
        incrementalObs.subscribe(val => console.log('a: ' + val));
        setTimeout(function() {
            incrementalObs.subscribe(val => console.log('      b: ' + val));
        }, 4500);
    }

    /*
    * basic interval can be used as delay too
    * Imagine Gmail allows you to send and undo send within 4 seconds of sending
    * Use Case: Perform an action 8 seconds later then intercept if user choose to undo the action
    * */
    basicInterval() {
        let undoInSeconds: number = 8;
        this.subscription = Observable
                .interval(1000)
                .take(undoInSeconds)
                .takeWhile(() => this.isTrue)
                .subscribe(
                    (val: number) => {
                        console.log(`${val + 1} seconds...         UNDO`);
                        ( val === (undoInSeconds - 1) ) ? console.log('Email sent / Action performed') : null;
                    }
                );
    }

    /*
    * This is to stop observable from continuing performance
    * Use Case: Stop observable from running like how Gmail could undo email being sent
    * */
    stopObservableUsingUnsubscribe() {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
            console.log('subscription: Subscription is unsubscribed');
        }
    }

    /*
    * This is also to stop observable from continuing performance
    * This method is more preferable than subscribing method then unsubscribe
     * Use Case: Stop observable from running like how Gmail could undo email being sent
    * */
    stopObservableUsingTakeWhile() {
        this.isTrue = false;
    }

    /*
    * Imagine the classic Java approach of try, catch, and finally
    * Use Case: Always do an action with finally despite it's success or error such as Closing A Modal/Dialog whether it is success or error
    * */
    usingFinallyOperator() {
        Observable
            .interval(500)
            .take(4)
            .finally(() => console.log('It is the end of the observable emission, Hello World'))
            .subscribe(
                val => console.log('count taker ' + val)
            );
    }

    /*
    * For this one more use the visualisation available at https://rxviz.com/examples/higher-order-observable
    * The author did a great job
    * Use Case: ? perhaps for grouping but I am still having a bit of problem understanding how to use for grouping
    * */
    usingHigherOrderObservable() {
        Observable
            .interval(1000)
            .groupBy(n => n % 2);
    }

    /*
    * Courtsey of https://rxviz.com/examples/custom-operator
    * Use Case: ?
    * */
    createCustomOperator() {
        // haven't work on this yet. Work In Progress :)
    }

}
