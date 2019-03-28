<template>
	<div class="news">
		这是预告	
      <div class="newspic">
      	<ul>
      		<li>
      		  <img src="http://img5.mtime.cn/mg/2019/03/21/142620.19535364_120X90X4.jpg" >
      		  <h2>
      		  	<b> 基努·李维斯《疾速追杀3》预告片</b>
      		  	<i><img src="../../../public/imgs/u=1873585367,1967240943&fm=26&gp=0.jpg" alt=""></i>
      		  </h2>	
      		</li>
      	</ul>
      </div>

      <div class="newslist">
      	<ul class="_newsList">
      	
      		<li class="table" v-for="item,index in datalist" :key="index"  >
				<div class="box">
      			<div class="newstext1">
      				<a href="">
      					<img :src="item.coverImg">
      					<i><img src="../../../public/imgs/u=3491449200,1436466609&fm=26&gp=0.jpg" alt=""></i>
      				</a>
      			</div>
      			<div class="right">
      				<dl>
      					<dt>{{item.movieName}}</dt>
      					<dd>
      						<p></p>
      					</dd>
      					<dd class="bri">
      						<time>{{item.summary}}</time>
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
				datalist:[]
			}
		},
      mounted(){
      	axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2019328200363100').then(res=>{
               console.log(res.data)

               this.datalist = res.data.trailers
      	})
      }
        
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
				    i{
				    	position: absolute;
				    	width: 40px;
				    	height: 40px;
				    	background: red;
				    	top: 23px;
				    	right: 0px;
				    	border-radius: 50%;
				    	overflow: hidden;
				    	img{
				    		width: 100%;
				    		height: 100%;
				    	}
				    }
		    		b{
					    color: #fff;
					    font-size: 22px;
					    display: block;
		    		}
		       	}
		    }
		}	
	}	

    div.right{
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
  				padding: 10px 4px;
			    p{
			    	 font-size: 26px;
			    }
			}
			dd.bri{
			    margin-left:10px;
			    time{
                    margin-right: 10px;
			    }
			}
			    	
			    time{
			    	padding-top: 10px;
			    	color: red;
			    	font-size:14px;
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
				    	 		
				    	 	}
				    	 	i{
						    	position: absolute;
						    	width: 40px;
						    	height: 40px;
						    	background: red;
						    	top: 78px;
						    	left: 78px;
						    	border-radius: 50%;
						    	overflow: hidden;
						    	img{
						    		width: 100%;
						    		height: 100%;
						    	}				    	 		
				    	 	}
				    	   
				    	 }
				    }					
				}

			}
		}
	}
}
</style>

 