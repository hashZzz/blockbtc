<template>
    <div class="form-key">
        <XInput title='入仓价格' v-model='startPrice'></XInput>
        <XInput title='最新价格' v-model='newPrice'></XInput>
        <XInput title='标语' v-model='tips'></XInput>
        <!-- <XInput title='收益率' v-model='rates'></XInput> -->
        <!-- <XInput title='开仓均价' v-model='average'></XInput> -->
        <Calendar  title='开仓时间' v-model='time'></Calendar >
        <div>
            <XSwitch :title='direction == true ?"做空":"做多"' v-model='direction'></XSwitch>
        </div>
        <XButton class='submit' @click.native="toKey">提交</XButton>
    </div>
</template>

<script>
import {XButton, XInput,XSwitch,Calendar  } from "vux";
export default {
    data(){
        return {
            direction:true,
            newPrice:'',
            startPrice:"",
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
            var rates = this.result();
            var obj = {
                direction:this.direction,
                newPrice:this.newPrice,
                startPrice:this.startPrice,
                time:this.time,
                tips:this.tips,
                rates:rates
            };
            sessionStorage.setItem('param',JSON.stringify(obj));
            this.$router.push({
                name:"generater"
            })
        },
        result(){
                var distance = this.newPrice - this.startPrice;
                var key = 1;
                if(distance>0&&this.direction){
                    key = -1;
                }else if(distance<0&&this.direction){
                    key = 1;
                }else if(distance>0&&!this.direction){
                    key = 1
                }else if (distance<0&&!this.direction){
                    key = -1;
                }
                var result = (Math.abs(((distance)/this.newPrice)*20 * 100)*key).toFixed(2)
                return result
            }
    },
    created(){
        this.$bus.$emit("getName",'收益图');
    }

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
