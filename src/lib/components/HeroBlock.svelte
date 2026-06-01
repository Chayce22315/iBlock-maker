<script>
  let { block = $bindable() } = $props();

  function handleKeydown(e) {
    const speed = 20;
    if (e.key === 'ArrowUp') block.y -= speed;
    if (e.key === 'ArrowDown') block.y += speed;
    if (e.key === 'ArrowLeft') block.x -= speed;
    if (e.key === 'ArrowRight') block.x += speed;
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div 
  class="absolute w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center border-4 border-white shadow-2xl transition-all cursor-move"
  style="left: {block.x}px; top: {block.y}px;"
>
  <span class="text-white font-bold select-none">HERO</span>
</div>