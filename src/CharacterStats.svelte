<script lang="ts">
  import HeadedContainer from "./HeadedContainer.svelte";
  import { ICharacterStats } from "./interfaces";
  import StatControl from "./StatControl.svelte";

  export let stats: ICharacterStats;
</script>

<HeadedContainer header="Stats">
  <div class="container">
    <StatControl currentValue={stats.sp} maxValue={stats.maxSp} label={"SP"} />
    <StatControl currentValue={stats.hp} maxValue={stats.maxHp} label={"HP"} />
  </div>
</HeadedContainer>

<style>
  .container {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
</style>
