import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList';
import StudentContext from './StudentContext';
import React,{useState} from 'react'

function App() {
  
  const [students, setStudents] = useState([
    {
      student_number: "1",
      year:2020,
      gender:'male',
      graduated:false
    },
    {
      student_number: "2",
      year:2020,
      gender:'female',
      graduated:false
    },
    {
      student_number: "3",
      year:2020,
      gender:'male',
      graduated:false
    },
    {
      student_number: "4",
      year:2020,
      gender:'female',
      graduated:false
    },
  ])
  // this context object goes into ProductContext
  const context = {
    // function to get all the products
    getStudents: () => {
      return students;
    }

  //   addProduct: (productName, cost) => {
  //     const cloned = [...products, {
  //       id:  Math.floor((Math.random() * 100000) + 10000),
  //       product_name: productName,
  //       cost: cost
  //     }]
  //     setProducts(cloned);
  //   }
  }

  return (
    <React.Fragment>
      {/* set the value of ProductContext to be the context
      object that we have just created */}
      <StudentContext.Provider value={context}>
        <h1>Student List</h1>
        <StudentList/>
      </StudentContext.Provider>

    </React.Fragment>

  );
}

export default App;
