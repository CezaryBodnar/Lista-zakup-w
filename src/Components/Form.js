import React from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ setFilter, setInputText, inputText, list, setList }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setList([...list, { text: inputText, completed: false, id: uuidv4() }])
        setInputText('');
    }
    const setFilterHandler = (e) => {
        setFilter(e.target.value);
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="list-input" />
            <button onClick={submitTodoHandler} className="list-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={setFilterHandler} name="list" className="filter-list">
                    <option value="all">Wszystkie produkty</option>
                    <option value="completed">Kupione</option>
                    <option value="uncompleted">Niezakupione</option>

                </select>
                <i className="fas fa-chevron-down arrow"></i>
            </div>
        </form>
    )
}
export default Form;