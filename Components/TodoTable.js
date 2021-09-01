import Store from './Store.js'

export default class TodoTable extends HTMLElement{
    constructor(){
        super();
        this.todos = [];
        Store.subscribe(this.render.bind(this));
        this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        this.todos = Store.getState()['todos'];
        console.log(this.todos);
        const str = this.todos.map((val)=>{
            return `<tr>
                <td>${val}</td>
                <td>false</td>
            </tr>` 
        }).join('');
        console.log(str);
        return `
                <table id="todoTable">
                    <thead>
                        <th>To-Do</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        ${str}
                    </tbody>
                </table>
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

customElements.get('todo-table')?? customElements.define('todo-table',TodoTable);