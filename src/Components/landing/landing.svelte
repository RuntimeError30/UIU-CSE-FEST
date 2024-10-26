<script>
	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import ani4 from '../hero/hehe.lottie';

	gsap.registerPlugin(ScrollToPlugin);

	const smoothScroll = (target) => {
		gsap.to(window, {
			duration: 1.5,
			scrollTo: {
				y: target,
				offsetY: 0
			},
			ease: 'power2.out'
		});
	};

	const handleScrollClick = () => {
		const section = document.querySelector('section');
		if (section) {
			smoothScroll(section.offsetTop);
		} else {
			console.error('Section element not found');
		}
	};
</script>

<section class="w-full z-50">
	<div class="flare"></div>

	<div class="flex justify-between align-baseline mb-[30rem]">
		<div class=" w-full relative">
			<div class="aspect-video flex justify-center w-full">
				<div class="w-[60%]">
					<DotLottieSvelte src={ani4} loop autoplay />
				</div>
			</div>

			<div class="relative -top-40">
				<div class="w-full flex justify-center">
					<h1 class="text-[8rem] font-black w-full flex justify-center leading-[8rem]">
						UIU CSE FEST 2025
					</h1>
				</div>
				<div class="flex">
					<div class="w-full">
						<h1 class="text-xl flex justify-center mt-6">
							Innovate, Compete, Excel – The Future Begins at UIU CSE Fest 2025
						</h1>
					</div>
				</div>

				<div class="w-full flex justify-center mt-16">
					<!-- Button (optional) -->
					<button id="btn" class="">Join Now</button>

					<!-- Scroll Indicator -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- <div class="container_mouse mt-10" on:click={handleScrollClick}>
					<span class="mouse-btn">
						<span class="mouse-scroll"></span>
					</span>
					<span class="opacity-50 text-xs">Scroll Down for more</span>
				</div> -->
				</div>
			</div>
		</div>
	</div>

	<div class="w-full mt-10 p-10 mb-[40rem]">
		<!-- <div class="flare2"></div> -->

		<div class=" grid justify-center w-full text-middle" style="z-index:50;">
			<h1 class="font-black w-full flex justify-center text-[5rem]">About Us</h1>
			<h1 class="mt-5 flex text-lg justify-center text-center">
				Welcome to UIU CSE Fest 2025, where the brightest minds come together to showcase their
				skills, solve real-world problems, and push the boundaries of technology! This year, we
				present six thrilling events across programming, software, and robotics, offering a platform
				for both university and college students to shine.
			</h1>
		</div>

		<div class=" flex space-x-10 justify-center mt-20" style="z-index:50;">
			<img
				src="uiu1.jpg"
				class="w-1/4 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 aspect-square"
				alt=""
			/>
			<img
				src="uiu2.jpg"
				class="w-1/4 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 translate-y-20 aspect-square"
				alt=""
			/>
			<img
				src="uiu3.jpg"
				class="w-1/4 rounded-xl opacity-60 hover:opacity-100 transition-all border border-white/30 aspect-square"
				alt=""
			/>
		</div>

		<!-- <table class="w-full ">
			<tr class="border ">
				<h1 class="p-5 text-start font-black w-full flex justify-center text-[5rem]">About Us</h1></tr
			>
			<tr class="">
				<td class="border w-fit"><img src="uiu2.jpg" class="w-1/2 rounded-xl opacity-90  hover:opacity-100 transition-all border border-white/30 " alt=""></td>
				<td>kjfjdkfnj</td>
			</tr>
		</table> -->
	</div>

	<div class="mt-20 p-10">
		<div class=" grid w-full" style="z-index:50;">
			<h1 class="font-black w-full text-[5rem]">Events</h1>

			<div class="flex w-full border-b-2 rounded-xl border-white/30 h-[15rem] items-center px-5">
				<h1 class="text-2xl border-b-2 border-white opacity-50 font-semibold mr-10">01</h1>
				<div class="w-full">
					<h1 class="text-4xl w-full font-bold">
						1st UIU Inter University Programming Contest (UIU IUPC 2024)
					</h1>
					<h1 class="">University Level</h1>
				</div>
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-10 w-full"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>

			<div
				class="flex w-full aspect-video h-[15rem] items-center justify-between px-5 bg-clip-content border-b border-white/40 rounded-xl"
			>
				<!-- Left section for number and title -->
				<div class="flex items-center">
					<h1 class="text-2xl border-b-2 border-white opacity-80 font-semibold mr-10 text-white">
						02
					</h1>

					<div>
						<h1 class="text-4xl font-bold text-white">Blockchain Olympiad</h1>
						<h1 class="text-lg text-gray-300 mt-2">University Level</h1>
					</div>
				</div>

				<!-- Right section for button -->
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-10 h-10"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>

			<div class="flex w-full border-b-2 rounded-xl border-white/30 h-[15rem] items-center px-5">
				<h1 class="text-2xl border-b-2 border-white opacity-50 font-semibold mr-10">03</h1>
				<div class="w-full">
					<h1 class="text-4xl w-full font-bold">Project Show</h1>
					<h1 class="">University Level</h1>
				</div>
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-10 w-full"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>

			<div
				class="flex w-full aspect-video h-[15rem] items-center justify-between px-5 bg-clip-content border-b border-white/30 rounded-xl"
			>
				<!-- Left section for number and title -->
				<div class="flex items-center">
					<h1 class="text-2xl border-b-2 border-white opacity-80 font-semibold mr-10 text-white">
						04
					</h1>

					<div>
						<h1 class="text-4xl font-bold text-white">ICT Olympiad</h1>
						<h1 class="text-lg text-gray-300 mt-2">College Level</h1>
					</div>
				</div>

				<!-- Right section for button -->
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-10 h-10"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>

			<div class="flex w-full border-b-2 rounded-xl border-white/30 h-[15rem] items-center px-5">
				<h1 class="text-2xl border-b-2 border-white opacity-50 font-semibold mr-10">05</h1>
				<div class="w-full">
					<h1 class="text-4xl w-full font-bold">Soccer Bot Competition</h1>
					<h1 class="">University & College</h1>
				</div>
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-10 w-full"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>

			<div
				class="flex w-full aspect-video h-[15rem] items-center justify-between px-5 bg-clip-content border-b border-white/30 rounded-xl"
			>
				<!-- Left section for number and title -->
				<div class="flex items-center">
					<h1 class="text-2xl border-b-2 border-white opacity-80 font-semibold mr-10 text-white">
						06
					</h1>

					<div>
						<h1 class="text-4xl font-bold text-white">Line Follower Robot (LFR) Competition</h1>
						<h1 class="text-lg text-gray-300 mt-2">University & College</h1>
					</div>
				</div>

				<!-- Right section for button -->
				<button class="p-3 rounded-full border aspect-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-10 h-10"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div>
		<img src="wave2.jpg" alt="" />
	</div>
