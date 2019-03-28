<template>
    <article class="mallshop">
        <div class="shop1">
            <a href="">
                <img src="../../../public/imgs/get (11).jpg" alt="">
            </a>
        </div>
        <div class="shop2">
            <a href="">
                <img src="../../../public/imgs/get (12).jpg" alt="">
            </a>
        </div>
        <div class="shop3">
            <a href="">
                <img src="../../../public/imgs/get (13).jpg" alt="">
            </a>
        </div>
        <div class="shoplong">
            <a href="">
                <img src="../../../public/imgs/get (14).jpg" alt="">
            </a>
        </div>
    </article>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    article.mallshop{
        margin-top: 15px;
        position: relative;
        height: 340px;
        div.shop1{
            width: 50%;
            position: absolute;
            left: 0;
            top: 0;
            border-right: 1px solid #cccccc;
            img{
                width: 100%;
            }
        }
        div.shop2{
            width: 50%;
            position: absolute;
            right: 0;
            top: 0;
            border-bottom: 1px solid #cccccc;
            img{
                width: 100%;
            }
        }
        div.shop3{
            width: 50%;
            background: lightcoral;
            position: absolute;
            right: 0;
            top: 112.8px;
            img{
                width: 100%;
            }
        }
        div.shoplong{
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 1px solid #cccccc;
            img{
                width: 100%;
            }
        }
    }
</style>
