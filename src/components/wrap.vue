<template>
  <div id="wrap" v-if="isShow" @click='navAction'></div>
</template>

<script>
export default {
  props: {
    isShow: Boolean
  },
  created() {
    console.log(this);
    
  },
  methods: {
    navAction(){
      this.$emit('navAction')
    }
  },
};
</script>

<style>
#wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
