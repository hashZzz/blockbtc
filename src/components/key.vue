<template>
    <div class="form-key">
        <XInput title='入仓价格' v-model='price'></XInput>
        <XInput title='最新价格' v-model='price2'></XInput>
        <XInput title='标语' v-model='tips'></XInput>
        <!-- <XInput title='收益率' v-model='rates'></XInput> -->
        <!-- <XInput title='开仓均价' v-model='average'></XInput> -->
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
            direction:true,
            price:'',
            price2:"",
            time:"",
            tips:"",
            average:'',
        }
    },
    components:{
        XButton,
        XInput,
        XSwitch,
        Calendar 
    },
    methods: {
        getRates(){
            var reduce = - (this.price - this.price2);
            var result = ((reduce/this.price2)*2000).toFixed(2);
            return result;
        },
        toKey(){
            var obj = {
                direction:this.direction,
                price:this.price,
                price2:this.price2,
                time:this.time,
                tips:this.tips,
                rates:this.getRates() + ''
            };
            console.log(obj);
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
