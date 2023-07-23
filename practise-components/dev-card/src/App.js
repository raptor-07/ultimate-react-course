import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/raptor-07"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Hurmaan Ahmed</h1>
      <p>
        {" "}
        I'm an AI engineering undergrad, and a full stack developer tinkering
        with BlockChain 👨‍💻 I’m currently working on my System Design,
        Architecture and Development Skills. 👷 I love building and managing
        Products!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Node " emoji="💪" color="green" />
      <Skill skill="MongoDb" emoji="💪" color="yellow" />
      <Skill skill="Solidity" emoji="💪" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
