/*COMPONENT HEADER*/

const Header = ({titulo}) => {
  return (
    <h1>{titulo}</h1>
  )
};

/*COMPONENT PART*/

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
};

/*COMPONENT CONTENT*/

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

/*COMPONENT TOTAL*/

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  
  return <p>Number of exercises {totalExercises}</p>;
};



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header titulo={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  );
}

export default App