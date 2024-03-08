const Total = ({ course }) => {
  const sum = course.parts.reduce(
    (total, exercise) => total + exercise.exercises,
    0
  );

  return (
    <div>
      <h3>total {sum} of exercises</h3>
    </div>
  );
};

export default Total;
