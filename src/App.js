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
    <div className='contact'>
      <h2 className='contactName'>{props.name}</h2>
      <p>{props.number}</p>
    </div>
  )
}
function InformationTable(props) {
  // var contactNodes = props.data.map(function (contact) {
  //   return (
  //     <Contact name={contact.name} number={contact.number} />
  //   )
  // })
  // return (
  //   <div className="InformationTable">{contactNodes}</div>
  // )

const[search,setSearch]=React.useState('')


const handleSearch= event=>{
  setSearch(event.target.value)
}


  render() {
    let filteredPeople = props.people.filter(
      (person) => {
        var fullName = person.firstName.toLowerCase() + person.lastName.toLowerCase()
        return fullName.indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );
}  

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
      {filteredPeople.map((person)=> {
        return <Person person={person} />
      })}
   </ul>
  </div>

)
}


function App(props) {
  const [data, setData] = useState('');
  // const [newName, setNewName] = useState('');
  // const [newNumber, setNewNumber] = useState('');


  // var data = [
  //   { name: "Juani dela Cruz", number: "+639221113434" },
  //   { name: "Norah Jones", number: "+639223333434" }
  // ];
  function loadData() {
    setData(data = [
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' }])
  }
  function contactSubmit(contact) {
    props.data.push(contact)
  }


  return (
    <section>
      <h1>PhoneBook App</h1>
      <PhoneBookForm onContactSubmit={contactSubmit} />
      <InformationTable data={loadData} />
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
// ReactDOM.render(
//     <Application />,
//     document.getElementById('root')
// )

export default App;
