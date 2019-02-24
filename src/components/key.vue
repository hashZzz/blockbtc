<template>
    <div class="form-key">
        <XInput title='入仓价格' v-model='price'></XInput>
        <XInput title='最新价格' v-model='price2'></XInput>
        <XInput title='标语' v-model='tips'></XInput>
        <XInput title='收益率' v-model='rates'></XInput>
        <Calendar  title='开仓时间' v-model='time'></Calendar >
        <div>
            <XSwitch :title='direction == true ?"做多":"做空"' v-model='direction'></XSwitch>
        </div>
        <XButton class='submit' @click.native="toKey">提交</XButton>
        <router-view></router-view>
    </div>
</template>

<script>
import {XButton, XInput,XSwitch,Calendar  } from "vux";
export default {
    data(){
        return {
            rates:"",
            direction:true,
            price:'',
            price2:"",
            time:"",
            tips:"",
        }
    },
    components:{
        XButton,
        XInput,
        XSwitch,
        Calendar 
    },
    methods: {
        toKey(){
            var obj = {
                direction:this.direction,
                price:this.price,
                price2:this.price2,
                time:this.time,
                tips:this.tips,
                rates:this.rates
            };
            sessionStorage.setItem('param',JSON.stringify(obj));
            this.$router.push({
                name:"generater"
            })
        }
    },
}
</script>

<style>
.form-key {
    font-size: .12rem;
}
.submit {
    width: 1.2rem!important;
}
.inline-calendar {
    font-size: .12rem;
}
</style>
