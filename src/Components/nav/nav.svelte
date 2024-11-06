<script>
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let lastScrollTop = 0;
	let isScrollingUp = true;
	let isShown = false;

	function handleScroll() {
		const currentScrollTop = window.scrollY;
		isScrollingUp = currentScrollTop <= lastScrollTop;
		lastScrollTop = currentScrollTop;
	}

	function toggleVisibility() {
		isShown = !isShown;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section
	class={`z-50 fixed inset-0 transition-transform backdrop-blur-lg duration-[900ms] ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}`}
>
	<nav class="px-10 flex justify-between items-center">
		<div class="font-bold">
			<img src="/blacklogo.png" class="w-32" alt="Logo" />
		</div>
		<ul class="flex space-x-16  items-center text-black text-sm">
		
	
				
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Events</a></li>
					<li><a href="">Announcements</a></li>
					<li><a href="">FAQ</a></li>
					<li><a href="">Contact</a></li>
			
	
		
		</ul>
	</nav>
</section>

<!-- {#if isShown}
	<div class="fixed z-10 w-full flex justify-center">
		<div
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 200 }}
			class="absolute grid w-[40%] top-10 h-[50rem] bg-black/50 backdrop-blur-xl rounded-3xl p-10 overflow-hidden z-10"
		>
			<div class="w-full h-fit flex justify-end">
				<button class="border border-white/30 p-5" on:click={toggleVisibility}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			</div>
			<div>
				<h1>UIU CSE FEST 2025</h1>
				<h1 class="text-7xl font-extrabold">Menu</h1>
			</div>
			<div>
				<ul class="space-y-5 text-xl">
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Events</a></li>
					<li><a href="">Announcements</a></li>
					<li><a href="">FAQ</a></li>
					<li><a href="">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
{/if} -->

<style>
	section {
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		height: fit-content;
	}
</style>
