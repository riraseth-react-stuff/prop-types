import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info}</h4>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string
};

Person.defaultProps = {
  img: "https://via.placeholder.com/150",
  name: "jane doe",
  age: 50,
  info: "default info about the person"
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        // name: "rachel",
        age: 34
      },
      {
        id: 2,
        // img: "https://randomuser.me/api/portraits/women/24.jpg",
        name: "matilda",
        age: 23
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "jenny",
        age: 27,
        info: "some info"
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
            info={person.info}
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