</section>

<style>
	.flare {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		background: radial-gradient(#ff710bce 10%, transparent 50%);
		position: absolute;
		bottom: 30rem;
		z-index: -1;
		animation: flareAnimation 30s infinite ease-in-out;
		filter: blur(55px);
	}
	/* .flare2 {
		width: 160rem;
		height: 160rem;
		display: flex;
		position: absolute;
		justify-content: center;

		background: radial-gradient(#ff5900ce 10%, transparent 20%);
		z-index: -1;
		filter: blur(55px);
	} */

	@keyframes flareAnimation {
		0% {
			transform: scale(1);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0.8;
		}
	}

	#btn {
		padding: 10px 20px;
		width: 20rem;
		height: 6rem;
		text-transform: uppercase;
		border-radius: 30px;
		font-size: 17px;
		font-weight: 500;
		color: #ffffff80;
		background: transparent;
		cursor: pointer;
		border: 1px solid #ffffff80;
		transition: 0.5s ease;
		user-select: none;
	}

	#btn:hover,
	:focus {
		color: #ffffff;
		text-shadow:
			0 0 5px #ffffff,
			0 0 20px #ffffff,
			0 0 40px #ffffff;
	}

	/* Scroll Indicator */
	.mouse-btn {
		margin: 10px auto;
		width: 50px;
		height: 120px;
		border: 3px solid rgba(122, 122, 124, 0.918);
		border-radius: 20px;
		display: flex;
	}

	.mouse-scroll {
		display: block;
		width: 20px;
		height: 20px;
		background: linear-gradient(170deg, rgba(122, 122, 124, 0.918), rgb(123, 124, 124));
		border-radius: 50%;
		margin: auto;
		animation: scrolling13 3s linear infinite;
	}

	@keyframes scrolling13 {
		0% {
			opacity: 0;
			transform: translateY(-40px);
		}
		100% {
			opacity: 1;
			transform: translateY(40px);
		}
	}
</style>
