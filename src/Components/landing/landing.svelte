<script>
  import { gsap } from "gsap";

  let scrollY = 0;
  let ticker;

  // Scroll and move text using GSAP
  window.addEventListener('scroll', () => {
    scrollY = -2 * window.scrollY; // Adjust the scroll factor for speed
    gsap.to(ticker, { x: scrollY, ease: "power1.out", duration: 0.1 });
  });
</script>

<section>
    <div>
        <h1 bind:this={ticker} style="font-weight: 900; font-size: 15rem; white-space: nowrap;">UIU CSE FEST 2025 UIU CSE FEST 2025 UIU CSE FEST 2025</h1>
        <h1 style="display: flex; justify-content: center; font-size: 2rem;">Scroll to continue</h1>
    </div>
</section>

