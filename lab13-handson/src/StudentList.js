import React, {useContext} from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {
    const Context = useContext(StudentContext);
    return (
        <React.Fragment>
            <ul>
                {
                  Context.getStudents().map(p => {
                    return <li>{p.student_number} ({p.year}) ({p.gender})({p.graduated?"Yes":"No"})</li>
                  })
                }
            </ul>
        </React.Fragment>
    )
}