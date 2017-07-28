<style scoped lang='stylus'>
	div table{
		border-collapse: collapse;
		border: 1px solid #000;
	}
	p{
		text-align: right;
		padding-right: 20px;
	}
	div.shop{
		width: 800px;
		margin: 50px auto;
	}
</style>

<template>
	<div class="shop">
		<h1>我的购物车：</h1>
		<div>
			<table v-for="item in list">
				<vui-zujian :item="item"></vui-zujian>
			</table>
			<p>总计： {{total}}元</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list : [
					{"id" : 1, "title" : "手机", "price" : 2000, "number" : 1, "money" : 2000},
					{"id" : 2, "title" : "电脑", "price" : 5000, "number" : 1, "money" : 5000},
					{"id" : 3, "title" : "电视机", "price" : 3500, "number" : 1, "money" : 3500}
				]
			}
		},
		computed : {
			total(){
				let sum = 0;
				this.list.forEach((item) => {
					sum += item.money;
				});
				return sum;
			}
		}
	}
</script>