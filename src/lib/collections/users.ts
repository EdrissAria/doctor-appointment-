
export default {
    name: 'users',
    plural: 'Users',
    singular: 'User',
    hooks: {
        async beforeAction({mode, value}) {
            if(mode === 'insert')
            {
                const module = await import('bcrypt')
                value.password = module.hashSync(value.password, 10)
            }
            return value;
        },
        async afterLoad({mode, value}) {
            if(mode === 'list') {

                return value.map(x => {
                    delete x['password']
                    return x;
                })
            }
            return value;
        }
    },
	fields: {
        name: {
            label: 'Name',
            type: 'input',
            min: 3,
            max: 20,
            required: true,
        },
        username: {
            label: 'Username',
            type: 'input',
            min: 3,
            max: 10,
            required: true,
        },
        password: {
            label: 'Password',
            type: 'password',
            required: true,
            hidden: ({mode}) => mode != 'insert'
        },
		status: {
			label: 'Status',
			type: 'select',
			items: [
				{ text: 'Active', value: 'active' },
				{ text: 'Disabled', value: 'disabled' },
				{ text: 'Archived', value: 'archived' }
			],
			required: true
		},
	},
	form: {
		fields: [
            ['name', 'username'],
            ['status'],
            ['password']
        ],
	},
	table: {
		columns: ['name', 'username', 'status']
	}
};