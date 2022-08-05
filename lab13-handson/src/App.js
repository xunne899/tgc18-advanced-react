
import './App.css';
import StudentList from './StudentList';
import StudentContext from './StudentContext';
import React,{useState} from 'react'
import AddStudent from './AddStudent';
function App() {
  
  const [students, setStudents] = useState([
    {
      student_number: Math.floor(Math.random() * 10000),
      year:2020,
      gender:'male',
      graduated:'false'
    },
    {
      student_number: Math.floor(Math.random() * 10000),
      year:2020,
      gender:'female',
      graduated:'false'
    },
    {
      student_number:Math.floor(Math.random() * 10000),
      year:2020,
      gender:'male',
      graduated: 'true'
    },
    {
      student_number: Math.floor(Math.random() * 10000),
      year:2020,
      gender:'female',
      graduated:'true'
    },
  ])
  // this context object goes into ProductContext
  const context = {
    // function to get all the products
    getStudents: () => {
      return students;
    },
    deleteAStudent: (student_number) => {
      setStudents(students.filter((s) => s.student_number !== student_number));
    },
    AddToList: ( year,gender, graduated) => {
      const cloned = [...students, {
        // id:  Math.floor((Math.random() * 100000) + 10000),
        student_number:  Math.floor((Math.random() * 100000) + 10000),
        year,
        gender,
        graduated 
      }]
      setStudents(cloned);
    }
  }

  return (
    <React.Fragment>
      {/* set the value of ProductContext to be the context
      object that we have just created */}
      <StudentContext.Provider value={context}>
        <h1>Student List</h1>
        <StudentList/>
        <AddStudent/>
      </StudentContext.Provider>

    </React.Fragment>

  );
}

export default App;
