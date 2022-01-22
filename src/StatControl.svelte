<script lang="ts">
  export let currentValue: number;
  export let maxValue: number;
  export let label: string;

  $: canDecrease = currentValue > 0;
  $: canIncrease = currentValue < maxValue;
</script>

<div class="container">
  <button disabled={!canIncrease} on:click={() => currentValue++}>+</button>
  <span>
    {label}: {currentValue} / {maxValue}
  </span>
  <button disabled={!canDecrease} on:click={() => currentValue--}>-</button>
</div>

<style>
  .container {
    text-align: center;
    display: flex;
    flex-flow: column;
  }
</style>
