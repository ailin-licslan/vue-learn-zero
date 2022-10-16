<template>
	<button @click="onClick()" :style="{background:color}" class="btn">{{text}}</button>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			text: String,
			color: String
		},
		methods:{
			onClick(){
				
				/* 点击button控制 addTask 模块展示与否 true展示  falas隐藏
				 一直向上发射  先到 header 再到 app 子传父
				 */
				/* console.log('click') */
				
				this.$emit('bnt-click')
			}
		}
	}
</script>

<style>
</style>
