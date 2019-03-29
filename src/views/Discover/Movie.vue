<template>
	<div class="charts">
		这是影评	
        <div class="chartspic">
	      	<ul>
	      		<li>
	      		  <img src="http://img5.mtime.cn/mt/2019/03/04/095504.68978862_1280X720X2.jpg" >
	      		  <h2>
	      		  	<i><img src="http://img5.mtime.cn/mt/2019/03/04/095504.68978862_1280X720X2.jpg" alt=""></i>
	      		  	<span>都挺好</span>
	      		  	<p>“结合原著看苏母，才发觉她是那..</p>
	      		  </h2>	

	      		</li>
	      	</ul>
        </div>


        <ul class="topnews">
        	<li class="link" v-for="data in datalist">
        		<a href="">
        			<div class="toptxt">
        				<h2>
        					<b>{{data.title}}</b>
        				</h2>
        				<p class="txt_elli">
        					<i><img :src="data.userImage" alt=""></i>
        					<span>{{data.nickname}}-评分</span>
	    					<span class="ming" href="">《{{data.relatedObj.title}}》</span>
	    					<span class="pf">{{data.relatedObj.rating}}</span>
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
          	axios.get('/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=20193281983175621').then(res=>{
          		console.log(res.data)
          		this.datalist = res.data
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
				    i{
				    	width: 100px;
				    	height: 100px;
				    	float: left;
				    	margin-top: -90px;
				    	margin-left: 20px;

				    }
		    		span{

		    			float: left;
					    color: #fff;
					    font-size: 22px;
					    display: block;
					    margin-left: 20px;
		    		}
		    		p{
		    			display: block;
		    			float: left;
		    			margin-left: 130px;
		    			font-size: 15px;
		    			color:#f5f0f0; 

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
							color: #000;
						}
					}
					p{

						margin-top: 6.5px;
					    padding: 0 30px 0 0;
					    height: 16px;
					    i{
					    	float: left;
					    	display: block;
					    	width: 30px;
					    	height: 30px;
					    	border-radius: 50%;
					    	border: 1px solid #000;
					    	overflow: hidden;
					    	img{
					    		width: 30px;
					    		height: 30px;
					    	}
					    }
						span{
							float: left;
							  font-size: 16px;
  							  color: #777;

						}
						span.ming{
							width: 150px;
							height: 10px;
							float: left;

						}
						span.pf{
							width: 25px;
							height: 20px;
							background: #659d0e;
							color: #fff;
						}
					}
				}
				
			}
		}
	}

}		
</style>

