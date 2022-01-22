<script lang="ts">
  import { onMount } from "svelte";

  import CharacterDashboard from "./Pages/CharacterDashboard.svelte";
  import CharacterSheet from "./Pages/CharacterSheet.svelte";
  import { selectedCharacter } from "./Stores/CharacterSelectors";
  import CharacterStore from "./Stores/CharacterStore";

  onMount(() => {
    CharacterStore.getCharactersFromLocalStorage();
  });
</script>

<main>
  <h1>Ragtag RPG</h1>

  {#if !!$selectedCharacter}
    <CharacterSheet />
  {:else}
    <CharacterDashboard />
  {/if}
</main>

<style>
  h1 {
    margin: 0;
    color: grey;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    text-align: center;
  }
  main {
    width: 70%;
    margin: 0 auto;
  }
</style>
