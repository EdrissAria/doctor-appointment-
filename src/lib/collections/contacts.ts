export default {
	name: 'contacts',
	plural: 'Contacts',
	singular: 'Contact',
	fields: {
		name: {
			label: 'Name',
			type: 'input',
			min: 3,
			max: 30,
			required: true
		},
		email: {
			label: 'Email',
			type: 'input',
			required: true
		},
		message: {
			label: 'Description',
			type: 'textarea',
			min: 3,
			max: 500,
			required: true
		}
	},
	form: {
		fields: ['name', 'email', 'message'],
	},
	table: {
		columns: ['name', 'email', 'message']
	}
};
