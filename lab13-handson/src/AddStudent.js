import React, { useState, useContext } from 'react';
import StudentContext from './StudentContext';

export default function AddStudent() {
	const [formField, setFormField] = useState({
		student_number:Math.floor(Math.random() * 10000),
		year: '',
		gender: 'male',
		graduated: 'false'
	});

	const updateFormFields = (event) => {
		setFormField({
			...formField,
			[event.target.name]: event.target.value
		});
	};

	const Context = useContext(StudentContext);

	return (
		<React.Fragment>
			<div>
				<label>Year</label>
				<input
					type='text'
					name='year'
					value={formField.year}
					onChange={updateFormFields}
				/>
			</div>
			<div>
				<label>Gender</label>
				<input
					type='radio'
					name='gender'
					value='male'
					checked={formField.gender === 'male'}
					onChange={updateFormFields}
				/>
				<label>Male</label>

				<input
					type='radio'
					name='gender'
					value='female'
					checked={formField.gender === 'female'}
					onChange={updateFormFields}
				/>
				<label>Female</label>
			</div>
				<label>Graduated</label>

				<input
					type='radio'
					name='graduated'
					value='true'
					checked={formField.graduated === 'true'}
					onChange={updateFormFields}
				/>
				<label>Yes</label>

				<input
					type='radio'
					name='graduated'
					value='false'
					checked={formField.graduated === 'false'}
					onChange={updateFormFields}
				/>
				<label>No</label>

				<button
					onClick={() => {
						Context.AddToList(
							formField.year,
							formField.gender,
							formField.graduated 
						);
					}}
				>
					Add
				</button>
			{/* </div> */}
		</React.Fragment>
	);
}