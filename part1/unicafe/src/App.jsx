import { useState } from "react";

export const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

export const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all) {
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine name="good" value={props.good} />
            <StatisticsLine name="neutral" value={props.neutral} />
            <StatisticsLine name="bad" value={props.bad} />
            <StatisticsLine name="all" value={props.all} />
            <StatisticsLine name="average" value={props.average} />
            <StatisticsLine name="positive" value={props.positive} />
          </tbody>
        </table>
      </>
    );
  }
  {
    return <p>No Feedback Given</p>;
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood((good) => good + 1);
  };

  const handleNeutral = () => {
    setNeutral((neutral) => neutral + 1);
  };

  const handleBad = () => {
    setBad((bad) => bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} name="good" />
      <Button handleClick={handleNeutral} name="neutral" />
      <Button handleClick={handleBad} name="bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
}

export default App;
