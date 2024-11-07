<script>
	import { onMount } from 'svelte';
  
	let lastScrollTop = 0;
	let isScrollingUp = true;
	let isMenuOpen = false;
  
	
	function handleScroll() {
	  const currentScrollTop = window.scrollY;
	  isScrollingUp = currentScrollTop <= lastScrollTop;
	  lastScrollTop = currentScrollTop;
	}
  
	
	function toggleMenu() {
	  isMenuOpen = !isMenuOpen;
	}
  

	function closeMenu() {
	  isMenuOpen = false;
	}
  
	onMount(() => {
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	});
  </script>
  
  <section
	class={`z-50 fixed inset-0 transition-transform   ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}`}
  >
	<nav class="px-6 sm:px-10 flex justify-between items-center relative">
	  <!-- Logo -->
	  <div class="font-bold">
		<img src="/blacklogo.png" class="w-24 md:w-32" alt="Logo" />
	  </div>
  
	  <!-- Hamburger Button for Mobile  -->
	  <button
		class="sm:hidden flex flex-col justify-center items-center space-y-2 w-8 h-8"
		on:click={toggleMenu}
	  >
		<div class="w-full h-1 bg-black"></div>
		<div class="w-full h-1 bg-black"></div>
		<div class="w-full h-1 bg-black"></div>
	  </button>
  
	  <!-- Desktop Menu  -->
	  <ul class="hidden sm:flex space-x-12 items-center text-black text-sm">
		<li><a href="">Home</a></li>
		<li><a href="">About</a></li>
		<li><a href="">Events</a></li>
		<li><a href="">Announcements</a></li>
		<li><a href="">FAQ</a></li>
		<li><a href="">Contact</a></li>
	  </ul>
  
	  <!-- Mobile Menu -->
	  {#if isMenuOpen}
		<div class="sm:hidden absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 p-4">
		
		  <button
			class="absolute top-4 right-4 text-black text-5xl"
			on:click={closeMenu}
		  >
			&times;
		  </button>
  
		  <ul class="space-y-2 text-black text-sm">
			<li><a href="">Home</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Events</a></li>
			<li><a href="">Announcements</a></li>
			<li><a href="">FAQ</a></li>
			<li><a href="">Contact</a></li>
		  </ul>
		</div>
	  {/if}
	</nav>
  </section>
  