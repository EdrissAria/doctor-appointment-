<script lang="ts">
	import PageHeader from "$components/core/PageHeader.svelte";
	import DynamicForm from "$components/core/DynamicForm.svelte";

    let {data} = $props()

    let config = {
        backUrl: '/settings',
        fields: {
            title: {
                type: 'input',
                label: 'Title',
                min: 3,
                max: 20,
                required: true,
            },

            description: {
                type: 'textarea',
                label: 'Description',
                min: 3,
                max: 500,
                required: true,
            },

            content: {
                type: 'richtext',
                label: 'Content',
                min: 3,
                required: true,
            }
        },
        form: {
            fields: [
                'title',
                'description',
                'content'
            ]
        } 
    }

    let value = $state(data.value)
</script>

<PageHeader title="About us page (Sample)" backUrl="/admin/settings" backText="Back to settings" />

<DynamicForm {config} bind:value/>