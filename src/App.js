import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  const filteredHandler = () => {
    switch (filter) {
      case 'completed':
        setFilteredList(list.filter(item => item.completed === true));
        break;
      case 'uncompleted':
        setFilteredList(list.filter(item => item.completed === false));
        break;
      default:
        setFilteredList(list);
        break;
    }
  }

  // save to local
  const saveLocalList = () => {
    localStorage.setItem('list', JSON.stringify(list));
  }
  // get local list
  const getLocalList = () => {
    if (localStorage.getItem('list') === null) {
      localStorage.setItem('list', JSON.stringify([]));
    } else {
      let localList = JSON.parse(localStorage.getItem('list'));
      setList(localList);
    }
  }

  useEffect(() => {
    getLocalList();

  }, []);

  useEffect(() => {
    filteredHandler();
    saveLocalList();
  }, [list, filter]);


  return (
    <div className="App">
      <header>
        <h1>Lista zakupów</h1>
      </header>
      <Form setFilter={setFilter} setInputText={setInputText} inputText={inputText} list={list} setList={setList} />
      <List list={list} setList={setList} filteredList={filteredList} />
    </div>
  );
}

export default App;
