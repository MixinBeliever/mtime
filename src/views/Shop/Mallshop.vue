<template>
    <article class="mallshop">
        <div class="slot">
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
        display: flex;
        flex-direction: column;
        div.slot{
            position: relative;
            div.shop1{
                width: 50%;
                float: left;
                box-sizing: border-box;
                border-right: 1px solid #cccccc;
                img{
                    width: 100%;
                }
            }
            div.shop2{
                width: 50%;
                float: left;
                border-bottom: 1px solid #cccccc;
                img{
                    width: 100%;
                }
            }
            div.shop3{
                width: 50%;
                background: lightcoral;
                float: left;
                img{
                    width: 100%;
                }
            }
        }
        div.shoplong{
            width: 100%;
            border-top: 1px solid #cccccc;
            img{
                width: 100%;
            }
        }
    }
</style>
