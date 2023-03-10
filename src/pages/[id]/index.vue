<template>
  <div>
    <h2>详情页面 , id: {{ id }}</h2>
    <h3>title1</h3>
    <p>内容1</p>
    <h3>title1</h3>
    <p>内容1</p>
    <h3>title1</h3>
    <p>内容1</p>
    <h3>title1</h3>
    <p>内容1</p>
  </div>
</template>

<script setup>
const route = useRoute()

const { id } = route.params
</script>
