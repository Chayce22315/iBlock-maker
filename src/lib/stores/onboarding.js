import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const onboardingStep = writable(0); 

export const steps = [
  "Welcome! The Hero is sleepy. Click the 'Add Speed' button to wake him up.",
  "Great! Now, wire the 'Speed' block to the Hero to share power.",
  "He's awake! Use your arrow keys to move the Hero."
];

export const skipTutorial = () => {
  goto('/dashboard'); 
};