<script>
	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

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
		smoothScroll(section.offsetHeight);
	};
</script>

<section class="w-full">
	<div class="flare"></div>

	<div class="flex justify-between align-baseline mb-[200rem]">
		<div class="p-14 align-center justify-between relative top-60">
			<div class="flex">
				<h1 class="text-[10rem] font-black w-[70%] leading-[8rem]">UIU CSE FEST 2025</h1>
			</div>
			<div class="flex">
				<div class="w-full">
					<h1 class="text-xl mt-6">
						Innovate, Compete, Excel – The Future Begins at UIU CSE Fest 2025
					</h1>
				</div>
			</div>

			<div class="flex justify-between mt-16">
				<!-- Button (optional) -->
				<button id="btn">Join Now</button>

				<!-- Scroll Indicator -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="container_mouse mt-10" on:click={handleScrollClick}>
					<span class="mouse-btn">
						<span class="mouse-scroll"></span>
					</span>
					<span class="opacity-50 text-xs">Scroll Down for more</span>
				</div>
			</div>
		</div>
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
