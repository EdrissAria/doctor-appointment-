import { collectionDefaultAction, tableLoad } from '$lib/server/collections';
import collections from '$collections';

import type { Actions, PageServerLoadEvent } from './$types';

export const actions: Actions = {
	default(event) {
		return collectionDefaultAction(event, collections[event.params.slug]);
	}
};

export const load = (event: PageServerLoadEvent) => {
	return tableLoad(event, collections[event.params.slug]);
};
