<template>
  <div class="verify-vue" style="margin-bottom: 50px">
    <Verify
      @success="alert('success');"
      @error="alert('error');"
      :type="1"
    ></Verify>
  </div>
</template>

<script>
import Verify from "vue2-verify";

export default {
  name: "VerifyVue",
  components: {
    Verify
  },
  methods: {
    alert(text) {
      alert(text);
    }
  }
};
</script>
