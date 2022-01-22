<script lang="ts">
  import CharacterAttributes from "../CharacterAttributes.svelte";
  import CharacterStats from "../CharacterStats.svelte";
  import HeadedContainer from "../HeadedContainer.svelte";
  import SimpleRoller from "../SimpleRoller.svelte";
  import { selectedCharacter } from "../Stores/CharacterSelectors";
  import { uuid } from "../Utils/UtilMethods";

  let char = $selectedCharacter;

  let tempItemName: string;
  let tempItemDescription: string;

  const removeItem = (id: number) => {
    const itemToRemove = char.inventory.find((item) => item.id === id);
    char.inventory = char.inventory.filter(
      (item) => item.id !== itemToRemove.id
    );
  };

  const addItem = () => {
    char.inventory = [
      ...char.inventory,
      {
        id: uuid(),
        name: tempItemName,
        description: tempItemDescription,
      },
    ];
    tempItemDescription = "";
    tempItemName = "";
  };
</script>

<div>
  <div class="three-column-layout">
    <div>
      <CharacterStats stats={char.stats} />
      <CharacterAttributes attributes={char.attributes} />
      <HeadedContainer header="Weapons">
        <SimpleRoller label="Light melee (2)" count={char.weaponTraining.lm} />
        <SimpleRoller label="Light ranged (2)" count={char.weaponTraining.lr} />
        <SimpleRoller label="Heavy melee (4)" count={char.weaponTraining.hm} />
        <SimpleRoller label="Heavy ranged (4)" count={char.weaponTraining.hr} />
      </HeadedContainer>
    </div>
    <div>
      <HeadedContainer header="Profile">
        <div>Name: {char.profile.name}</div>
        <div>Appearance: {char.profile.appearance}</div>
        <div>Prompt: {char.profile.prompt}</div>
      </HeadedContainer>
      <HeadedContainer header={`Traits (${char.traits.length})`}>
        {#each char.traits as trait}
          <div class="inventoryItem">
            <div>
              <b>{trait.name}</b>
            </div>
            <div>{trait.description}</div>
          </div>
        {/each}
      </HeadedContainer>
      <HeadedContainer header={`Star Ship`}>
        Role: {char.starshipRole}

        <div>Role Actions</div>
        <ul>
          <li>Some action</li>
          <li>Some action</li>
          <li>Some action</li>
          <li>Some action</li>
        </ul>
      </HeadedContainer>
    </div>
    <div>
      <HeadedContainer header={`Inventory (${char.inventory.length} / 12)`}>
        {#each char.inventory as item}
          <div class="inventoryItem">
            <div>
              <b>{item.name}</b>
              <button on:click={() => removeItem(item.id)}>Remove</button>
            </div>
            <div>{item.description || ""}</div>
          </div>
        {/each}
        {#if char.inventory.length < 12}
          <div class="inventoryInput">
            <input placeholder="Item Name" bind:value={tempItemName} />
            <input
              placeholder="Item Description"
              bind:value={tempItemDescription}
            />
            <button disabled={!tempItemName} on:click={addItem}>Add Item</button
            >
          </div>
        {/if}
      </HeadedContainer>
    </div>
  </div>
</div>

<style>
  .three-column-layout {
    /* margin: 1em; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
  }

  .inventoryItem {
    padding: 0.5em;
    margin-top: 0.5em;
    border: 1px solid lightgrey;
  }

  .inventoryInput {
    margin-top: 1em;
  }

  /*
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>
