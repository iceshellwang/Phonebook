//import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';



function PhoneBookForm(props) {

  const nameRef = useRef(null);
  const numberRef = useRef(null);


  //   handleSubmit: function(e) {
  //     e.preventDefault();
  //     var name = React.findDOMNode(this.refs.name).value.trim();
  //     var number = React.findDOMNode(this.refs.number).value.trim();

  //     if (!name || !number) {
  //       return;
  //     }
  //     this.props.onContactSubmit({ name: name, number: number });

  //     React.findDOMNode(this.refs.name).value = '';
  //     React.findDOMNode(this.refs.number).value = '';
  //     return;
  //   },
  //   render: function() {
  //     return (
  //       <form className="addContactForm" onSubmit={this.handleSubmit}>
  //         <input type="text" placeholder="Name" ref="name" />
  //         <input type="text" placeholder="Number" ref="number" />
  //         <button type="submit">Add Contact</button>
  //       </form>
  //     );
  //   }
  // });


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

}


function App(props) {
  const [data, setData] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' }]);
  // const [newName, setNewName] = useState('');
  // const [newNumber, setNewNumber] = useState('');


  // function contactSubmit(contact) {
  //   setData(data.push(contact)
  //   )
  // }
  return (
    <section>
      <h1>PhoneBook App</h1>
      <PhoneBookForm onContactSubmit={contactSubmit} />
      <PhoneBookList data={this.props.data} />
      {/* <PhoneBookForm onContactSubmit={contactSubmit} />
      <InformationTable data={data} />
      <PhoneBookForm
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
