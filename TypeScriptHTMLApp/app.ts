class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

    protected changeTimer() {
        console.log("protected function")
    }
}

window.onload = () => {
    var tuple: [number, string] = [1, "string"];
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};