<template>
  <div>
    <div>{{ moutain.title }}</div>
    <div>{{ moutain.description }}</div>
  </div>
</template>

<script setup>
// http://localhost:3000/moutain/aconcagua
const route = useRoute()
const router = useRouter()

const { slug } = route.params

console.log(slug)

const { data: moutain } = await useFetch(
  `https://api.nuxtjs.dev/mountains/${slug}`
)
</script>

<style lang="scss" scoped></style>
