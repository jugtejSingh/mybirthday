<script>
	import Radio from '$lib/components/Radio.svelte';
	import { X } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let {
		modalOpener = $bindable(),
		showConfetti = $bindable(),
		form,
		costume = $bindable()
	} = $props();
</script>

<form
	style:display={modalOpener ? 'flex' : 'none'}
	class="Modal"
	method="POST"
	use:enhance={({ formElement, formData, action, cancel }) => {
		return async ({ result }) => {
			if (result.type === 'success') {
				console.log('Success');
				showConfetti = !showConfetti;
				modalOpener = !modalOpener;
				costume = result?.data?.costume;
			} else {
				console.log('Fail');
			}
		};
	}}
>
	<div style="align-self: flex-end; margin-right: 3rem;">
		<X
			onclick={() => {
				modalOpener = !modalOpener;
			}}
		/>
	</div>

	<label class="Fieldset">
		<span>Put your name</span>
		<input type="text" class="Modal__input" id="Name" name="Name" required />
	</label>

	<Radio />
	<label class="Fieldset">
		<span>What mixers do you want? N/A if nothing needed</span>
		<input type="text" class="Modal__input" id="Mixers" name="Mixers" required />
	</label>
	<button type="submit" class="Button">Submit</button>
</form>

<style>
	.Modal {
		width: 90%;
		background: #ff6660;
		position: absolute;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 0 2rem 0;
		border-radius: 30px;
	}
	.Modal__input {
		height: 2.5rem;
		width: 90%;
	}
	.Fieldset {
		border: none;
		display: flex;
		flex-direction: column;
		width: 70%;
		flex-wrap: wrap;
		font-size: 1.2rem;
	}
	.Button {
		font-size: 1.2rem;
		border-radius: 30px;
		border: none;
		color: darkcyan;
		background: beige;
		width: 40%;
		height: 5rem;
		cursor: pointer;
	}
	.Button:active {
		font-size: 1.5rem;
		border-radius: 30px;
		border: none;
		margin: auto;
		color: #fef3e0;
		background: #f1596f;
		width: 50%;
		height: 5rem;
	}
	.Modal__closer {
		margin-right: 2rem;
	}
</style>
