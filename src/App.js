import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ img, name, age }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "rachel",
        age: 34
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/women/24.jpg",
        name: "matilda",
        age: 23
      }
    ]
  };

  render() {
    return (
      <section>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
          ></Person>
        ))}
      </section>
    );
  }
}

function App() {
  return (
    <section>
      <PersonList></PersonList>
    </section>
  );
}

export default App;
