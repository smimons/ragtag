<script lang="ts">
  import { fade } from "svelte/transition";

  export let count: number = 2;
  export let label: string;
  let result: string;
  let total: number;

  $: trainingLabel =
    count === 1 ? "Untrained" : count === 2 ? "Competent" : "Mastered";

  const roll = () => {
    let i = 0;
    let results = [];
    while (i < count) {
      const score = 1 + Math.floor(Math.random() * 6);
      results = [...results, score];
      i++;
    }
    result = results.join(", ");
    total = results.reduce((acc: number, score: number) => acc + score, 0);

    setTimeout(() => {
      result = undefined;
    }, 4000);
  };
</script>

<div class="container">
  <div class="label">{label}</div>
  <div class="training">{trainingLabel}</div>
  <button class="diceRoll" on:click={roll}>{count}d6</button>
  {#if !!result}
    <div class="result">
      <span out:fade>{result}</span>
    </div>
  {/if}
</div>

<style>
  .container {
    font-size: 1.1em;
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1.5fr 1fr;
    text-transform: capitalize;
    text-align: center;
    padding: 0.25em;
  }

  .label {
    margin: auto 0;
    font-weight: 600;
  }

  .diceRoll {
    margin: auto 0;

    font-weight: 600;
  }

  .training {
    margin: auto 0;
    font-style: italic;
  }

  .result {
    padding-left: 1em;
    text-align: left;
    margin: auto 0;

    font-weight: 600;
  }
</style>
