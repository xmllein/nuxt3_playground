<template>
  <div>
    <h2>欢迎来到nuxt 首页</h2>
    <NuxtLink to="/list">跳转到列表页</NuxtLink>
    <br />
    <NuxtLink to="/1">跳转到详情页</NuxtLink>
    <div>composables: {{ foo }}</div>
    <div>appConfig: {{ appConfig }}</div>
    <div>
      <h2>useAsyncData</h2>
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error }}</div>
      <div v-if="data" class="moutain">
        <ul>
          <li v-for="mountain in data" :key="mountain.id">
            <h3>{{ mountain.title }}</h3>
            <div>
              <img :src="mountain.image" alt="" />
            </div>
            <p>{{ mountain.description }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2>useCookie</h2>
      {{ counter }}
    </div>
    <div>
      <h2>plugins</h2>
      <input type="text" v-focus />
      <p>{{ $myPlugin() }}</p>
    </div>
    <div>
      <h2>pinia</h2>
      <p>{{ userInfo.name }}</p>
      <p>{{ userInfo.age }}</p>
      <p>{{ userInfo.gender }}</p>
      <p>{{ userInfo.id }}</p>
    </div>
  </div>
  <div>
    <h2>usevue</h2>
    <p>x :{{ x }}, y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores'

const foo = useFoo()
// 其他hooks
const appConfig = useAppConfig()
console.log(appConfig)

// useAsyncData
const { data, error, loading } = useAsyncData(async () => {
  const res = await fetch('https://api.nuxtjs.dev/mountains')
  return res.json()
})

// useFetch
const { data1, error1, loading1 } = useFetch(async () => {
  const res = await fetch('https://api.nuxtjs.dev/mountains')
  return res.json()
})

// useCookie
const counter = useCookie('counter', 0)
counter.value = counter.value || Math.round(Math.random() * 100)

// useHead
useHead({
  title: 'Home',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Home page description',
    },
  ],
})

// 使用 pinia
const userInfo = useUserStore().useInfo

// 使用 vueuse
const { x, y } = useMouse()
</script>

<style scoped>
.moutain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.moutain ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.moutain li {
  list-style: none;
  width: 30%;
  margin-bottom: 20px;
}
</style>
