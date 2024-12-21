export default {
	name: 'doctors',
	singular: 'Doctor',
	plural: 'Doctors',
	fields: {
		name: {
			label: 'Name',
			type: 'input',
			min: 3,
			max: 100,
			required: true
		},
		specialty: {
			label: 'Specialty',
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
		experience: {
			label: 'Experience',
			type: 'input',
			min: 1,
			max: 20
		},
		qualifications: {
			label: 'Qualifications (Comma separated)',
			type: 'input'
		},
		availability: {
			label: 'Availability (Comma separated)',
			type: 'input'
		},
		image: {
			label: 'Image',
			type: 'image',
			min: 3,
			max: 200
		},
		description: {
			label: 'Description',
			type: 'textarea',
			min: 10,
			max: 400,
			required: true
		},
		awards: {
			label: 'Awards (Comma separated)',
			type: 'input'
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
        fields: [['name', 'specialty'], ['phone', 'email'], 'description', ['image','experience'],'awards', 'qualifications', 'availability']
	},
	table: {
		columns: ['name', 'specialty', 'phone', 'email', 'description', 'image', 'awards','experience', 'qualifications', 'availability', 'createdAt', 'updatedAt']
	}
};
