<template>
	<div :key="task.id" v-for="task in tasks">
		<!-- <h3>{{task.text}}</h3> -->

		<!-- $emit再向上传一级  到  app.vue了 -->
		<Task @toggle-reminder="$emit('toggle-reminder',task.id)" @del-task="$emit('del-task',task.id)" :task="task" />
	</div>
</template>

<script>
	import Task from './Task.vue'

	export default {
		name: 'Tasks',
		props: {
			tasks: Array
		},
		components: {
			Task
		},
		emits: ['del-task','toggle-reminder']
	}
</script>

<style>
</style>
