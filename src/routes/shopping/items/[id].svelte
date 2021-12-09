<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = ({ page }: LoadInput): LoadOutput => {
		const id = page.params.id;
		return {
			props: {
				id
			}
		};
	};
</script>

<script>
	// eslint-disable-next-line
	// @ts-nocheck

	import request from 'superagent';
	import { _ } from 'svelte-i18n';
	import Header from '$lib/_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import Menu from '$lib/_menu.svelte';
	import { onMount } from 'svelte';
	import TextBox from '$lib/_TextBox.svelte';
	import SaveResetBack from '$lib/_SaveResetBack.svelte';
	import DragDropList from 'svelte-dragdroplist';
	import ImageTools from '$lib/ImageTool';
	import SmallModal from '$lib/_SmallModal.svelte';

	export const id = '';

	let data = [];
	let showModal = false;

	let editor;

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image', 'video'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

	let quill;
	onMount(async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});
	});
	const save = () => {
		request.post('save').then(() => {
			showModal = true;
		});
	};
	const closeModal = () => {
		showModal = false;
	};

	const uploadImage = (e) => {
		ImageTools.resize(
			e.target.files[0],
			{
				width: 320, // maximum width
				height: 240 // maximum height
			},
			function (blob) {
				// didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
				// preview.src = window.URL.createObjectURL(blob);
				data = [
					...data,
					{
						id: data.length + 1,
						html: `<img src='${window.URL.createObjectURL(blob)}' alt='preview image'/>`,
						blob
					}
				];
				// you can also now upload this blob using an XHR.
			}
		);
	};
</script>

<Header />
<div class="lg:container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-3xl bold">
			{$_('addEditItem')}
		</h1>
		<LanguageSetting />
	</div>
	<hr />

	<div class="mt-2 flex">
		<div class="md:w-1/3">
			<Menu />
		</div>
		<div class="md:w-2/3 w-full">
			<SaveResetBack on:save={save} />
			<TextBox label={$_('itemName')} />
			<div class="my-2">
				<span class="">{$_('itemDescription')}</span>
			</div>
			<div class="editor-wrapper">
				<div bind:this={editor} />
			</div>
			<div class="my-2">
				{$_('itemImages')}
			</div>
			<div class="flex flex-row">
				<div class="w-1/2 p-2">
					<form action="">
						<div class="border-solid border-2 p-2">
							{$_('uploadImage')}
							<br />
							<input on:change={uploadImage} type="file" name="" id="" />
						</div>
					</form>
				</div>
				<div class="w-1/2">
					<DragDropList bind:data removesItems={true} />
				</div>
			</div>
		</div>
	</div>
</div>
<SmallModal showClose={false} show={showModal} on:complete={closeModal}>
	{$_('updateSuccess')}
</SmallModal>

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
