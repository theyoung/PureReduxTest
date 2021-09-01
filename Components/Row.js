import Card from './Card.js'

export default class Row extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
            <div class="row">
                <todo-card></todo-card>
            </div>
        `;
    }

    connectedCallback(){

    }

    disconnectedCallback(){

    }

    static get observedAttributes(){

    }

    changedAttribute(name, oldValue, newValue){

    }
}

customElements.get('todo-row')?? customElements.define('todo-row',Row);