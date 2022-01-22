<script lang="ts">
  export let header;
</script>

<div class="HeadedContainer">
  <h2>{header}</h2>
  <slot />
</div>

<style>
  .HeadedContainer {
    border: 2px solid gray;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0.25em;
    color: gray;
  }
</style>
