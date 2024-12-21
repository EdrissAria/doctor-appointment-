import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import { db } from '.';

export async function tableLoad(event: ServerLoadEvent, collection: any) {
	// TODO: Think about parameters and return type
	let query = db(collection.name).query()

	
	if(collection.hooks?.beforeLoad)
	{
		query = await collection.hooks?.beforeLoad?.({query, mode: 'list'});
	}

	let items = await query.all();

	if (collection.hooks?.afterLoad) {
		items = await collection.hooks.afterLoad({mode: 'list', value: items});
	}

	return { items };
}

export async function collectionDefaultAction(event, collection) {
	const form = await event.request.formData();

	let mode = form.get('mode')?.toString() ?? 'unknown';
	let body = JSON.parse(form.get('value')?.toString() ?? '{}');

	async function validate() {
		let errors: any = {};

		for (let fieldName in collection.fields) {
			const field = collection.fields[fieldName];

			if (field.required && !body[fieldName]) {
				errors[fieldName] = `${field.label} is required`;
				continue;
			}

			if (field.min && body[fieldName] && body[fieldName].length < field.min) {
				errors[fieldName] = `${field.label} must be at least ${field.min} characters`;
				continue;
			}

			if (field.max && body[fieldName] && body[fieldName].length > field.max) {
				errors[fieldName] = `${field.label} must be at most ${field.max} characters`;
				continue;
			}

			if (field.validate) {
				let res = await field.validate();
				if (typeof res === 'string') {
					errors[fieldName] = res;
				}
			}
		}

		if (Object.keys(errors).length > 0) {
			return { errors, body };
		}
	}

	if (collection.hooks?.beforeAction) {
		body = await collection.hooks.beforeAction({ mode, value: body });
	}

	let result: any = null;

	switch (mode) {
		case 'remove':
			result = await db(collection.name).remove(body.id);
			break;
		case 'insert':
			{
				let validateResult = await validate();
				if (validateResult) return validateResult;

				result = await db(collection.name).insert(body);
			}

			break;

		case 'update':
			{
				let validateResult = await validate();
				if (validateResult) return validateResult;

				result = await db(collection.name).update(body);
			}
			break;
	}

	await collection.hooks?.afterAction?.({ mode: 'insert', value: body });

	return redirect(303, '/admin/' + collection.name);
}

export async function formLoad(event, collection, mode) {
	let value: any = {};

	if (mode === 'update') {
		const id = event.url.searchParams.get('id');
		value = await db(collection.name).query().filter('id', '=', id).first();
	}

	if (collection.hooks?.afterLoad) {
		value = await collection.hooks.afterLoad({ mode, value });
	}

	return {
		mode,
		value
	};
}
