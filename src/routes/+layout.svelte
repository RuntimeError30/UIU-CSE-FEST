<script>
	import '../app.css';
	import Nav from '../Components/nav/nav.svelte';

	let scpos = 0;

	function handleScroll() {
		scpos = window.scrollY;
		console.log('scroll: ', { scpos });
	}
</script>

<main class="">
	<Nav />
</main>

<slot />
