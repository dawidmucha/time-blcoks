<script setup>
	import { useDateFormat, useNow } from '@vueuse/core'

	const formattedDate = useDateFormat(useNow(), 'dddd, DD MMMM, YYYY')
</script>

<template>
	<h1>Right now? Oh, it's {{ formattedDate }}</h1>
  <table>
		<tr v-for="hour in hours" :key="hour">
			<td v-for="hourBlock in hourBlocks" :key="hourBlock">{{`${hour}-${hourBlock}`}}</td>
		</tr>
	</table>
</template>

<script>
	export default {
		name: 'TimeTable',
		data() {
			return {
				hours: 24,
				hourBlocks: 4,
			}
		}
	}
</script>

<style>
	td {
		border: 1px solid black;
	}
</style>
  