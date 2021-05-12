import React, { useState } from "react";

import "./what-we-do.styles.scss";

//App.js
const App = () => {
  const abouts = [
    { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", email: "jenny.han@notreal.com", age: 25 },
    { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", contact: "jason.long@notreal.com" },
    { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", contact: "peter.pan@neverland.com" },
    { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", contact: "amy@email.com", }
  ];

  return (
    <>
      {abouts.map(about => (
        <AboutCard
          avatar="https://picsum.photos/200/200"
          name={about.desc}
          contact={about.contact}
        />
      ))}
    </>
  );
};

const AboutCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="about-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>{props.name}</p>
        <button onClick={() => setShowAge(!showAge)}>
			Contact 
		</button>
        {showAge && <p>Contact: {props.contact}</p>}
      </div>
    </div>
  );
};


export default App;
