<script>
	import { onMount } from 'svelte';

	let scrollY = 0;
	let scrollX = 0;

	// Track scroll position and update horizontal position
	function handleScroll() {
		scrollY = window.scrollY/2;
		// Use modulus operation to create looping effect
		scrollX = -(scrollY * 3) % window.innerWidth;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class=" bg-white min-h-screen" style="">
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
            			<div class="w-full grid justify-center   mt-40 ">
				<h1 class="text-black w-full flex text-xl justify-center">Organizers</h1>
				<img src="org.png" class="w-[80rem]" alt="" />
			</div>
		</div>
	</section>

	<div class="w-full min-h-screen bg-black">
		<div class=" p-10 ">
			

			<div class="mt-5 flex items-center space-x-10">
				<img src="vc_sir.jpg" class="w-1/3 rounded-xl" alt="" />
                
                <div>
                    <h1 class=" mb-10 text-4xl font-bold">Speech of the Honorable Vice Chancellor</h1>
                    				<div class=" border rounded-xl p-10">
					<h1>
						<span class="text-3xl">"</span>Dear students, esteemed faculty, distinguished guests,
						and members of the tech community, It is with great pleasure and immense pride that I
						stand before you today at the UIU CSE FEST 2025, a celebration of innovation,
						creativity, and collaboration in the field of computer science and engineering. This
						event not only highlights the remarkable talents of our students but also serves as a
						testament to the vibrant academic environment that we foster here at United
						International University. As we gather to explore the themes of technology and its
						impact on society, I am reminded of the relentless spirit of inquiry and exploration
						that defines the essence of our institution. Our students are not just learners; they
						are pioneers, ready to embrace the challenges and opportunities that lie ahead. The
						events we present today, from coding contests to workshops and discussions, are designed
						to inspire and empower the next generation of tech leaders. I would like to extend my
						heartfelt gratitude to our faculty members, whose unwavering dedication and guidance
						have paved the way for our students to excel. Your commitment to nurturing talent and
						fostering a culture of innovation is truly commendable. I also want to acknowledge our
						partners and sponsors for their generous support, which has made this festival possible.
						To the participants, I encourage you to embrace every opportunity that comes your way
						during this festival. Engage with your peers, learn from the experts, and challenge
						yourselves to think beyond the conventional. Remember, it is through collaboration and
						the exchange of ideas that we can unlock new potentials and drive meaningful change. As
						we embark on this exciting journey together, let us celebrate not only the achievements
						of our students but also the shared vision of a future where technology serves as a
						catalyst for progress and empowerment. I am confident that the UIU CSE FEST 2025 will
						not only showcase your talents but also lay the foundation for lasting connections and
						future collaborations. Thank you, and let us make this festival a memorable and
						inspiring experience for all!
					</h1>
				</div>
                </div>

			</div>
		</div>

<section class="scrolling-text-container mt-[25rem] mb-[25rem] h-full w-full">
  <h1 class="scrolling-text  text-white text-nowrap text-[20rem] font-extrabold" style="transform: translateX({scrollX}px);">
    READY TO SHOW YOUR TALENT? READY TO SHOW YOUR TALENT? READY TO SHOW YOUR TALENT?
  </h1>
</section>
	</div>


</section>
<footer class="bg-white p-10 h-[20rem] text-black ">
    <img src="UIU-01.png" class="w-[20rem]" alt="">
    <h1 class="w-1/3 mt-10">United City, Madani Avenue,
Badda, Dhaka - 1212, Bangladesh.
Tel: +88 09604 UIU UIU (848 848)​
​​Web: www.uiu.ac.bd, Email: info@uiu.ac.bd</h1>

     
</footer>

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
