<script>
  import { goto } from '$app/navigation';
</script>

<div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
  <div class="bg-white text-black p-8 rounded-2xl max-w-sm text-center">
    <h2 class="text-2xl font-bold mb-4">Hero Activated!</h2>
    <p class="mb-6">You've mastered the basics. Create an account to save your hero.</p>
    <button onclick={() => goto('/signup')} class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
      Sign Up & Save
    </button>
  </div>
</div>