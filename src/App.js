//import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';



function PhoneBookForm(props) {

  const nameRef = useRef(null);
  const numberRef = useRef(null);
  function handleSubmit(e) {
    props.preventDefault(e);
    var name = React.findDOMNode(nameRef).value.trim();
    var number = React.findDOMNode(numberRef).value.trim();
    if (!name || !number) {
      return;
    }
    props.onContactSubmit({ name: name, number: number });

    React.findDOMNode(nameRef).value = '';
    React.findDOMNode(numberRef).value = '';
    return;
  }

  return (
    <form className="addContactForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="text" placeholder="Number" ref={numberRef} />
      <button type="submit">Add Contact</button>
    </form>
  );
}
;



function Contact(props) {
  return (
    <div>
      <h2 >{props.name}</h2>
      <p>{props.number}</p>
    </div>
  )
}

// var PhoneBookList = React.createClass({
//   render: function () {
//       var contactNodes = this.props.data.map(function (contact) {
//           return (
//               <Contact name={contact.name} number={contact.number} />
//           )
//       });
//       return (
//           <div className="phoneBookList">
//               {contactNodes}
//           </div>
//       )

//   }
// });
function InformationTable(props) {

  const [search, setSearch] = React.useState('')
  const handleSearch = event => {
    setSearch(event.target.value)
  }
  var contactNodes = this.props.data.map(function (contact) {
    return (
      <Contact name={contact.name} number={contact.number} />
    )
  });
  return (
    <div className="people-list">
      <div className="search">
        <input type="text"
          className="search_input"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Enter name or lastname"
        />
      </div>
      <ul className="list">
        {contactNodes}
        {/* {filteredPeople.map((person) => {
          return <Contact person={person} />
        })} */}
      </ul>
    </div>

  )
}


function App(props) {
  const [data, setData] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' }]);
  // const [newName, setNewName] = useState('');
  // const [newNumber, setNewNumber] = useState('');


  function contactSubmit(contact) {
    setData(data.push(contact)
    )
  }
  return (
    <section>
      <h1>PhoneBook App</h1>
      <PhoneBookForm onContactSubmit={contactSubmit} />
      <InformationTable data={data} />
      {/* <PhoneBookForm
        onContactSubmit={this.handleContactSubmit}
        text="name"
        value={newName}
        onChange={onChangeClick}
        text1="number"
        value1={newNumber}
        onChange1={ChangeClick}
        type="submit"
      /> */}
      {/* <h2>Numbers</h2> */}
      {/* <Numbers persons={persons} /> */}
      {/* <InformationTable data={[{ name: 'alex smith', number: '12345' },
      { name: 'alice smith', number: '345' },]} /> */}
      {/* <PhoneBookForm onContactSubmit={handleContactSubmit} />
            <InformationTable data={[{ name: 'alex smith', number: '12345' },
            { name: 'alice smith', number: '345' },]} /> */}
    </section>
  )
}


export default App;
