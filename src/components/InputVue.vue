<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return { type: "text", name: "test", err: "" };
      },
    },
    message: { type: String },
  },

  computed: {
    text: function () {
      let name = this.info.name;
      let err = this.info.err;
      if (err) {
        return name + err;
      }
      return name;
    },
  },
};
</script>
<template>
  <form class="form-floating">
    <input
      :type="info.type"
      :class="['form-control', { 'is-invalid': info.err }]"
      :id="info.name"
      :placeholder="info.name"
      :value="message"
      @input="$emit('update:message', $event.target.value)"
      autocomplete="on"
    />
    <label :for="info.name">{{ text }}</label>
  </form>
</template>
