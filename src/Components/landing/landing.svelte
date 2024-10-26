<script>
	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import ani5 from '../hero/mate.lottie';

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
	<div class="flex justify-between align-baseline mb-[30rem]">
		<div class="flare"></div>

		<div class=" w-full">
			<div class=" ">
				<div class=" flex justify-center w-full">
					<div class="w-[80%]">
						<DotLottieSvelte src={ani5} loop autoplay width="100" />
					</div>
				</div>
				<div class="-translate-y-32">
					<div class="w-full flex justify-center">
						<h1 class="text-[5rem] font-black w-full flex justify-center leading-[8rem]">
							UIU CSE FEST 2025
						</h1>
					</div>
					<div class="flex -translate-y-10">
						<div class="w-full">
							<h1 class="text-xl flex justify-center mt-6">
								Innovate, Compete, Excel – The Future Begins at UIU CSE Fest 2025
							</h1>
						</div>
					</div>

					<div class="w-full flex justify-center mt-16 -translate-y-20">
						<!-- Button (optional) -->
						<button id="btn" class="">Join Now</button>

						<!-- Scroll Indicator -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->

					</div>
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

	<div class="mt-20 px-10">
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

	<div class="faded-div mb-[30rem]">
		<img src="wave2.jpg" class="w-full" alt="" />
	</div>

	<div>
		<h1 class="text-2xl font-black">CLUBS AND PARTNERS</h1>
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

.blob {
  position: absolute;
  opacity: 0.5;
  width: 400px;
  aspect-ratio: 1/1;
  animation: animate 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite
    alternate forwards;
  filter: blur(40px);
  z-index: -1;
  background: linear-gradient(
    47deg,
    rgba(255, 88, 139, 1) 21%,
    rgb(0 164 173) 67%,
    rgba(118, 74, 166, 1) 81%
  );

  /*  Optional  */
  /*   box-shadow: inset 50px 50px 17px 0px #ff588b,
    inset 100px 100px 17px 0px #66319f; */
}

@keyframes animate {
  0% {
    translate: 40% -25%;
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }
  50% {
    translate: 0% 13%;
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 1.15;
  }
  100% {
    translate: -45% 39%;
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 1.05;
  }
}

.faded-div {
    position: relative;
    overflow: hidden; /* Ensures that the gradient overlay is contained within the div */
}

.faded-div img {
    display: block; /* Ensures there's no space below the image */
    width: 100%; /* Makes sure the image takes full width */
}

.faded-div::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%);
    pointer-events: none; /* Allows clicks to pass through the overlay */
}


</style>
