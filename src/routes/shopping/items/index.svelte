<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ page, fetch }: LoadInput): LoadOutput => {
		const id = page.query.id;
		const item = await fetch({
			url: `/shopping/items/get-shopping-item`,
			method: 'post',
			body: JSON.stringify({ id })
		}).then((data) => data.json());
		return {
			props: {
				id,
				item
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

	export let id = '';
	export let item = null;

	let data = [];
	let title = '';
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
		title = item.title;
		editor.innerHTML = item.description;
		data = item.photos.map((it) => ({
			base64: it.base64,
			html: `<img src='${it.base64}' alt='preview image'/>`
		}));

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});
	});
	const save = () => {
		const description = quill.root.innerHTML;
		const images = data.map((it, index) => {
			return { order: index, base64: it.base64 };
		});

		request
			.post('save')
			.send({ id, title, description, images })
			.then(() => {
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

				var reader = new FileReader();
				reader.readAsDataURL(blob);
				reader.onloadend = function () {
					var base64data = reader.result;
					// console.log(base64data);
					data = [
						...data,
						{
							id: data.length + 1,
							html: `<img src='${window.URL.createObjectURL(blob)}' alt='preview image'/>`,
							blob,
							base64: base64data
						}
					];
				};
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
			<TextBox bind:value={title} label={$_('itemName')} />
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
