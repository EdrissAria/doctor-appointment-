export default {
	name: 'patients',
	singular: 'Patient',
	plural: 'Patients',
	fields: {
		name: {
			label: 'Name',
			type: 'input',
			min: 3,
			max: 100,
			required: true
		},
		doctor: {
			label: 'Doctor',
			type: 'input',
			min: 3,
			max: 100,
			required: true
		},
		email: {
			label: 'Email',
			type: 'input',
			min: 3,
			max: 30
		},
		phone: {
			label: 'Phone',
			type: 'input',
			min: 3,
			max: 20
		},
		description: {
			label: 'Description',
			type: 'textarea',
			min: 10,
			max: 400,
			required: true
		},
		time: {
			label: 'Time slot',
			type: 'input',
			min: 3,
			max: 20
		},
		createdAt: {
			label: 'Created At',
			type: 'date'
		},
		updatedAt: {
			label: 'Last Updated At',
			type: 'date'
		}
	},
	form: {
        fields: [['name', 'doctor'], ['phone', 'email'], 'description','time']
	},
	table: {
		columns: ['name', 'doctor', 'phone', 'email', 'description','time']
	}
};
