import { Observable } from './observable';
import { Observer } from './observer';
import { changeTextContent  } from './utils/utils';

/* Selecting existing Elements */

// input
const input = document.querySelector('.stream-input');

// paragraphs
const p1Element = document.querySelector('.p1');
const p2Element = document.querySelector('.p2');
const p3Element = document.querySelector('.p3');

// buttons
const subscribeP1Btn = document.querySelector('.button-subscribe-p1');
const subscribeP2Btn = document.querySelector('.button-subscribe-p2');
const subscribeP3Btn = document.querySelector('.button-subscribe-p3');

const unsubscribeP1Btn = document.querySelector('.button-unsubscribe-p1');
const unsubscribeP2Btn = document.querySelector('.button-unsubscribe-p2');
const unsubscribeP3Btn = document.querySelector('.button-unsubscribe-p3');


/* Creating Subscriptions */

const updateP1SubscriptionFn = (text: string) => changeTextContent(text, p1Element);
const updateP1Observer = new Observer(updateP1SubscriptionFn);

const updateP2SubscriptionFn = (text: string) => changeTextContent(text, p2Element);
const updateP2Observer = new Observer(updateP2SubscriptionFn);

const updateP3SubscriptionFn = (text: string) => changeTextContent(text, p3Element);
const updateP3Observer = new Observer(updateP3SubscriptionFn);


/* Observable instance */

const observerList = new Observable();
observerList.subscribe(updateP1Observer);
observerList.subscribe(updateP2Observer);
observerList.subscribe(updateP3Observer);


/* Event listeners */

subscribeP1Btn?.addEventListener('click', () => observerList.subscribe(updateP1Observer));
unsubscribeP1Btn?.addEventListener('click', () => observerList.unsubscribe(updateP1Observer));
subscribeP2Btn?.addEventListener('click', () => observerList.subscribe(updateP2Observer));
unsubscribeP2Btn?.addEventListener('click', () => observerList.unsubscribe(updateP2Observer));
subscribeP3Btn?.addEventListener('click', () => observerList.subscribe(updateP3Observer));
unsubscribeP3Btn?.addEventListener('click', () => observerList.unsubscribe(updateP3Observer));

input?.addEventListener('keyup', (e) => {
    debugger
    // @ts-ignore
    observerList.notify(e.target.value);
});
