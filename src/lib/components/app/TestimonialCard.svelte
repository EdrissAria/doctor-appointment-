<script lang="ts">
    import type { Testimonial } from '$types';
    type propTypes = {
        testimonial: Testimonial
    }
    
    const { testimonial } : propTypes = $props();
  </script>

<div class="bg-base-200 border border-base-300 rounded-lg p-lg flex flex-col gap-y-md">
    <div class="flex gap-md">
        <img src="/favicon.png" alt={testimonial.name} class="w-5xl h-5xl rounded-full" />
        <div class="text-start">
            <p class="font-semibold text-content">{testimonial.name}</p>
            <p class="text-sm text-muted">{testimonial.title}</p>
        </div>
    </div>
    <p class="text-muted text-start hyphens-auto">"{testimonial.text}"</p>
</div>