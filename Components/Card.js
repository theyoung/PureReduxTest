export default class Card extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
            <div id="card">
                <span id="card-title">Completed Tasks</span>
                <div id="card-content">
                    <ul id="completedItems" class="collection padding">
                        <li>abcdefg</li>
                    </ul>
                </div>
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

customElements.get('todo-card')?? customElements.define('todo-card',Card);