<script>
	import { onMount } from 'svelte';

	let opacity = 0;
	let titleParallax = 0;
	let imageParallax = 0;
	let textParallax = 0;
  

	function handleScroll() {
		const scrollY = window.scrollY;
		opacity = Math.min(1, scrollY / 500);
		titleParallax = scrollY * 0.2; // Adjusts the parallax speed for the title
		imageParallax = scrollY * 0.2; // Adjusts the parallax speed for the image
		textParallax = scrollY * 0.1; // Adjusts the parallax speed for the text
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

  


  
</script>

<section class="">
	<!-- Main content section with white background -->
	<section class="-z-50 bg-white min-h-screen w-full grid items-center justify-center relative">
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
					<img src="retrpc.png" alt="Retro PC" class="w-1/6 float" />
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
	<section style="opacity: {opacity}; " class="mb-72">
		<div class="bg-black w-full flex p-10 text-white mt-20 transition-opacity duration-300">
			<div class="leading-tight w-full" style="transform: translateY({textParallax}px);">
				<h1 class="text-white">Welcome to</h1>
				<h1 class="text-[5rem] font-black">UIU CSE FEST 2025</h1>
				<h1 class="w-[70%]">
					Welcome to UIU CSE Fest 2025, a premier event where talent, creativity, and technological
					prowess come together to make a difference! This year, we're proud to present an exciting
					lineup of six diverse and engaging events, tailored to inspire and challenge the next
					generation of tech enthusiasts. UIU CSE Fest is designed to unite the brightest minds from
					universities and colleges, offering a platform to showcase skills, solve real-world
					problems, and push the frontiers of innovation. Our events span programming, software
					development, and robotics, providing unique opportunities for students to dive into
					competitive coding, prototype development, and robotic design. Each event is crafted to
					test participants' skills, foster collaboration, and ignite a passion for technology. In
					addition to rigorous challenges, students will have the chance to connect with industry
					experts, attend interactive workshops, and engage in knowledge-sharing sessions that
					broaden their perspectives and enhance their technical know-how. Whether you're here to
					compete, network, or learn, UIU CSE Fest 2025 promises an unforgettable experience. Join
					us as we celebrate technology, embrace innovation, and empower the tech leaders of
					tomorrow. Prepare to challenge yourself and make your mark on the future of technology!
				</h1>
			</div>
			<div class="aspect-square w-1/2" style="transform: translateY({imageParallax}px);">
				<img src="9910414.png" alt="" />
			</div>
		</div>
	</section>

	<section class="mt-72">
		<div class="event-scroll-wrapper bg-white w-full min-h-screen flex text-black p-10">
			<div class="event-scroll h-full pt-20 p-5 w-full border border-black/90 rounded-xl">
				<h1 class="text-[#ff4701]">Event 01</h1>
				<h1 class="text-6xl font-semibold">
					1st UIU Inter University Programming Contest (UIU IUPC 2024)
				</h1>

				<h1 class="mt-20 text-xl">Event Date: November 05, 2024</h1>
				<h1 class="mt-32 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi sint, tempore
					quaerat sequi aspernatur mollitia officia sunt similique earum vero pariatur assumenda
					quam enim nihil quo incidunt unde harum. Adipisci voluptas dolore nemo. Cum est corporis
					expedita cumque eius et explicabo dicta earum, amet eveniet dolorem. Sint corrupti tempora
					voluptas recusandae? Voluptas maiores illo esse distinctio incidunt earum est numquam quam
					tempore, ipsa eius ab veritatis a asperiores? Expedita aperiam illo in veritatis, sequi
					dicta numquam eveniet sint ratione, tempora nesciunt voluptates possimus accusantium
					dolores consectetur eos, omnis animi perspiciatis mollitia iste ullam maxime ut tempore
					ab! Quae perspiciatis, alias accusantium fugiat ratione minima odio obcaecati similique,
					iste nisi aliquam debitis cupiditate. Perspiciatis fugit dolorem quis similique repellat,
					consectetur rem error ipsum dicta debitis minima aliquid! Recusandae, iusto reprehenderit
					illum earum aut quaerat quas, incidunt iste deserunt minus quis. Corrupti doloribus eum
					nostrum, quasi commodi facilis quam dolor nemo fugit voluptas doloremque odit sint, culpa
					ab iste? Perspiciatis a magnam quae aliquam quod consectetur, aut rem, harum voluptatum
					sapiente possimus illo ut unde doloribus eligendi hic veniam earum. Cupiditate esse
					numquam iusto dolore saepe voluptate quia fugiat maxime. Nisi neque voluptatibus commodi
					ipsum rerum qui totam delectus possimus libero?
				</h1>

				<div>
					<button class="Btn-Container">
						<span class="text">let's go!</span>
						<span class="icon-Container">
							<svg
								width="16"
								height="19"
								viewBox="0 0 16 19"
								fill="nones"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
								<circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
								<circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
								<circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
								<circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
								<circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
								<circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
								<circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
								<circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
								<circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
							</svg>
						</span>
					</button>
				</div>
			</div>










      
		</div>
	</section>
</section>

<style>
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
  margin-top:70px;
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
  transition-duration: 1.5s;
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
