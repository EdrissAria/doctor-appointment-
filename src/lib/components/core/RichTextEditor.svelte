<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { BubbleMenu } from '@tiptap/extension-bubble-menu';
	import StarterKit from '@tiptap/starter-kit';
	import TextAlign from '@tiptap/extension-text-align';
	import { onMount } from 'svelte';
	import RichTextEditorButton from './RichTextEditorButton.svelte';
	import { DropdownItem, DropdownMenu } from 'owls-lib';
	import Icon from './Icon.svelte';
	import Color from '@tiptap/extension-color';
	import TextStyle from '@tiptap/extension-text-style';
	import Link from '@tiptap/extension-link';
	import { modalStore } from '$src/lib/stores/modal';
	import InputModal from './InputModal.svelte';
	import Image from '@tiptap/extension-image';
	import ImageModal from './ImageModal.svelte';
	import Highlight from '@tiptap/extension-highlight';
	import Underline from '@tiptap/extension-underline';

	let { value = $bindable(), inline = false } = $props();

	let element: any = $state(null);

	let colorDropdownOpen = $state(false);

	let editor: any = $state(null);
	let menuEl: any = $state(null);

	let actions: any = $state({});

	function toggleTextColor(color: string, system = false) {
		if (system) {
			editor.chain().focus().setColor(`hsl(var(--${color}))`).run();
		} else {
			editor.chain().focus().setColor(color).run();
		}

		colorDropdownOpen = false;
	}

	function toggleTextSize(size) {
		editor.chain().focus().setSize(size).run();
	}

	function toggleLink() {
		modalStore.open(InputModal, {
			placeholder: 'Enter link...',
			title: 'Link',
			onsubmit: (value) => {
				editor.chain().focus().toggleLink({ href: value }).run();
			}
		});
	}

	function setImage() {
		modalStore.open(ImageModal, {
			placeholder: 'Upload image...',
			title: 'Upload Image',
			onsubmit: (value) => {
				editor
					.chain()
					.focus()
					.setImage({ src: '/files/' + value })
					.run();
			}
		});
	}

	function toggle(action) {
		if (action === 'bold') editor.chain().focus().toggleBold().run();
		else if (action === 'italic') editor.chain().focus().toggleItalic().run();
		else if (action === 'underline') editor.chain().focus().toggleUnderline().run();
		else if (action === 'strike') editor.chain().focus().toggleStrike().run();
		else if (action === 'paragraph') editor.chain().focus().setParagraph().run();
		else if (action === 'heading1') editor.chain().focus().toggleHeading({ level: 1 }).run();
		else if (action === 'heading2') editor.chain().focus().toggleHeading({ level: 2 }).run();
		else if (action === 'heading3') editor.chain().focus().toggleHeading({ level: 3 }).run();
		else if (action === 'heading4') editor.chain().focus().toggleHeading({ level: 4 }).run();
		else if (action === 'heading5') editor.chain().focus().toggleHeading({ level: 5 }).run();
		else if (action === 'heading6') editor.chain().focus().toggleHeading({ level: 6 }).run();
		else if (action === 'alignLeft') editor.chain().focus().setTextAlign('left').run();
		else if (action === 'alignCenter') editor.chain().focus().setTextAlign('center').run();
		else if (action === 'alignRight') editor.chain().focus().setTextAlign('right').run();
		else if (action === 'highlight') {
			editor
				.chain()
				.focus()
				.toggleHighlight({
					color: editor.isActive('highlight') ? undefined : '#ffc078' // if is already highlighted，unset the highlight color
				})
				.run();
		} else if (action === 'code') editor.chain().focus().toggleCode().run();
		else if (action === 'unsetLink') editor.chain().focus().unsetLink().run();
	}

	function onTransaction(ev) {
		console.log('onTransaction', ev)
		actions.bold = editor.isActive('bold');
		actions.italic = editor.isActive('italic');
		actions.underline = editor.isActive('underline');
		actions.strike = editor.isActive('strike');
		actions.paragraph = editor.isActive('paragraph');
		actions.alignLeft = editor.isActive({ textAlign: 'left' });
		actions.alignCenter = editor.isActive({ textAlign: 'center' });
		actions.alignRight = editor.isActive({ textAlign: 'right' });
		actions.heading1 = editor.isActive('heading', { level: 1 });
		actions.heading2 = editor.isActive('heading', { level: 2 });
		actions.heading3 = editor.isActive('heading', { level: 3 });
		actions.heading4 = editor.isActive('heading', { level: 4 });
		actions.heading5 = editor.isActive('heading', { level: 5 });
		actions.heading6 = editor.isActive('heading', { level: 6 });
		actions.highlight = editor.isActive('highlight');
		actions.code = editor.isActive('code');
		actions.link = editor.isActive('link');
	}

	onMount(() => {
		editor = new Editor({
			element,
			content: inline ? undefined : value,
			extensions: [
				StarterKit,
				TextAlign.configure({
					types: ['heading', 'paragraph']
				}),
				BubbleMenu.configure({
					element: menuEl,
					tippyOptions: {
						maxWidth: 800,
						// updateDuration: 100
					}
				}),
				TextStyle,
				Color.configure({
					types: ['textStyle']
				}),
				Highlight,
				Underline,
				// Subscript,
				// Superscript,

				Link.configure({
					openOnClick: false,
					autolink: true,
					defaultProtocol: 'https'
				}),
				Image
			],
			onUpdate({ editor }) {
				value = editor.getHTML();
			},
			editorProps: {
				attributes: {
					class: 'html'
				}
			},
			onTransaction
		});

		return () => {
			if (editor) {
				editor.destroy();
				editor = null;
			}
		};
	});

	$effect(() => {
		if (editor && value !== editor.getHTML()) {
			editor.commands.setContent(value);
		}
	});
