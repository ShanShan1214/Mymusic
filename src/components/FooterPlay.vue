<template>
  <div>
    <!-- <vue-slider
      ref="slider"
      :dotSize="[10, 10]"
      v-model="value"
      :min="min"
      :max="max"
      :interval="step"
      :tooltip-formatter="value"
      @change="change()"
      :tooltip="'always'"
      style="padding: 0"
    >
    </vue-slider> -->
    
    <footer></footer>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component';
// import "vue-slider-component/theme/antd.css";

export default {
    name:'FooterPlay',
  comments: {
    VueSlider,
  },
  data() {
    return {
      min: 1,
      max: 100,
      value: 0,
      step: 10,
    };
  },
  created() {
  },
  methods: {
   
    // 处理eslint 对 tooltip-formatter 类型报错
    change() {
      this.value = parseFloat(this.value.toFixed(this.getNum() + 1)).toString();
    }
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  background-color: var(--color-navbar-bg);
  height: 64px;
  line-height: 64px;
  justify-content: space-between;
  position: fixed;
  width: 80vw;
  padding: {
    left: 10vw;
    right: 10vw;
  }
  bottom: 0;
}
</style>