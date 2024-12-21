export default {
    name: 'services',
    plural: 'Services',
    singular: 'Service',
	fields: {
        title: {
            label: 'Title',
            type: 'input',
            min: 3,
            max: 50,
            required: true,
        },
        icon: {
			label: 'Icon (svg code)',
			type: 'icon',
			min: 3,
			max: 5000
		},
		description: {
			label: 'Description',
			type: 'textarea',
            min: 10,
            max: 500,
            required: true
		},
	},
	form: {
		fields: ['title', 'icon', 'description'],
	},
	table: {
		columns: ['title', 'icon', 'description']
	}
};