</script>

{#if inline}
	<div  class="text-start tracking-normal leading-normal text-base">
		<div class:hidden={!editor} class="bg-base-200 p-2 rounded-md border border-base-300 min-w-[300px] w-full max-w-[800px]" bind:this={menuEl}>
			{@render toolbar()}
		</div>
		<div bind:this={element}></div>
		{#if !editor}
			<div class="html">
				{@html value}
			</div>
		{/if}
	</div>
{:else}
	<div
		class="w-full flex flex-col min-h-96 max-h-[80vh] rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
	>
		<div class="border-b px-3 py-2 dark:border-gray-600">
			<div class="flex flex-wrap items-center">
				{@render toolbar()}
			</div>
		</div>
		<div class="rounded-b-lg bg-white h-full overflow-auto px-4 py-2 dark:bg-gray-800">
			<label for="wysiwyg-example" class="sr-only">Publish post</label>
			<div
				bind:this={element}
				class="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
			></div>
		</div>
	</div>
{/if}
{#snippet toolbar()}
	<div class="flex flex-wrap items-center gap-1 rtl:space-x-reverse">
		<button
			data-active={actions.heading1 ||
				actions.heading2 ||
				actions.heading3 ||
				actions.heading4 ||
				actions.heading5 ||
				actions.heading6}
			class="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 data-[active=true]:bg-gray-200 dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-600 data-[active=true]:dark:bg-gray-600"
			type="button"
		>
			Heading
			<Icon name="flowbiteChevronDown" class="-me-0.5 ms-1.5 h-3.5 w-3.5 !text-base" />
		</button>

		<DropdownMenu>
			<DropdownItem
				onclick={() => toggle('paragraph')}
				class={actions.paragraph ? 'bg-gray-100' : ''}>Paragraph</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading1')} class={actions.heading1 ? 'bg-gray-100' : ''}
				>Heading 1</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading2')} class={actions.heading2 ? 'bg-gray-100' : ''}
				>Heading 2</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading3')} class={actions.heading3 ? 'bg-gray-100' : ''}
				>Heading 3</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading4')} class={actions.heading4 ? 'bg-gray-100' : ''}
				>Heading 4</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading5')} class={actions.heading5 ? 'bg-gray-100' : ''}
				>Heading 5</DropdownItem
			>
			<DropdownItem onclick={() => toggle('heading6')} class={actions.heading6 ? 'bg-gray-100' : ''}
				>Heading 6</DropdownItem
			>
		</DropdownMenu>
		<div class="ps-1.5">
			<span class="block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
		</div>
		<RichTextEditorButton
			icon="flowbiteBold"
			text="Bold"
			onclick={() => toggle('bold')}
			active={actions.bold}
		/>
		<RichTextEditorButton
			icon="flowbiteItalic"
			text="Italic"
			onclick={() => toggle('italic')}
			active={actions.italic}
		/>
		<RichTextEditorButton
			icon="flowbiteUnderline"
			text="Underline"
			onclick={() => toggle('underline')}
			active={actions.underline}
		/>
		<RichTextEditorButton
			icon="flowbiteStrike"
			text="Strike"
			onclick={() => toggle('strike')}
			active={actions.strike}
		/>
		<div class="px-0.5">
			<span class="block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
		</div>
		<RichTextEditorButton
			icon="flowbiteAlignLeft"
			text="Align Left"
			onclick={() => toggle('alignLeft')}
			active={actions.alignLeft}
		/>
		<RichTextEditorButton
			icon="flowbiteAlignCenter"
			text="Align Center"
			onclick={() => toggle('alignCenter')}
			active={actions.alignCenter}
		/>
		<RichTextEditorButton
			icon="flowbiteAlignRight"
			text="Align Right"
			onclick={() => toggle('alignRight')}
			active={actions.alignRight}
		/>
		<div class="px-0.5">
			<span class="block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
		</div>

		<RichTextEditorButton
			icon="flowbiteHighlight"
			text="Highlight"
			onclick={() => toggle('highlight')}
			active={actions.highlight}
		/>
		<RichTextEditorButton
			icon="flowbiteCode"
			text="Code"
			onclick={() => toggle('code')}
			active={actions.code}
		/>

		<RichTextEditorButton
			icon="flowbiteLink"
			text="Link"
			onclick={() => toggleLink()}
			active={actions.link}
		/>
		<RichTextEditorButton
			icon="flowbiteRemoveLink"
			text="Remove Link"
			onclick={() => toggle('unsetLink')}
			active={actions.unsetLink}
		/>
		<RichTextEditorButton
			icon="flowbiteAddImage"
			text="Add Image"
			onclick={() => setImage()}
			active={actions.image}
		/>

		<RichTextEditorButton icon="flowbiteTextSize" />
		<DropdownMenu>
			<DropdownItem
				onclick={() => toggleTextSize(16)}
				class={actions.textSize == 16 ? 'bg-gray-100' : ''}>16px (Default)</DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextSize(12)}
				class={actions.textSize == 12 ? 'bg-gray-100' : ''}>12px (Tiny)</DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextSize(14)}
				class={actions.textSize == 14 ? 'bg-gray-100' : ''}>14px (Small)</DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextSize(18)}
				class={actions.textSize == 18 ? 'bg-gray-100' : ''}>18px (Lead)</DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextSize(24)}
				class={actions.textSize == 24 ? 'bg-gray-100' : ''}>24px (Large)</DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextSize(36)}
				class={actions.textSize == 36 ? 'bg-gray-100' : ''}>36px (Huge)</DropdownItem
			>
		</DropdownMenu>

		<RichTextEditorButton icon="flowbiteTextColor" />

		<DropdownMenu bind:open={colorDropdownOpen} class="max-h-96 overflow-auto">
			<DropdownItem
				onclick={() => toggleTextColor('base-100', true)}
				class="{actions.color === 'base-100'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-base-100"></span><span>Base 100</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('base-200', true)}
				class="{actions.color === 'base-200'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-base-200"></span><span>Base 200</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('base-300', true)}
				class="{actions.color === 'base-300'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-base-300"></span><span>Base 300</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('content', true)}
				class="{actions.color === 'content'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-content"></span><span>Content</span
				></DropdownItem
			>

			<DropdownItem
				onclick={() => toggleTextColor('muted', true)}
				class="{actions.color === 'muted'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-muted"></span><span>Muted</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('primary-base', true)}
				class="{actions.color === 'primary-base'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-primary-base"></span><span
					>Primary Base</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('primary', true)}
				class="{actions.color === '"primary'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-primary"></span><span>Primary</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('primary-hover', true)}
				class="{actions.color === 'primary-hover'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-primary-hover"></span><span
					>Primary Hover</span
				></DropdownItem
			>
			<div class="my-3 border border-gray-100"></div>
			<DropdownItem
				onclick={() => toggleTextColor('#1A56DB')}
				class="{actions.color === '#1A56DB'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#1A56DB]"></span><span>Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#0E9F6E')}
				class="{actions.color === '#0E9F6E'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#0E9F6E]"></span><span>Green</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#FACA15')}
				class="{actions.color === '#FACA15'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#FACA15]"></span><span>Yellow</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F05252')}
				class="{actions.color === '#F05252'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F05252]"></span><span>Red</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#FF8A4C')}
				class="{actions.color === '#FF8A4C'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#FF8A4C]"></span><span>Orange</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#0694A2')}
				class="{actions.color === '#0694A2'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#0694A2]"></span><span>Teal</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#B4C6FC')}
				class="{actions.color === '#B4C6FC'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#B4C6FC]"></span><span
					>Light indigo</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#8DA2FB')}
				class="{actions.color === '#8DA2FB'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#8DA2FB]"></span><span>Indigo</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#5145CD')}
				class="{actions.color === '#5145CD'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#5145CD]"></span><span>Purple</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#771D1D')}
				class="{actions.color === '#771D1D'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#771D1D]"></span><span>Brown</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#FCD9BD')}
				class="{actions.color === '#FCD9BD'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#FCD9BD]"></span><span
					>Light orange</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#99154B')}
				class="{actions.color === '#99154B'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#99154B]"></span><span>Bordo</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#7E3AF2')}
				class="{actions.color === '#7E3AF2'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#7E3AF2]"></span><span
					>Dark Purple</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#CABFFD')}
				class="{actions.color === '#CABFFD'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#CABFFD]"></span><span>Light</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#D61F69')}
				class="{actions.color === '#D61F69'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#D61F69]"></span><span
					>Dark Pink</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F8B4D9')}
				class="{actions.color === '#F8B4D9'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F8B4D9]"></span><span>Pink</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F6C196')}
				class="{actions.color === '#F6C196'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F6C196]"></span><span>Cream</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#A4CAFE')}
				class="{actions.color === '#A4CAFE'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#A4CAFE]"></span><span
					>Light Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#5145CD')}
				class="{actions.color === '#5145CD'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#5145CD]"></span><span
					>Dark Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#B43403')}
				class="{actions.color === '#B43403'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#B43403]"></span><span
					>Orange Brown</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#FCE96A')}
				class="{actions.color === '#FCE96A'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#FCE96A]"></span><span
					>Light Yellow</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#1E429F')}
				class="{actions.color === '#1E429F'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#1E429F]"></span><span
					>Navy Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#768FFD')}
				class="{actions.color === '#768FFD'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#768FFD]"></span><span
					>Light Purple</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#BCF0DA')}
				class="{actions.color === '#BCF0DA'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#BCF0DA]"></span><span
					>Light Green</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#EBF5FF')}
				class="{actions.color === '#EBF5FF'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#EBF5FF]"></span><span>Sky Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#16BDCA')}
				class="{actions.color === '#16BDCA'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#16BDCA]"></span><span>Cyan</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#E74694')}
				class="{actions.color === '#E74694'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#E74694]"></span><span>Pink</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#83B0ED')}
				class="{actions.color === '#83B0ED'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#83B0ED]"></span><span
					>Darker Sky Blue</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#03543F')}
				class="{actions.color === '#03543F'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#03543F]"></span><span
					>Forest Green</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#111928')}
				class="{actions.color === '#111928'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#111928]"></span><span>Black</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#4B5563')}
				class="{actions.color === '#4B5563'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#4B5563]"></span><span>Stone</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#6B7280')}
				class="{actions.color === '#6B7280'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#6B7280]"></span><span>Gray</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#D1D5DB')}
				class="{actions.color === '#D1D5DB'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#D1D5DB]"></span><span
					>Light Gray</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F3F4F6')}
				class="{actions.color === '#F3F4F6'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F3F4F6]"></span><span
					>Cloud Gray</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F3F4F6')}
				class="{actions.color === '#F3F4F6'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F3F4F6]"></span><span
					>Cloud Gray</span
				></DropdownItem
			>
			<DropdownItem
				onclick={() => toggleTextColor('#F9FAFB')}
				class="{actions.color === '#F9FAFB'} flex items-center"
				><span class="me-2 inline-block h-4 w-4 rounded-md bg-[#F9FAFB]"></span><span
					>Heaven Gray</span
				>
			</DropdownItem>
		</DropdownMenu>
	</div>
{/snippet}

