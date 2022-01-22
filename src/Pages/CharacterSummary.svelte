<script lang="ts">
  import type { ICharacter } from "../interfaces";

  export let character: ICharacter;
</script>

<div class="container">
  <div>
    <div class="name">
      {character.profile.name}
    </div>
  </div>
  <div class="stats">
    <span>SP: {character.stats.sp} / {character.stats.maxSp} </span>
    <span>HP: {character.stats.hp} / {character.stats.maxHp} </span>
    <span>Units: {character.units} </span>
    <span>{character.starshipRole} </span>
  </div>
</div>

<style>
  span {
    font-size: 1.2em;
  }
  .container {
    padding: 1em;
    margin-bottom: 1em;
    border: 2px solid grey;
  }
  .stats {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    text-align: left;
  }

  .name {
    font-size: 1.5em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5em;
  }
</style>
