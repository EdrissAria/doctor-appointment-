<script lang="ts">
	import Icon from '$components/core/Icon.svelte';
	import type { TeamMember } from '$types';

	export let member: TeamMember;
</script>

<div class="flex flex-col">
	<div>
		<img
			src={`/files/${member.image}`}
			alt={member.name}
			class="mb-4 aspect-video w-full rounded-lg object-cover"
		/>
	</div>

	<div class="flex justify-between">
		<div class=" text-start">
			<h3 class="text-md font-semibold text-content">{member.name}</h3>
			<p class="my-2 text-sm text-muted">{member.role}</p>
		</div>

		<div class="flex gap-x-4 text-muted">
			<a
				href={member.telegram}
				target="_blank"
				class="transition-all hover:-translate-y-0.5 hover:scale-105 hover:text-content"
			>
				<Icon size="xl" name="telegram" />
			</a>
			<a
				href={member.whatsapp}
				target="_blank"
				class="transition-all hover:-translate-y-0.5 hover:scale-105 hover:text-content"
			>
				<Icon size="xl" name="whatsapp" />
			</a>
			<a
				href={member.linkedin}
				target="_blank"
				class="transition-all hover:-translate-y-0.5 hover:scale-105 hover:text-content"
			>
				<Icon size="xl" name="linkedIn" />
			</a>
			<a
				href={member.github}
				target="_blank"
				class="transition-all hover:-translate-y-0.5 hover:scale-105 hover:text-content"
			>
				<Icon size="xl" name="github" />
			</a>
		</div>
	</div>
</div>
