<template>
	<div class="charts">
	
        <div class="chartspic">
	      	<ul>
	      		<li @click.prevent="handleClick(leileilist.id)">
	      		  <img :src="leileilist.imageUrl" >
	      		  <h2>
	      		  	<b> {{leileilist.title}}</b>
	      		  </h2>	
	      		</li>
	      	</ul>
        </div>

        <div class="tu">
	      	<ul>
	      		<li><a href=""><img src="../../../public/imgs/1.png" alt=""><span class="blue">时光Top100</span></a></li>
	      		<li><a href=""><img src="../../../public/imgs/2.png" alt=""><span class="green">华宇Top100</span></a></li>
	      		<li><a href=""><img src="../../../public/imgs/3.png" alt=""><span class="yellow">全球票房榜</span></a></li>
	      	</ul>	
        </div>
        <ul class="topnews">
        	<li class="link" v-for="data,index in datalist" >
        		<a href="" @click.prevent="handleClick(data.id)">
        			<div class="toptxt">
        				<h2>
        					<b>{{data.topListNameCn}}</b>
        				</h2>
        				<p class="txt_elli">
        					<span>{{data.summary}}</span>
        				</p>
        			</div>
        			<i><img src="../../../public/imgs/timgHTGLBTGC.jpg" alt=""></i>
        		</a>
        	</li>
        </ul>

    </div>

</template>

<script>
	 import axios from 'axios'
	export default{
          data(){
          	return{
          		datalist:[],
          		leileilist:[],
          	}
          },
          methods:{
          	handleClick(id) {
          		console.log(id);
          		// 编程跳转页面
          		this.$router.push(`/chartsxq/${id}`);
          	}
          },
          mounted(){
          	axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=20193281713844947&pageIndex=1').then(res=>{
          		console.log(res.data)
          		this.datalist = res.data.topLists
          	}),
	      	axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20193309523168353').then(res=>{
	      		console.log(res.data)
	      		this.leileilist = res.data.topList
	      	})            	
          }
	}
</script>

<style lang="scss" scoped>
div.charts{
	div.chartspic{
	 	box-sizing: border-box;
	  	ul{
		   	li{
			    position: relative;
			    height: 275px;
			    overflow: hidden;
		    	img{
			    	width: 100%;
			    	height: auto;
		    	}
		    	h2{
				    background: rgba(0,0,0,0.5);
				    position: absolute;
				    left: 0;
				    right: 0;
				    bottom: 0;
				    padding: 24px 0 24px;
				    text-align: center;
		    		b{
					    color: #fff;
					    font-size: 22px;
					    display: block;
		    		}
		       	}
		    }
		}	
	}
	div.tu{
		width: 100%;
		box-sizing: border-box;
		ul{overflow: hidden;
			li{ 
				float: left;
				width: 33.3%;
				padding:20px 0px 20px 0px;

				a{
					height: 100%;
					display: flex;
					justify-content:center;
					align-items: center;
					flex-direction: column; 
					text-decoration:none;
					img{
						width:70px;
						height:70px;
						border-radius: 50%;
						overflow: hidden; 
						margin-bottom: 20px;
						text-align: center;
						display: inline-block;
					}
					span{
						font-size: 19px;
					}
					span.blue{
						color: #1498c9;
					}
					span.green{
						color: #3bc7c2;
					}
					span.yellow{
						color:#ffc12d;
					}

				}

			}
		}
	}
	ul.topnews{

		width: 100%;
		border-top: 1px solid #d8d8d8;
        margin-top: 21px;
        box-sizing: border-box;
		li.link{
			width: 95%;
			padding: 0 0 0 15px;
			a{
				width: 100%;
				text-decoration:none;
				display: block;
			    text-align: left;
			    padding: 17px 0;
			    position: relative;
			    border-bottom: 1px solid #d8d8d8;


				div.toptxt{
					h2{
						margin-right: 30px;
                        line-height: 1.4;
						b{
							font-size: 20px;
							color: #000;
						}
					}
					p{
						margin-top: 6.5px;
					    padding: 0 30px 0 0;
					    height: 20px;
					    overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
						span{
							  font-size: 16px;
  							  color: #777;

						}
					}
				}
				i{
					display: block;
					width: 15px;
					height: 15px;
					position: absolute;
					top: 38px;
					right: 25px;
				
					img{
                         background: #777;
					}


				}
			}
		}
	}

}	

</style>

