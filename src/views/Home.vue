<template>
	<AddTask v-show="showAddTask" @add-task="addTask" />
	<Tasks @toggle-reminder="toggleReminder" @del-task="delTask" :tasks="tasks" />
</template>

<script>
	import Tasks from '../components/Tasks.vue'
	import AddTask from '../components/AddTask.vue'

	export default {
		name: 'Home',
		props: {
			showAddTask: Boolean
		},
		components: {
			Tasks,
			AddTask
		},
		data() {
			return {
				tasks: []
			}
		},
		methods: {


			async addTask(task) {

				const res = await fetch('api/tasks', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(task)
				})


				const data = await res.json()

				this.tasks = [...this.tasks, data]
			},


			async delTask(id) {
				console.info('taks===>', id)
				if (confirm('Are you sure?')) {
					/* 过滤传进来的和自己遍历时id不同的数据 */
					/* this.tasks = this.tasks.filter((task) => task.id !== id) */
					const res = await fetch(`api/tasks/${id}`, {
						method: 'DELETE'
					})
					res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert("Error deleting")
				}
			},



			async toggleReminder(id) {

				const taskToToggle = await this.fetchTask(id)
				const updTask = { ...taskToToggle,
					reminder: !taskToToggle.reminder
				}
				const res = await fetch(`api/tasks/${id}`, {
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(updTask),
				})
				const data = await res.json()
				this.tasks = this.tasks.map((task) =>
					task.id === id ? { ...task,
						reminder: data.reminder
					} : task
				)

				/* console.log("<---->", id)
		
				 如果id相同  reminder 赋值和之前的相反就行 true-false 
		
				this.tasks = this.tasks.map((task) => task.id === id ? { ...task,
					reminder: !task.reminder
				} : task) */
			},


			async fetchTasks() {

				/* const res = await fetch("http://localhost:8888/tasks") */

				const res = await fetch('api/tasks')

				const data = await res.json()

				return data
			},


			async fetchTask(id) {

				const res = await fetch(`api/tasks/${id}`)

				const data = await res.json()

				return data
			}

		},



		async created() {


			this.tasks = await this.fetchTasks()

			/* 去掉硬编码
			this.tasks = [
				{
					id: 1,
					text: 'Really,can not belive on you!',
					day: 'March 1st at 2:30pm',
					reminder: true
				},
				{
					id: 2,
					text: 'Yes i am fine you',
					day: 'March 1st at 2:30pm',
					reminder: false
				},
				{
					id: 3,
					text: 'Hi are you ok?',
					day: 'March 1st at 2:30pm',
					reminder: false
				}
			] */
		}
	}
</script>

<style>
</style>
