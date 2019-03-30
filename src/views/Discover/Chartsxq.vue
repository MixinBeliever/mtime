<template>
 <div class="box" v-if="filminfo" >
 	    <header>
            <router-link to="/discover/charts" tag="span"> < </router-link>
            <router-link to="/search" tag="h2"> 搜电影 </router-link>
        </header>
   <div class="sy" >
  	  <span v-if="leilei.name">{{leilei.name}}</span>
  	  <p v-if="leilei.summary">{{leilei.summary}}</p>   	
   </div>			

	<div class="zy">
	    <a href="">
	     	<ul>
	     		<li v-for="data in filminfo">
	     			<p class="glotop">
	     				<span>{{data.rankNum}}</span>
	     			</p>
	     			<div class="table">
	     				<div class="glotop_pic">
	     					<a href="">
	     						<img :src="data.posterUrl" alt="">
	     					</a>
	     				</div>
	     				<dl class="td">
	     					<dt>
	     						<a href=""> <span>{{data.name}}({{data.decade}})</span><i>{{data.rating}}</i></a>
	     					</dt>
	     					<dd class="entitle">
	     						<p>{{data.nameEn}}</p>
	     					</dd>
	     					<dd class="glo_movieinfo">
	     						<a href="">
	     							<p>导演：{{data.director}}</p>
	     							<p>主演：{{data.actor}} {{data.actor2}}</p>
	     							<p>{{data.releaseDate}} {{data.releaseLocation}}</p>
	     						</a>
	     					</dd>
	     				</dl>
	     			</div>
	     			<a href="" class="glo_tip ">
	     				<div class="zi">
	     				  {{data.remark}}
	     				</div>
	     			</a>
	     			<p class="glo_line"></p>

	     		</li>
	     	</ul>
	    </a>
	</div>	
 </div>
</template>

<script>
	import axios from 'axios'
	export default{
		data (){
			return{
				filminfo: null,
				leilei: null

			}
		},
		mounted(){
			// console.log(location.hash);
			// console.log(this.$route.params.myid);
			axios.get(`/Service/callback.mi/TopList/TopListDetails.api?t=201932917361766126&pageIndex=1&type=2&toplistId=${this.$route.params.myid}&pageSubAreaID=1475`).then(res=>{
               console.log(res.data)
               this.filminfo = res.data.movies,
               this.leilei = res.data.topList


			})
		}

	}
</script>

<style lang="scss" scoped>
 div.box{
    header{
        height:60px;
        width: 100%;
        background:#1C2635;
        overflow: hidden;
        span{
            float: left;
            color: #fff;
            font-size: 30px;
            margin-top:3px;
            margin-left: 20px
        }
        h2{
            float: right;
            color: #fff;
            font-size: 20px;
            margin-top:12px;
            margin-right: 20px
        }
    }
 	
 	div.sy{
 		box-sizing: border-box;
 		background: #f6f6f6;
 		border-bottom: 3px solid #dfdfdf;
 		span{
 			display: block;
 			margin-top:20px;
 			font-size: 20px;
 			text-align: center;
 			
 		}
 		p{
 			display: block;
 			margin-top: 20px;
 			margin-bottom: 20px;
 			padding-left: 20px;
 			color: #777;
 			
 		}

 	}

 	div.zy{
 		box-sizing: border-box;
        background: #fff;
 		a{
 			box-sizing: border-box;
 			text-decoration: none;
 			ul{
 				padding-top: 10px;
 				li{
 					position: relative;
    				zoom: 1;
 					p.glotop{
 						width: 30px;
 						height: 30px;
 						border-radius: 50%;
 						background: #bbbbbb;
 						position: absolute;
 						top:0px;
 						left: 5px;
 						span{
 						  display: block;
						  color: #fff;
						  font-size: 20px;
						  text-align: center;
 						}
 					}
 					div.table{
 						box-sizing: border-box;
 						 display: -webkit-box;
 						  width: 100%;
 						div.glotop_pic{
 							margin-left: 40px;
 							margin-right: 15px;
 							a{
 								display: block;
 								width: 94px;
 								height: 134px;
 								img{
 							        width: 100%;
								    height: auto;
								    display: block;
								    border: 1px solid #ddd;
 								}
 							}
 						}
 						dl.td{
 							box-sizing: border-box;
 							width:58%;
 							margin-right: 15px;
 							dt{
 								 margin-top: -2px;
 								a{
 									span{
 									color: #000;
 									font-size: 20px;
 								    font-weight: 900;
 									}
 								    i{
 								    	
 								    	background: #659d0e;
 								    	font-weight: 0;
 								    	font-style:normal

 								    }
 								}
 							}
 							dd.entitle{
 							    padding-top: 5px;
 								p{
 									color: #bbb;
                                    line-height: 1.2;
 								}
 							}
 							dd.glo_movieinfo{
 							    margin-top: 16px;
 								a{
 									p{
 										display: block;
 										height: 1.7em;
                                        overflow: hidden;
                                        color:#000;
 									}
 									p{}
 									p{}
 								}
 							}
 						}
 					}
 					a.glo_tip{
 						/*width: 248px;
 						height: 32px;*/
 					    background: pink;


 						div.zi{
 							/*width: 330px;
 						    height: 39px;*/
 					        background: #f6f6f6;
 					        margin-left: 38px;	
 					        margin-top: 10px;
 					        border-radius: 5px;
 					        /*overflow: hidden;*/
 					        /*text-overflow: ellipsis;*/
                           /* white-space: nowrap;*/
                            font-size: 14px;
                            display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							color: #0f0f0f;
							margin-right: 10px;
 						}
 					}
 					p.glo_line{
 						height: 1px;
					    background: #dfdfdf;
					    margin: 1.5em 0 1.5em 3.3em;
					    overflow: hidden;
 					  
 					}
 				}
 				li:nth-child(1) p.glotop{
 					background: #ff8600;
 				}
 				li:nth-child(2) p.glotop{
 					background:#76c62f;
 				}
 				li:nth-child(3) p.glotop{
 					background: #36b2ec;
 				}
 			}
 		}
 	}

 }	
</style>
