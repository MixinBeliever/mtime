<template>
	<div class="news">

      <div class="newspic">
      	<ul>
      		<li>
      		  <img :src="leileilist.hightUrl" >
      		  {{leileilist.title}}
      		  <h2>
      		  	<b> {{leileilist.title}}</b>
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
				datalist:[],
				leileilist:[]
			}
		},
      mounted(){
      	axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2019328200363100').then(res=>{
               console.log(res.data)

               this.datalist = res.data.trailers
      	}),
      	axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20193309523168353').then(res=>{
      		console.log(res.data)
      		this.leileilist = res.data.trailer
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
    	box-sizing: border-box;
    	width: 58%;
		dl{
		 	margin-left: 4%;
			margin-top: -4px;
			position: relative;
			height: 120px;
			width: 100%;
			overflow: hidden;
			dt{
			 		
				font-size: 20px;
			    line-height: 1.3;
			    font-weight: bold;
			}
			dd{
				
			    color: #777;
  				
			    p{
			    	 font-size: 26px;
			    }
			}
			dd.bri{
				
			    margin-left:10px;
			    overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
			    time{
                    margin-right: 10px;
                    padding-top: 10px;
			    	color: #777777;
			    	font-size:18px;
			    }
			}
			    	
			   /* time{
			    	padding-top: 10px;
			    	color: #777777;
			    	font-size:18px;
			    }*/
			  	
			
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
					box-sizing: border-box;
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
				    	 		box-sizing: border-box;
						    	position: absolute;
						    	width: 40px;
						    	height: 40px;
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

 