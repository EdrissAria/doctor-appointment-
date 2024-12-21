export default {
	name: 'blogs',
	plural: 'Blogs',
	singular: 'Blog',
	fields: {
		title: {
			label: 'Title',
			type: 'input',
			min: 3,
			max: 100,
			required: true
		},
		slug: {
			label: 'Slug',
			type: 'input',
			min: 3,
			max: 100,
			required: true
		},
		date: {
			label: 'Date',
			type: 'input'
		},
		description: {
			label: 'Description',
			type: 'textarea',
			min: 3,
			max: 500,
			required: true
		},
		content: {
			label: 'Content',
			type: 'richtext',
			required: true
		},
		image: {
			label: 'Image',
			type: 'image'
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
		fields: [
			['title', 'slug'],
			'image',
			'description',
			'content'
		]
	},
	table: {
		columns: ['title', 'slug', 'image', 'createdAt', 'updatedAt']
	}
};
