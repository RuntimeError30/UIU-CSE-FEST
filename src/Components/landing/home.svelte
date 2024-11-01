<script>
  import { Canvas } from '@threlte/core';
  import { GLTF } from '@threlte/extras';
  



  const modelPath = 'terminal.glb';
</script>

<section class="">
  <div class="leading-[6rem] w-full h-full flex align-center justify-center">
    <div class="mt-72">
      <h1 class="text-white text-[15rem]" style="font-family: 'Orbitron', sans-serif;">CSE</h1>
      <h1 class="text-black text-[15rem]" style="font-family: 'Orbitron', sans-serif;">FEST</h1>
    </div>
  </div>


  <Canvas style="width: 100%;">
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} intensity={1} />
    <GLTF src={modelPath} />
  </Canvas>
</section>
