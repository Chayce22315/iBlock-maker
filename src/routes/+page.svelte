<script>
  import { onboardingStep, steps, skipTutorial } from '$lib/stores/onboarding.js';
  import HeroBlock from '$lib/components/HeroBlock.svelte';
  import OnboardingSuccess from '$lib/components/OnboardingSuccess.svelte';

  let blocks = $state([{ id: 'hero', type: 'hero', x: 400, y: 300 }]);
  let showSuccess = $state(false);

  function addSpeed() {
    onboardingStep.set(1);
    setTimeout(() => { showSuccess = true; }, 2000);
  }
</script>

<main class="h-screen w-full flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
  
  <header class="p-6 flex justify-between items-center border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
    <div class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      iBlock Engine
    </div>
    <button onclick={skipTutorial} class="text-sm text-slate-400 hover:text-white transition-colors underline decoration-slate-600">
      Skip Tutorial
    </button>
  </header>

  <div class="flex-grow relative overflow-hidden bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]">
    
    <div class="absolute top-10 left-1/2 -translate-x-1/2 bg-blue-600/20 backdrop-blur-lg border border-blue-500/50 px-6 py-3 rounded-full shadow-2xl font-medium animate-in fade-in slide-in-from-top-4">
      {steps[$onboardingStep]}
    </div>

    {#if $onboardingStep === 0}
      <button onclick={addSpeed} class="absolute bottom-10 left-10 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
        + Add Speed Block
      </button>
    {/if}

    <div class="w-full h-full relative">
      {#each blocks as block, i}
        <HeroBlock bind:block={blocks[i]} />
      {/each}
    </div>
  </div>

  {#if showSuccess}
    <OnboardingSuccess />
  {/if}
</main>