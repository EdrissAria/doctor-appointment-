<script lang="ts">
	import Grid from '$components/app/Grid.svelte';
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Icon from '$components/core/Icon.svelte';
	import Text from '$components/core/Text.svelte';

</script>

<Seo 
  title="Contact Us - Veltify Software Development Team" 
  metaDescription="Get in touch with the Veltify team for inquiries, collaborations, or project discussions. We're here to help bring your ideas to life!" 
/>

<PageSection container>
	<PageHeader titleKey="contact_title" descriptionKey="contact_description" />

	<Grid md="2">
		<form class="space-y-4 rounded-lg border border-base-300 bg-base-200 p-6" method="POST">
			<div>
				<label for="name" class="block text-start text-sm font-medium text-content">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					class="mt-1 w-full rounded-lg border border-base-300 bg-base-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
					placeholder="Your Name"
					required
				/>
			</div>

			<div>
				<label for="email" class="block text-start text-sm font-medium text-content">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="mt-1 w-full rounded-lg border border-base-300 bg-base-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
					placeholder="Your Email"
					required
				/>
			</div>

			<div>
				<label for="message" class="block text-start text-sm font-medium text-content">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					class="mt-1 h-32 w-full resize-none rounded-lg border border-base-300 bg-base-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
					placeholder="Your Message"
					required
				></textarea>
			</div>

			<button
				type="submit"
				class="w-full rounded-lg bg-primary py-3 font-semibold text-primary-content transition duration-200 hover:bg-primary-hover"
			>
				Send Message
			</button>
		</form>

		<div class="mx-6 flex flex-col items-center justify-center text-center">
			<h2 class="mb-6 text-2xl font-semibold text-primary-base">
				<Text key="contact_follow_title" />
			</h2>
			<p class="mb-8 max-w-xs text-muted">
				<Text key="contact_follow_description" />
			</p>
			<div class="flex gap-4">
				<a
					href="https://facebook.com"
					target="_blank"
					aria-label="facebook link"
					class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-base text-lg text-primary-content transition hover:bg-primary-base/80"
				>
					<Icon class="!text-2xl" name="facebook" />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					aria-label="twitter link"
					class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-base text-lg text-primary-content transition hover:bg-primary-base/80"
				>
					<Icon class="!text-2xl" name="twitter" />
				</a>
				<a
					href="https://linkedIn.com"
					target="_blank"
					aria-label="linkedIn link"
					class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-base text-lg text-primary-content transition hover:bg-primary-base/80"
				>
					<Icon class="!text-2xl" name="linkedIn" />
				</a>
			</div>
		</div>
	</Grid>
</PageSection>
