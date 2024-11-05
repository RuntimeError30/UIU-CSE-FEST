<script>
	import { onMount } from 'svelte';

	let opacity = 0;
	let titleParallax = 0;
	let imageParallax = 0;
	let textParallax = 0;

	function handleScroll() {
		const scrollY = window.scrollY;
		opacity = Math.min(1, scrollY / 500);
		titleParallax = scrollY * 0.3;
		imageParallax = scrollY * 0.2;
		textParallax = scrollY * 0.1;

		console.log(scrollY);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section
	
	class=" bg-white min-h-screen "
	style="transform: translateY({titleParallax}px);"
>
<section class="p-20">
    	<div class="flex space-x-10 px-20 text-black">
		<div class="grid justify-end h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 01</h1>
			<h1 class="text-6xl font-semibold">
				1st UIU Inter University Programming Contest (UIU IUPC 2024)
			</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
		<!-- Add more items as needed -->
		<div class="grid justify-start h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 02</h1>
			<h1 class="text-6xl font-semibold">Blockchain Olympiad</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>

	<div class="flex space-x-10 p-20 text-black">
		<div class="grid justify-end h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 03</h1>
			<h1 class="text-6xl font-semibold">Soccer Bot Competition</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
		<!-- Add more items as needed -->
		<div class="grid justify-start h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 04</h1>
			<h1 class="text-6xl font-semibold">ICT Olympiad</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>

	<div class="flex space-x-10 p-20 text-black">
		<div class="grid justify-end h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 03</h1>
			<h1 class="text-6xl font-semibold">Soccer Bot Competition</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
		<!-- Add more items as needed -->
		<div class="grid justify-start h-[50rem] p-5 w-full border border-black/90 rounded-xl">
			<h1 class="text-[#ff4701]">Event 04</h1>
			<h1 class="text-6xl font-semibold">ICT Olympiad</h1>
			<h1 class="mt-10 text-xl">Event Date: November 05, 2024</h1>
			<h1 class="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</h1>
			<div>
				<button class="Btn-Container">
					<span class="text">Let's Go!</span>
					<span class="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- SVG content here -->
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
	<div class=" p-20">
		<div class="w-full grid justify-center">
			<h1 class="text-black">Sponsors</h1>
			<img src="Logos.png" class="w-[70rem]" alt="" />
		</div>
		<div class=" flex space-x-10 justify-center mt-20">
			<img
				src="uiu1.jpg"
				class="w-1/3 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 aspect-square"
				alt=""
			/>
			<img
				src="uiu2.jpg"
				class="w-1/3 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 translate-y-20 aspect-square"
				alt=""
			/>
			<img
				src="uiu3.jpg"
				class="w-1/3 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 aspect-square"
				alt=""
			/>
		</div>
	</div>
</section>

    <div class="w-full min-h-screen bg-black" style="transform: translateY({titleParallax}px);">
        <div class="mt-20 p-10">
            <h1>Speech of the Honorable Vice Chancellor</h1>
        </div>

    </div>
</section>

<style>
	/* Ensure full width for horizontal scrolling */

	.Btn-Container {
		display: flex;
		width: 200px;
		height: 60px;
		background-color: #1d2129;
		border-radius: 40px;
		box-shadow: 0px 5px 10px #bebebe;
		justify-content: space-between;
		align-items: center;
		border: none;
		cursor: pointer;
		margin-top: 70px;
	}
	.icon-Container {
		width: 55px;
		height: 55px;
		background-color: #ff4701;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 3px solid #1d2129;
	}
	.text {
		width: calc(170px - 45px);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.1em;
		letter-spacing: 1.2px;
	}
	.icon-Container svg {
		transition-duration: 1.5s;
	}
	.Btn-Container:hover .icon-Container svg {
		animation: arrow 1s linear infinite;
	}
	@keyframes arrow {
		0% {
			opacity: 0;
			margin-left: 0px;
		}
		100% {
			opacity: 1;
			margin-left: 10px;
		}
	}
</style>
