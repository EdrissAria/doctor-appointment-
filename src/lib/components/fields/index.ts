import FormInput from './FormInput.svelte';
import FormTextarea from './FormTextarea.svelte';
import FormFileUploader from './FormFileUploader.svelte';
import FormSelect from './FormSelect.svelte';
import FormRichText from './FormRichText.svelte';
import FormPassword from './FormPassword.svelte';

import TableText from './TableText.svelte';
import TableBadge from './TableBadge.svelte';
import TableImg from './TableImg.svelte';
import TableIcon from './TableIcon.svelte';
import TableRichText from './TableRichText.svelte';
import TableHidden from './TableHidden.svelte';
import TableDate from './TableDate.svelte';

export default {
	input: {
		form: FormInput,
		table: TableText
	},
	date: {
		form: FormInput,
		table: TableDate
	},
	password: {
		form: FormPassword,
		table: TableHidden
	},
	file: {
		form: FormFileUploader,
		table: TableImg
	},
	image: {
		form: FormFileUploader,
		table: TableImg
	},
	textarea: {
		form: FormTextarea,
		table: TableText
	},
	select: {
		form: FormSelect,
		table: TableBadge
	},
	icon: {
		form: FormTextarea,
		table: TableIcon
	},
	richtext: {
		form: FormRichText,
		table: TableRichText,
	}
} as any;
