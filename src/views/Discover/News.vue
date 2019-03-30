<template>
	<div class="news">
	
      <div class="newspic">
      	<ul>
      		<li>
      		  <img :src="leileilist.imageUrl" >
      		  <h2>
      		  	<b> {{leileilist.title}}</b>
      		  </h2>	
      		</li>
      	</ul>
      </div>

      <div class="newslist">
      	<ul class="_newsList">
      		<li class="table"  v-for="item,index in datalist" :key="index" v-if="item.images.length !== 0">
      			<p>{{item.title}}</p>
      			<div class="newstext" >
      				<a href="" >
      					<img  alt="" v-for="list,index in item.images" :key="index" :src="list.url1">
      				
      				</a>
      			</div>
      			<time>60分钟</time>
      		</li>
      		<li class="table"   v-else>
				<div class="box">
      			<div class="newstext1">
      				<a href="">
      					<img :src="item.image">
      				</a>
      			</div>
      			<div class="right">
      				<dl>
      					<dt>{{item.title}}</dt>
      					<dd>
      						<p></p>
      					</dd>
      					<dd class="bri">
      						<time>60分钟</time>
      						<b>评论:{{item.commentCount}}</b>
      					</dd>
      				</dl>
      			</div>             	
             </div>
      		</li>

      	</ul>
      </div>

     <!--  <div class="newslist">
      	<ul class="_newsList">
      		<li class="table" >
             
      		</li>
      	</ul>
      </div> -->

	</div>


</template>


<script>
 import axios from 'axios'


	export default{
		data(){
			return{
				datalist:[],
				leileilist:[]
			}
		},
      mounted(){
      	axios.get('/Service/callback.mi/News/NewsList.api?t=201932810404715298&pageIndex=1').then(res=>{
               // console.log(res.data.newsList)

               this.datalist = res.data.newsList
      	}),
      	axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20193309523168353').then(res=>{
      		console.log(res.data.topList)
      		this.leileilist = res.data.news
      	})
      },
	}
</script>

<style lang="scss" scoped>
div.news{
	div.newspic{
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
	div.newslist{
	    box-sizing: border-box;
	   
		ul._newsList{
			padding: 0 0 0 20px;
			li.table{
		       	border-bottom: 1px solid #ddd;
			    padding: 20px 0 0.5px;
			    cursor: pointer;
			    position: relative;
			   
			    p{
			    	font-size: 20px;
				    line-height: 1.3;
				    font-weight: bold;
				    margin-bottom: 10px;
							    
			    }
			    div.newstext{
			    	
			    	display: flex;
			    	width: 100%;

			    	 a{
			    	 	 box-sizing: border-box;

			    	 	img{
			    	 		display: block;
			    	 		width: 29.3%;
			    	 		height: 100%;
			    	 		float: left;
			    	 		padding-left: 10px;
	
			    	 	}
			    	   
			    	 }
			    }
			    div.right{
			    	 box-sizing: border-box;
			    	padding: 0 15px;
			    	dl{
			    		margin-top: -4px;
					    position: relative;
					    height: 120px;
					    width: 100%;
			    		dt{
			    			font-size: 20px;
						    line-height: 1.3;
						    font-weight: bold;
			    		}
			    		dd{
			    			color: #777;
  							/*padding: 10px 4px;*/
			    			p{
			    				 font-size: 26px;
			    			}
			    		}
			    		dd.bri{
			    		/*	margin-left:10px;*/
			    			time{
                               margin-right: 10px;
			    			}
			    			b{ 
                               margin-left: 30px;
			    			}
			    		}
			    	}
			    }
			    time{
			    	padding-top: 10px;
			    	color: #777777;
			    	font-size:14px;
			    }
			  	
			}
		}
	}


	div.newslist{
	    box-sizing: border-box;
	   
		ul._newsList{
			padding: 0 0 0 20px;
			li.table{
		       	border-bottom: 1px solid #ddd;
			    padding: 20px 0 0.5px;
			    cursor: pointer;
			    position: relative;
				div.box{
					display: flex;
				    div.newstext1{
				    	/*width: 100%;*/
				    	height: 100px;
				    	 a{

				    	 	img{
				    	 		display: block;
				    	 		width: 118px;
				    	 		height: 100px;
				    	 		float: left;
				    	 		margin-left: 10px;
				    	 	}
				    	   
				    	 }
				    }					
				}

			}
		}
	}
}
</style>

 