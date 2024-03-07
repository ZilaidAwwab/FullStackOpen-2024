import { useState } from "react";

const Title = (props) => {
  return <h1>{props.text}</h1>;
};

const Anecdotes = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.index]}</p>
      <p>has {props.votes[props.index]} votes</p>
    </div>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const MostVotes = (props) => {
  return (
    <>
      <p>{props.anecdotes[props.index]}</p>
      <p>has {props.votes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const points = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  function generateRandom() {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  }

  function maintainVotes() {
    const newPoints = [...votes];
    newPoints[selected]++;
    setVotes(newPoints);
  }

  const maxValue = Math.max(...votes);
  const indexOfMax = votes.indexOf(maxValue);

  return (
    <div>
      <Title text="Anectode of the Day" />
      <Anecdotes anecdotes={anecdotes} votes={votes} index={selected} />
      <Button handleClick={maintainVotes} text="Vote" />
      <Button handleClick={generateRandom} text="Next Anectode" />
      <Title text="Anectode with most votes" />
      <MostVotes anecdotes={anecdotes} index={indexOfMax} votes={maxValue} />
    </div>
  );
};

export default App;
