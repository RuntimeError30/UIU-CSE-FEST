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

<main>
	<section class="scroll-container overflow-hidden" style="height: fit-content;">
		<!-- Main content section with white background -->
		<section class="bg-white min-h-screen w-full grid items-center justify-center relative">
			<main>
				<div class="leading-[13rem] text-center">
					<div
						class="flex flex-col items-center justify-center relative z-10"
						style="transform: translateY({titleParallax}px);"
					>
						<h1
							class="text-black flex font-black text-[20rem]"
							style="font-family: 'Orbitron', sans-serif;"
						>
							UIU <span class="text-[#ff4701]" style="font-family: 'Orbitron', sans-serif;"
								>&nbsp;CSE</span
							>
						</h1>
						<h1
							class="text-black font-black text-[14rem]"
							style="font-family: 'Orbitron', sans-serif;"
						>
							<span class="text-[#ff4701]" style="font-family: 'Orbitron', sans-serif;">FEST</span
							>&nbsp;2025
						</h1>
					</div>

					<div
						class="absolute inset-0 flex items-center justify-center z-10"
						style="transform: translateY({imageParallax}px);"
					>
						<img src="retrpc.png" alt="Retro PC" class="w-1/6 float" style="" />
					</div>
				</div>

				<div class="w-full flex justify-center relative top-20">
					<h1 class="text-black text-lg uppercase tracking-widest animate-pulse">
						Scroll Down to Continue
					</h1>
				</div>
			</main>
		</section>

		<!-- Black overlay section that fades in with scroll and has parallax effect -->
		<section style="opacity: {opacity}; " class="min-h-screen">
			<div class="bg-black w-full flex p-10 text-white mt-20 transition-opacity duration-300">
				<div class="leading-tight w-full" style="transform: translateY({textParallax}px);">
					<h1 class="text-white">Welcome to</h1>
					<h1 class="text-[5rem] font-black">UIU CSE FEST 2025</h1>
					<h1 class="w-[70%]">
						Welcome to UIU CSE Fest 2025, a premier event where talent, creativity, and
						technological prowess come together to make a difference! This year, we're proud to
						present an exciting lineup of six diverse and engaging events, tailored to inspire and
						challenge the next generation of tech enthusiasts. UIU CSE Fest is designed to unite the
						brightest minds from universities and colleges, offering a platform to showcase skills,
						solve real-world problems, and push the frontiers of innovation. Our events span
						programming, software development, and robotics, providing unique opportunities for
						students to dive into competitive coding, prototype development, and robotic design.
						Each event is crafted to test participants' skills, foster collaboration, and ignite a
						passion for technology. In addition to rigorous challenges, students will have the
						chance to connect with industry experts, attend interactive workshops, and engage in
						knowledge-sharing sessions that broaden their perspectives and enhance their technical
						know-how. Whether you're here to compete, network, or learn, UIU CSE Fest 2025 promises
						an unforgettable experience. Join us as we celebrate technology, embrace innovation, and
						empower the tech leaders of tomorrow. Prepare to challenge yourself and make your mark
						on the future of technology!
					</h1>
				</div>
				<div class="aspect-square w-1/2" style="transform: translateY({imageParallax}px);">
					<img src="9910414.png" alt="" />
				</div>
			</div>
		</section>

		<!-- Additional Event Section -->
	</section>
</main>

<style>
	/* Button and float animation styles */
	.float {
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