<!--
			<button id="addImageButton" type="button" data-tooltip-target="tooltip-image" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
					<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
					<path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"/>
					</svg>
					<span class="sr-only">Add image</span>
				</button>
				<div id="tooltip-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
					Add image
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
				<button id="addVideoButton" type="button" data-tooltip-target="tooltip-video" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
					
					<span class="sr-only">Add video</span>
				</button>
				<div id="tooltip-video" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
					Add video
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
				<button id="toggleListButton" type="button" data-tooltip-target="tooltip-list" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
					
					<span class="sr-only">Toggle list</span>
				</button>
				<div id="tooltip-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
					Toggle list
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
			<button id="toggleOrderedListButton" type="button" data-tooltip-target="tooltip-ordered-list" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/>
				</svg>
				<span class="sr-only">Toggle ordered list</span>
			</button>
			<div id="tooltip-ordered-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
				Toggle ordered list
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
			<button id="toggleBlockquoteButton" type="button" data-tooltip-target="tooltip-blockquote-list" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
				</svg>
				<span class="sr-only">Toggle blockquote</span>
			</button>
			<div id="tooltip-blockquote-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
				Toggle blockquote
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
			<button id="toggleHRButton" type="button" data-tooltip-target="tooltip-hr-list" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				
				<span class="sr-only">Toggle Horizontal Rule</span>
			</button>
			<div id="tooltip-hr-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
				Toggle Horizontal Rule
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div> -->
<!-- 

	<button id="toggleTextSizeButton" data-dropdown-toggle="textSizeDropdown" type="button" data-tooltip-target="tooltip-text-size" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
		
		<span class="sr-only">Text size</span>
	</button>
	<div id="tooltip-text-size" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
		Text size
		<div class="tooltip-arrow" data-popper-arrow></div>
	</div>
	<div id="textSizeDropdown" class="z-10 hidden w-72 rounded bg-white p-2 shadow dark:bg-gray-700">
		<ul class="space-y-1 text-sm font-medium" aria-labelledby="toggleTextSizeButton">
			<li>
				<button data-text-size="16px" type="button" class="flex justify-between items-center w-full text-base rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">16px (Default) 
				</button>
			</li>
			<li>
				<button data-text-size="12px" type="button" class="flex justify-between items-center w-full text-xs rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">12px (Tiny)
				</button>
			</li>
			<li>
				<button data-text-size="14px" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">14px (Small)
				</button>
			</li>
			<li>
				<button data-text-size="18px" type="button" class="flex justify-between items-center w-full text-lg rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">18px (Lead)
				</button>
			</li>
			<li>
				<button data-text-size="24px" type="button" class="flex justify-between items-center w-full text-2xl rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">24px (Large)
				</button>
			</li>
			<li>
				<button data-text-size="36px" type="button" class="flex justify-between items-center w-full text-4xl rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">36px (Huge)
				</button>
			</li>
		</ul>
	</div>
	<button id="toggleTextColorButton" data-dropdown-toggle="textColorDropdown" type="button" data-tooltip-target="tooltip-text-color" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
		<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
			<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z"/>
		</svg>
		<span class="sr-only">Text color</span>
	</button>
	<div id="tooltip-text-color" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
		Text color
		<div class="tooltip-arrow" data-popper-arrow></div>
	</div>
	<div id="textColorDropdown" class="z-10 hidden w-48 rounded bg-white p-2 shadow dark:bg-gray-700">
		<div class="grid grid-cols-6 gap-2 group mb-3 items-center p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
			<input type="color" id="color" value="#e66465" class="border-gray-200 border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 rounded-md p-px px-1 hover:bg-gray-50 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 w-full h-8 col-span-3" />
			<label for="color" class="text-gray-500 dark:text-gray-400 text-sm font-medium col-span-3 group-hover:text-gray-900 dark:group-hover:text-white">Pick a color</label>
		</div>
		<div class="grid grid-cols-6 gap-1 mb-3">
		</div>
		<button type="button" id="resetrounded-md -color" class="py-1.5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white w-full dark:hover:bg-gray-600">Reset color</button>
	</div>
	<button id="toggleFontFamilyButton" data-dropdown-toggle="fontFamilyDropdown" type="button" data-tooltip-target="tooltip-font-family" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
		
		<span class="sr-only">Font family</span>
	</button>
	<div id="tooltip-font-family" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
		Font Family
		<div class="tooltip-arrow" data-popper-arrow></div>
	</div>
	<div id="fontFamilyDropdown" class="z-10 hidden w-48 rounded bg-white p-2 shadow dark:bg-gray-700">
		<ul class="space-y-1 text-sm font-medium" aria-labelledby="toggleFontFamilyButton">
			<li>
				<button data-font-family="Inter, ui-sans-serif" type="button" class="flex justify-between items-center w-full text-sm font-sans rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white">Default
				</button>
			</li>
			<li>
				<button data-font-family="Arial, sans-serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: Arial, sans-serif;">Arial
				</button>
			</li>
			<li>
				<button data-font-family="'Courier New', monospace" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: 'Courier New', monospace;">Courier New
				</button>
			</li>
			<li>
				<button data-font-family="Georgia, serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: Georgia, serif;">Georgia
				</button>
			</li>
			<li>
				<button data-font-family="'Lucida Sans Unicode', sans-serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: 'Lucida Sans Unicode', sans-serif;">Lucida Sans Unicode
				</button>
			</li>
			<li>
				<button data-font-family="Tahoma, sans-serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: Tahoma, sans-serif;">Tahoma
				</button>
			</li>
			<li>
				<button data-font-family="'Times New Roman', serif;" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: 'Times New Roman', serif;">Times New Roman
				</button>
			</li>
			<li>
				<button data-font-family="'Trebuchet MS', sans-serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: 'Trebuchet MS', sans-serif;">Trebuchet MS
				</button>
			</li>
			<li>
				<button data-font-family="Verdana, sans-serif" type="button" class="flex justify-between items-center w-full text-sm rounded px-3 py-2 hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-600 dark:text-white" style="font-family: Verdana, sans-serif;">Verdana
				</button>
			</li>
		</ul>
	</div>
-->
