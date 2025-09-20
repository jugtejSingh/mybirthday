<script>
	import Modal from '$lib/components/Modal.svelte';
	import { Confetti } from 'svelte-confetti';
	import Costume from '$lib/components/Costume.svelte';
	import Background from '$lib/assets/Background.png';
	let modalOpener = $state(false);
	let showConfetti = $state(false);
	let costume = $state('');

	let { form } = $props();
</script>

<div class="TopLevel">
	<img src={Background} alt="Background" class="Images" />
	{#if showConfetti}
		<div
			style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
		>
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				infinite
				duration="3000"
				amount="1000"
				fallDistance="100vh"
			/>
		</div>
		<div class="ShowCostume">
			<Costume {costume} />
		</div>
	{/if}
	<h2>4th October, 9pm, My place</h2>
	<h4 class="Aand">Und maand ka tola, jo na dabaye, behen ka loda</h4>
	<button
		class="Button"
		onclick={() => {
			modalOpener = !modalOpener;
		}}
	>
		RSVP
	</button>
	<Modal bind:modalOpener bind:showConfetti bind:costume {form} />
</div>

<style>
	.Images {
		width: 100%;
	}
	.Aand {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-size: 1.5rem;
		width: 100%;
		color: darkcyan;
		text-align: center;
	}
	.Button {
		font-size: 1.5rem;
		border-radius: 30px;
		border: none;
		margin: auto auto 5rem auto;
		color: #fef3e0;
		background: #f15923;
		width: 50%;
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
	.TopLevel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ShowCostume {
		position: absolute;
	}
</style>
