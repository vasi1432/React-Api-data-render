import { useState } from "react";

import "./App.css";

function App() {
  const [user, setuser] = useState([]);
  const [favourate, setfavourate] = useState([]);

  const addToFav = (id) => {
    const fav = user.filter((item) => item.id == id);
    setfavourate(...favourate, fav);
    console.log(favourate);
  };
  const removeFromFav = (id) => {
    const removefav = favourate.filter((item) => item.id !== id);
    setfavourate(...favourate, removefav);
  };

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setuser(data);
      });
  };
  fetchdata();
  return (
    <div className="parent">
      <div>
        {user.map((item) => {
          return (
            <div key={item.id} className="child">
              <button onClick={() => addToFav(item.id)}>fav</button>
              <p>Name : {item.name}</p>
              <p>username : {item.username}</p>
              <p>email : {item.email}</p>
              <p>street : {item.address.street}</p>
              <p>city : {item.address.city}</p>
              <p>zipcode : {item.address.zipcode}</p>
              <p>phone : {item.phone}</p>
              <p>website : {item.website}</p>
              <p>company name : {item.company.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        {favourate.map((item) => {
          return (
            <div key={item.id} className="child">
              <button onClick={() => removeFromFav(item.id)}>Remove</button>
              <p>Name : {item.name}</p>
              <p>username : {item.username}</p>
              <p>email : {item.email}</p>
              {/* <p>street: {item.address.street}</p>
              <p>city: {item.address.city}</p>
              <p>zipcode: {item.address.zipcode}</p> */}
              <p>phone : {item.phone}</p>
              <p>website : {item.website}</p>
              {/* <p>company name:{item.company.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
