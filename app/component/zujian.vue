<style scoped lang='stylus'>
	tr td{
		width: 150px;
		height: 45px;
		text-align: center;
	}

	tr td input{
		width: 30px;
		text-align: center;
	}
</style>

<template>
	<tr>
		<td>{{item.id}}</td>	
		<td>{{item.title}}</td>
		<td>{{item.price}}</td>
		<td>
			<button @click="minus">-</button>
			<input type="number" name="number" v-model="item.number">
			<button @click="add">+</button>
		</td>
		<td>{{heji}}</td>
	</tr>
</template>

<script>
	export default{
		props : ["item"],
		computed : {
			heji(){
				return this.item.money = this.item.number * this.item.price;
			}
		},
		methods : {
			add(){
				this.item.number++;
			}, 
			minus(){
				this.item.number--;
			}
		}
	}
</script>