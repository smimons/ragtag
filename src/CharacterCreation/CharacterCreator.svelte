<script lang="ts">
  import { CHARACTER_TEMPLATE } from "../defaults";
  import {
    Attribute,
    StarshipRole,
    TrainingDiceMap,
    WeaponType,
  } from "../enums";
  import { tempChar } from "../Stores/CharacterStore";
  import CharacterStore from "../Stores/CharacterStore";
  import { getTotal, hasLength, uuid } from "../Utils/UtilMethods";

  const roleKeys = Object.values(StarshipRole);
  const attributeKeys = Object.values(Attribute);
  const weaponKeys = Object.values(WeaponType);
  let maxAttributeScore = 9;
  let maxWeaponTrainingScore = 6;

  $: profileValid = Object.values($tempChar.profile).every(hasLength);
  $: attrValid =
    Object.values($tempChar.attributes).reduce(getTotal, 0) ===
    maxAttributeScore;
  $: weaponValid =
    Object.values($tempChar.weaponTraining).reduce(getTotal, 0) ===
    maxWeaponTrainingScore;

  $: formValid = profileValid && attrValid && weaponValid;

  function saveCharacter() {
    $tempChar.id = uuid();
    CharacterStore.addNewCharacter($tempChar);
    $tempChar = CHARACTER_TEMPLATE;
  }
</script>

<div class="container">
  <div class="twoColumn">
    <div>
      <label for="profile-name">Name: </label>
      <input
        id="profile-name"
        bind:value={$tempChar.profile.name}
        placeholder="Character Name"
      />

      <label for="profile-appearance">Appearance: </label>
      <textarea
        id="profile-appearance"
        bind:value={$tempChar.profile.appearance}
        placeholder="Character Appearance"
      />

      <label for="profile-prompt">Prompt: </label>
      <textarea
        id="profile-prompt"
        bind:value={$tempChar.profile.prompt}
        placeholder="Character Prompt"
      />
      <label for="profile-role">Starship Role: </label>
      <select bind:value={$tempChar.starshipRole}>
        {#each roleKeys as role}
          <option value={role}>
            {role}
          </option>
        {/each}
      </select>
    </div>
    <div>
      <h3>Attributes</h3>
      {#each attributeKeys as key}
        <div>
          {key}: {$tempChar.attributes[key]}d6 ({TrainingDiceMap[
            $tempChar.attributes[key]
          ]})
          <button
            disabled={attrValid}
            on:click={() => $tempChar.attributes[key]++}>+</button
          >
          <button
            disabled={$tempChar.attributes[key] === 1}
            on:click={() => $tempChar.attributes[key]--}>-</button
          >
        </div>
      {/each}
    </div>
    <div>
      <h3>Weapon Training</h3>
      {#each weaponKeys as key}
        <div>
          {key}: {$tempChar.weaponTraining[key]}d6 ({TrainingDiceMap[
            $tempChar.weaponTraining[key]
          ]})
          <button
            disabled={weaponValid}
            on:click={() => $tempChar.weaponTraining[key]++}>+</button
          >
          <button
            disabled={$tempChar.weaponTraining[key] === 1}
            on:click={() => $tempChar.weaponTraining[key]--}>-</button
          >
        </div>
      {/each}
    </div>
  </div>
  <button class="save" disabled={!formValid} on:click={saveCharacter}
    >Save Character</button
  >
</div>

<style>
  .container {
    padding: 0.5em;
    margin: 0.25em;
    border: 2px solid grey;
  }

  .twoColumn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
  }

  input,
  textarea,
  select {
    width: 100%;
  }
  label {
    font-weight: 600;
  }

  h3 {
    margin: 0;
    margin-bottom: 0.25em;
  }

  .save {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }
</style>
