<template>
  <div class="countup-vue">
    <icount-up
      :startVal="startVal"
      :endVal="endVal"
      :decimals="decimals"
      :duration="duration"
      :options="options"
      @ready="onReady"
    >
    </icount-up>
  </div>
</template>

<script>
import IcountUp from 'vue-countup-v2';

export default {
  name: "CountupVue",
  components: {
    IcountUp
  },
  data() {
    return {
      startVal: 0,
      endVal: 120500,
      decimals: 0,
      duration: 2.5,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
    }
  },
  methods: {
    onReady(instance, CountUp) {
      instance.update(this.endVal + 100);
    }
  }
};
</script>

<style>
.countup-vue {
  font-size: 30px;
  margin: 0;
  color: #4d63bc;
}
</style>
