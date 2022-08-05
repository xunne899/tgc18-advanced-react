import React, {useContext} from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {
    const Context = useContext(StudentContext);
    return (
        <React.Fragment>
            <ul>
                {
                  Context.getStudents().map(p => {
                    return <li>Student_No:({p.student_number})Year:({p.year}) Gender:({p.gender}) Graduated:({p.graduated === 'true' ? "Yes":"No"}) 	<button
										onClick={() =>
											Context.deleteAStudent(
												p.student_number
											)
										}
									>
										Delete
									</button></li>
                  })
                }
            </ul>
        </React.Fragment>
    )
}