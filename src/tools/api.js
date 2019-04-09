//http://blockbtc.cn:8080/mtg/init?coinName=%27ETH%27&cur=168&min=131&max=185

import axios from 'axios';

axios.interceptors.request.use(config => {
    return config;
 

}, error => {  //请求错误处理

});

export function getConversation(){
    return new Promise((resolve,reject)=>{
        axios({
            method:"get",
            url:'/mtg/init',
            params:{
                coinName:"%27ETH%27",
                cur:"168",
                min:"131",
                max:"185"
            }
        }).then(res=>{
            resolve(res.data);
        })
    })
}