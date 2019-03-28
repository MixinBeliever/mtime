<template>
	<div class="charts">
		这是排行榜	
        <div class="chartspic">
	      	<ul>
	      		<li>
	      		  <img src="http://img5.mtime.cn/mg/2017/03/01/173620.86296561.jpg" >
	      		  <h2>
	      		  	<b> 那些荣获奥斯卡的LGBT电影</b>
	      		  </h2>	
	      		</li>
	      	</ul>
        </div>

        <div class="tu">
	      	<ul>
	      		<li><a href=""><img src="" alt=""><span>时光Top100</span></a></li>
	      		<li><a href=""><img src="" alt=""><span>华宇Top100</span></a></li>
	      		<li><a href=""><img src="" alt=""><span>全球票房榜</span></a></li>
	      	</ul>	
        </div>
        <ul class="topnews">
        	<li class="link" v-for="data in datalist">
        		<a href="">
        			<div class="toptxt">
        				<h2>
        					<b>{{data.topListNameCn}}</b>
        				</h2>
        				<p class="txt_elli">
        					<span>{{data.summary}}</span>
        				</p>
        			</div>
        			<i></i>
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
          		datalist:[]
          	}
          },
          mounted(){
          	axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=20193281713844947&pageIndex=1').then(res=>{
          		console.log(res.data)
          		this.datalist = res.data.topLists
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
				padding:20px 10px 20px 20px;
				background: red;

				a{
					text-decoration:none;
					img{}
					span{
						font-size: 19px;
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
			width: 100%;
			padding: 0 0 0 15px;
			a{
				width: 100%;
				text-decoration:none;
				display: block;
			    text-align: left;
			    padding: 17px 0;
			    position: relative;
			    border-bottom: 1px solid #d8d8d8;
			    overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

				div.toptxt{
					h2{
						margin-right: 30px;
                        line-height: 1.4;
						b{
							font-size: 20px;
						}
					}
					p{
						margin-top: 6.5px;
					    padding: 0 30px 0 0;
					    height: 16px;
						span{
							  font-size: 16px;
  							  color: #777;

						}
					}
				}
				i{
					
				}
			}
		}
	}

}		
</style>

