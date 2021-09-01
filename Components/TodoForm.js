import TodoTable from './TodoTable.js'
import Store from './Store.js'

export default class TodoForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
            <form action="#">
                <todo-table></todo-table>
                <input type="text" name="newTod" id="newTodo" placeholder="Enter New Todo Item" required>
                <button class="btn">Add ToDo List</button>
            </form>
        `;
    }

    connectedCallback(){
        this.querySelector('form').addEventListener('submit',this.addRow.bind(this));
    }

    addRow(evt){
        evt.preventDefault();
        const todoStr = this.querySelector('#newTodo').value;
        //Action Event dispatch
        Store.dispatch({type:'ADD_TODO',todoStr});
        
    }

    disconnectedCallback(){

    }

    static get observedAttributes(){

    }

    changedAttribute(name, oldValue, newValue){

    }
}

customElements.get('todo-form')?? customElements.define('todo-form',TodoForm);