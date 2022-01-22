<script>
  import HeadedContainer from "./HeadedContainer.svelte";
  import SimpleRoller from "./SimpleRoller.svelte";

  export let attributes;
</script>

<HeadedContainer header="Attributes">
  <SimpleRoller label="Prowess" count={attributes.prowess} />
  <SimpleRoller label="Technqiue" count={attributes.technique} />
  <SimpleRoller label="Acuity" count={attributes.acuity} />
  <SimpleRoller label="Social" count={attributes.social} />
</HeadedContainer>
