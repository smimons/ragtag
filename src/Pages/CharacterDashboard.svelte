<script lang="ts">
  import CharacterCreator from "../CharacterCreation/CharacterCreator.svelte";
  import { allCharacters } from "../Stores/CharacterSelectors";
  import { hasLength } from "../Utils/UtilMethods";
  import CharacterSummary from "./CharacterSummary.svelte";
</script>

<div class="container">
  {#if hasLength($allCharacters)}
    <section class="characterList">
      <h2>My Characters</h2>
      {#each $allCharacters as character}
        <CharacterSummary {character} />
      {/each}
    </section>
  {:else}
    <p>Create a character...</p>
  {/if}

  <section class="createCharacter">
    <h2>Create A Character</h2>
    <CharacterCreator />
  </section>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
  }
</style>
