<template>
    <div id="generater">
        <div class="picture">
            <img src="static/image/header.png">
        </div>
        <p class="text">{{data.tips}}</p>
        <div class="generater-main">
            <div class="type">
                <span>收益率</span>
                <i>{{data.direction == true ? "做空 ↑":"售出 ↓"}}</i>
            </div>
            <div :class="{rate:true,up:data.rates>0}">{{data.rates}}%
            </div>
            <ul class="price">
                <li><span>EOS季度</span><span>{{data.time}}</span></li>
                <i></i>
                <li><span>最新价</span><span>{{data.price2}}</span></li>
                <i></i>
                <li><span>开仓均价</span><span>{{data.price}}</span></li>
            </ul>
        </div>
        <div class="entry">
            <p>更多有意思的工具，长按图片扫描二维码</p>
            <img src="static/image/entry.png">
        </div>
    </div>
</template>

<script>
import { XButton } from 'vux'
export default {
    data(){
        return {
            data:{}
        }
    },
    components:{
        XButton
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem("param"));
        console.log(this.data);
    },
}
</script>

<style lang='less'>
#generater {
    background: #3269bc;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.picture {
    margin: .3rem 0;
    img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }
}
.text {
    font-size: .18rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 3px;
}
.generater-main {
    margin-top: .6rem;
    font-size: .16rem;
}
.type {
    span {
        font-size: .16rem;
        color: #fff;
        letter-spacing: 2px;
    }
    i {
        margin-left: .1rem;
        font-size: .12rem;
        font-style: normal;
        border: solid 1px #e46170;
        border-radius: .06rem;
        color: #e46170;
        padding: .02rem;
    }
}
.rate {
    margin-top: .24rem;
    font-size: .36rem;
    font-weight: 700;
    color:#6fe05c;
}
.up {
    color:#ff6a7a;
}
.price {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .12rem;
    margin-top: .5rem;
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: relative;
        padding: .04rem;
    }
    i {
        display: block;
        width: 1px;
        height: 100%;
        background: #ddd;
        position: relative;
        height: 50px;
    }
    span{
        margin-bottom: .1rem;
    }
}
.entry {
    position: absolute;
    left: 0;
    right: 0;
    bottom:0;
    height: 1.1rem;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: .14rem;
    img{
        width: .8rem;
        height: .8rem;
    }
}
</style>
