<template>
    <div class="calender">
        <div class="calender-header"></div>
        <div class="calender-wrap">
            <ul class="calender-date">
                <li v-for="(weekday,i) in weekdays" :key="i" class="weekday"><span>{{weekday}}</span></li>
                <li v-for="(item,index) in 31" :key='index + 7'><span>{{item}}</span><b class="success">吉</b></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            weekdays:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
        }
    },
    methods: {
        getDays(){
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let nowParse = Date.parse(now);
            console.log(nowParse);
        }
    },
    created() {
        this.getDays();
        this.$bus.$emit("getName",'日历');
    },
}
</script>

<style lang='less' scoped>
.calender {
    .calender-header {

    }
    .calender-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .16rem;
    }
    .calender-date {
        display: flex;
        flex-wrap: wrap;
        font-size: .24rem;
    }
    .calender-date li{
        width: 14%;
        margin-bottom: .1rem;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            display:inline-block;
            width: .4rem;
            height: .4rem;
            padding: .1rem;
        }
        .success{
            color: #f00;
            position: absolute;
            font-size: 12px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .active {
        span{
            border: solid 1px #1890ff;
            border-radius: 50%;
        }
    }
    .weekday {
        display: flex;
        width: .3rem;
        font-size: 12px;
        span{
            padding: 0 !important;
            height: auto !important;
        }
    }
}
</style>
