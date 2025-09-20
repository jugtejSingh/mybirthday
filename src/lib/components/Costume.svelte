<script>
	let { costume = $bindable() } = $props();
</script>

<div class="Costume">
	<h3 class="CostumeHeading">YOUR COSTUME IS</h3>
	<h6 class="CostumeHeading">{costume}</h6>
</div>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	.Costume {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0;
		gap: 2rem;
		animation: makeBigger 2s ease-in forwards;
		color: black;
		background-color: beige;
	}
	.CostumeHeading {
		animation: makeBigger 2s ease-in-out forwards;
	}
	@keyframes makeBigger {
		0% {
			font-size: 0;
		}
		100% {
			font-size: 2.5rem;
		}
	}
</style>
