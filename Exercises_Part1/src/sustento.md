# Sustento aplicacion part 1
Primero elabore los componentes Header, Content y Total.
### Header
El Header due algo sumamente sencillo de definir ya que solo se necesita crear una propiedad y pasarla a la etiqueta que quiero q se muestre.
```
const Header = ({titulo}) => {
  return (
    <h1>{titulo}</h1>
  )
};
```
### Content
En cuanto al componente Content este tiene un componente previo debido a que se solicito que el conte solo cuente con el siguiente formato:
```
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
Para lograr esto se creo un componente adicional llamado Part y para solo aplicarle los valores requeridos. asi aligerando el componente Content.
### Part
```
const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
};
```
### Total
Luego de crear el componente Part implementamos sus propiedades con los valores deseados.
```
const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};
```
Creamos el componente Total, el cual se encargara de sumar todos los ejercicios. utilizamos el método reduce() de los arrays para iterar sobre cada elemento del arreglo parts. En cada iteración, sumamos el valor de exercises de la parte actual al acumulador total. 

```
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  
  return <p>Number of exercises {totalExercises}</p>;
};
```
### App
Por ultimo, estructuramos correctamente todos los componentes creados en el componente general App. al componente genera App se le hizo las siguientes modificaciones.

```
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
```