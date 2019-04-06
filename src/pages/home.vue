<template>
  <div class="home">
    <XHeader>
      <span>{{name}}</span>
      <x-icon
        slot="overwrite-left"
        type="navicon"
        size="35"
        style="fill:#fff;position:relative;top:-8px;left:-3px;"
        @click="navShow"
      ></x-icon>
    </XHeader>
    <div class="drawer" ref="drawer">
      <ul>
        <li v-for="(route,index) in routes" :key="index" @click="locationToggle(index)">
          {{route.text}}
        </li>
      </ul>
    </div>
    <Wrap :isShow="isShow" @navAction='navShow'></Wrap>
    <router-view></router-view>
  </div>
</template>

<script>
import { Icon, XHeader } from "vux";
import Wrap from "../components/wrap";
export default {
  data() {
    return {
      isShow: true,
      x:0,
      name:'改变命运',
      routes:[
        {
          path:'/index',
          text:"首页"
        },
        {
          path:"/index/calculate",
          text:"计算器"
        },
        {
          path:'/index/line',
          text:"曲线计算器"
        },
        {
          path:'/index/talk',
          text:'对话框'
        }
      ]
    };
  },
  components: {
    XHeader,
    Wrap
  },
  methods: {
    navShow() {
      this.isShow = !this.isShow;
      this.x = this.x != 0 ? 0 : -200;
      this.$refs.drawer.style.transform = 'translateX('+ this.x +'px)';
    },
    locationToggle(index){
      this.$router.push({path:this.routes[index].path});
      this.navShow();
    },
    setName(name){
      this.name = name;
    }
  },
  created() {
    this.$on("navAction",this.navShow);
    this.$bus.$on('getName',this.setName);
  },
  mounted() {
    this.navShow();
  },
};
</script>

<style lang='less' scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  .drawer {
    width: 1.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    z-index: 100;
    font-size: .16rem;
    background: rgba(0,0,0,.5);
    transition: transform .3s;
    ul{
      margin-top:.44rem;
      color:#fff;
    }
    li {
      line-height: .36rem;
    }
  }
}
</style>
