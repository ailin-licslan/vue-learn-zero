<template>

	<div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder':'','task']">
		
		<h3>
			{{ task.text }}
			<!-- <i @click="onDel(task.id)" class="fas fa-times">x</i> -->

			<i @click="$emit('del-task',task.id)" class="fas fa-times">x</i>
		</h3>
		<p>{{ task.day }}</p>

	</div>

</template>

<script>
	export default {
		name: 'Task',
		props: {
			/*父传子的参数 */
			task: Object
		},
		/*
		 
		 和上面的 <i @click="onDel(task.id)" class="fas fa-times">x</i> 配合使用也是可以的 
		
		methods: {
			onDel(id) {
				console.log(id)
				 子级传父级传递 
				this.$emit('del-task', id)
			}
		} */
	}
</script>

<style scoped>
	.fas {
		color: red;
	}

	.task {
		background: #f4f4f4;
		margin: 5px;
		padding: 10px 20px;
		cursor: pointer;
	}

	.task.reminder {
		border-left: 5px solid green;
	}

	.task h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
