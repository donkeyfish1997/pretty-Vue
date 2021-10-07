<script>
export default {
  props: ["message"],
  setup(props) {
    const message = props.message;
    console.log("message", message);
  },
};
</script>
<template>
  <input
    :value="message"
    @input="$emit('update:message', $event.target.value)"
  />
</template>
<style>
</style>