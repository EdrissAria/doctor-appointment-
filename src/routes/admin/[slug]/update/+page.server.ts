import { collectionDefaultAction, formLoad } from '$lib/server/collections';
import collections from '$collections';

import type { Actions, PageServerLoadEvent } from './$types';

export const actions: Actions = {
    default(event) {
        return collectionDefaultAction(event, collections[event.params.slug])
    }
};

export const load = (event: PageServerLoadEvent) => {
    return formLoad(event, collections[event.params.slug], 'update');
}