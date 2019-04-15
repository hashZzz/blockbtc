<template>
    <div class="talking">
        <ul>
            <li v-for="(item,index) in list" :key='index' :class="['text-item',(item.type == 'even' ? 'even-item':'odd-item')]">
                <img :src="item.type == 'even' ? evenSrc:oddSrc">
                <p :class="(item.type == 'even' ? 'even':'odd')" v-html="item.text"></p>
            </li>
        </ul>
        <div class="todoArea">
            <div class="todo-bar vux-1px-t">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yuyin"></use>
                </svg>
                <div class="input">
                    <XInput type="text" placeholder=' ' v-model="text" :show-clear="false"></XInput>
                </div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiaolian"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { XInput } from 'vux';
import { getConversation } from './../tools/api.js'
export default {
    data(){
        return {
            evenSrc:'./../../static/image/WechatIMG120.jpeg',
            oddSrc:'./../../static/image/WechatIMG121.jpeg',
            list:[
                {
                    type:"even",
                    text:'二狗子，你怎么看这种'
                },
                {
                    type:"odd",
                    text:'还能怎么看？快看这个老司机分析'
                },
                {
                    type:'even',
                    text:'哪个老司机 说狗话！'
                },
                {
                    type:"odd",
                    text:"微信关注加这个老司机好友"
                },
                {
                    type:'odd',
                    text:'<img class="entry-png" src="./../../static/image/entry.png">'
                }
            ],
            text:'',

        }
    },
    components:{
        XInput
    },
    methods: {
        sendText(type,text,index){
            let len = this.list.length;
            let isEven = len % 2 == 0 ? 'even' : 'odd';
            let liType = type || isEven;
            if(index) {
                this.list.splice(index,0,{
                    type:liType,
                    text:text || this.text
                })
            }else{
                this.list.push({
                    type:liType,
                    text:text || this.text,
                });
            }

            this.text = '';
        },
        formatterText(text){
            var strArys = text.split("   ");
            strArys = strArys.map((item)=>{
                if(isNaN(parseInt(item))){
                    return item += '<br/>'
                }else{
                    return item += '<br/>'
                }
            })
            return strArys.join("");
        },
        formatterTimer(time){
            function setZero(num){
                return num > 10 ? num : "0" + num;
            }
            var timer = time ? new Date(time) : new Date();
            var year = timer.getFullYear();
            var month = setZero(timer.getMonth() + 1);
            var day = setZero(timer.getDate());
            var hour = setZero(timer.getHours());
            var minutes = setZero(timer.getMinutes());
            var second = setZero(timer.getSeconds());
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
            //yyyy-MM-dd HH:mm:ss
        },
        setDate(time){
            var result = new Date(time);
            result.setDate(result.getDate()-7);
            return result;
        }
    },
    created() {
        this.$bus.$emit("getName",'大狗子');
        let now = this.formatterTimer()
        var sevenBefore = this.formatterTimer(this.setDate(now));
        getConversation(sevenBefore,now,60).then(res=>{
            if(res.code == 1){
                let txt = this.formatterText(res.result.content);
                this.sendText('odd',txt,2)
            }
        })
    },
    mounted() {
        var self = this;
        document.onkeypress = function(ev){
            var ev = ev || event;
            if(ev.keycode == 13 || ev.which == 13){
                self.sendText();
            }
        }
    }

}
</script>

<style lang='less' scoped>
@import '~vux/src/styles/1px.less';
.talking {
    padding-top: .16rem;
    position: absolute;
    top: .44rem;
    bottom: 0;
    width: 100%;
    background: #f2f2f2;
}
.text-item {
    display: flex;
    align-items: center;
    img {
        width: .44rem;
        height: .44rem;
        border-radius: 50%;
        margin: .06rem .08rem;
    }
    p{
        font-size: .14rem;
        color: #000;
        border: solid 1px #ddd;
        padding: .1rem;
        text-align: left;
        background: #fff;
    }
    .even {
        border-radius: .12rem .12rem .12rem 0;
    }
    .odd {
        border-radius: .12rem .12rem 0 .12rem;
    }
}
.even-item {
    justify-content: flex-start;   
    padding: 0 .2rem 0 0; 
}
.odd-item {
    justify-content: flex-end;
    padding: 0 0 0 .2rem;
    img {
        order: 1;
    }
    p {
        order: 0;
    }
}

.todo-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: .4rem;
    font-size: .16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    svg {
        width: .3rem;
        height: .3rem;
    }
    .input {
        width: 100%;
        height: .4rem;
    }
}

/deep/ .entry-png {
    width: 1rem;
    height: 1rem;
}
</style>
