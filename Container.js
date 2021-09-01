import Card from './Components/Card.js'
import Row from './Components/Row.js'
import TodoForm from './Components/TodoForm.js'
import TodoTable from './Components/TodoTable.js'
import Store from './Components/Store.js'

export default class Container extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){

        return `
            <div class="container">
                <h1>TO-DO list</h1>
                <todo-form></todo-form>
                <todo-row></todo-row>
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

customElements.get('container-app')?? customElements.define('container-app',Container);