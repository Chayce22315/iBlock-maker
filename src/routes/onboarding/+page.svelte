<script>
  import { onboardingStep, steps, skipTutorial } from '$lib/stores/onboarding.js';
  import HeroBlock from '$lib/components/HeroBlock.svelte';
  import OnboardingSuccess from '$lib/components/OnboardingSuccess.svelte';

  let blocks = [{ id: 'hero', type: 'hero', x: 400, y: 300 }];
  let showSuccess = false;

  function addSpeed() {
    onboardingStep.set(1);
    // Logic to show success modal after a short delay for demo purposes
    setTimeout(() => { showSuccess = true; }, 2000);
  }
</script>

<main class="h-screen w-full flex flex-col bg-slate-900 text-white font-sans">
  <header class="p-6 flex justify-between items-center border-b border-slate-700">
    <div class="text-xl font-bold">iBlock Onboarding</div>
    <button on:click={skipTutorial} class="text-sm text-slate-400 hover:text-white underline">
      Skip
    </button>
  </header>

  <div class="flex-grow flex items-center justify-center relative">
    <div class="absolute top-10 bg-blue-600 px-6 py-3 rounded-full shadow-lg font-medium">
      {steps[$onboardingStep]}
    </div>

    {#if $onboardingStep === 0}
      <button on:click={addSpeed} class="absolute bottom-10 bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Add Speed Block
      </button>
    {/if}

    <div class="w-full h-full relative">
      {#each blocks as block}
        <HeroBlock {block} />
      {/each}
    </div>
  </div>

  {#if showSuccess}
    <OnboardingSuccess />
  {/if}
</main>