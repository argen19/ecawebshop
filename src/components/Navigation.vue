<template>
  <nav class="side-nav">
    <router-link 
      v-for="link in links" 
      :key="link.path" 
      :to="link.path"
      :class="{ active: $route.path === link.path }"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
