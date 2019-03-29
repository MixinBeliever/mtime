<template>
    <div class="shop">
        <div class="search" >
        <div>
            <a class="search_input" href="#/shop/search"><span>搜索电影正版周边</span></a>
            <a class="shop_car" href="javascript:;"></a>
        </div>
        </div>
        <banner :bannerlist="bannerlist" ref="myscrolltop"></banner>
        <navbar :navarr="navarr"></navbar>
        <mallshop></mallshop>
        <mallact :topic="topic"></mallact>
        <item :category="category"></item>
        <div class="interesting">
        <h3>———— 你可能感兴趣的 ————</h3>
        </div>
        <interesting :interesting="interesting"></interesting>
  </div>
</template>
<script>
// @ is an alias to /src
import banner from '../Banner'
import navbar from '../Nav'
import mallshop from '../Mallshop'
import mallact from '../Mallact'
import item from '../Item'
import interesting from '../Interesting'
import axios from 'axios'
import Swiper from 'swiper'

import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';

export default {

    data(){
      return{
        bannerlist: [],
        navarr: [],
        topic: [],
        category: [],  //玩具模型
        interesting: [], //interesting
      }
    },
    components: {
      banner: banner,
      navbar: navbar,
      mallshop: mallshop,
      mallact: mallact,
      item:item,
      interesting: interesting,
    },
    mounted(){
      MessageBox.confirm('不喜勿喷').then(action => {
        Indicator.open('加载中...');
        axios({
          url: '/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2019328891340381',
        }).then(res=>{
          console.log(res.data);
          this.bannerlist = res.data.scrollImg;
          this.navarr = res.data.navigatorIcon;
          this.topic = res.data.topic;
          this.category = res.data.category;

          this.$nextTick(()=>{
            Indicator.close();//DOM上树之后 隐藏
            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
          })
        })

        //感兴趣的列表
        axios.get('Service/callback.mi/ECommerce/RecommendProducts.api?t=201932816502812474&goodsIds=&pageIndex=1').then(res=>{
          this.interesting = res.data.goodsList;
        })

        window.onscroll = ()=>{
            if((document.documentElement.scrollTop || document.body.scrollTop) > this.$refs.myscrolltop.$el.offsetHeight){
              
                this.$store.state.isHeaderFixed = true;
            }else{
                this.$store.state.isHeaderFixed = false;
            }

        }
      }).catch(cancle=>{
        this.$router.push('/index');
      })
      
    },
    destroyed(){
        window.onscroll = null;
    }
}
</script>
<style lang="scss" scoped>
div.shop{
  div.search{
    height: 59px;
    background: #f6f6f6;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    position: absolute;
    top: 58px;
    left: 0;
    z-index: 10;
    div{
      display: flex;
      justify-content: space-between;
      width: 100%;
      a{
        display: block;
        height: 39px;
        text-decoration: none;
      }
      a.search_input{
        width: 80%;
        padding: 0 39px;
        background: #ffffff;
        background-image: url(../../../../public/imgs/search_ico_01.png);
        background-repeat: no-repeat;
        background-position: 10px;
        background-size: 25px 25px;
        span{
          display: block;

          line-height: 39px;
          color: #a5a5a5;
        }
      }
      a.shop_car{
        height: 39px;
        width: 20%;
        margin-left: 5px;
        background: url(../../../../public/imgs/i_h_shopping01.png) no-repeat center;
        background-size: 35px 30px; 
      }
    }
  }
  .fixed{
      position: fixed;
      top: 0;
  }
  div.interesting{
    padding: 10px;
    h3{
      font-weight: 200;
      color: #c5c5c5;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
