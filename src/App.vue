<template>
  <div id = "app">
    <p>{{ t('main.welcome' , {company: 'Nerf Or Nothing'}) }}</p>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'App',
  components: {
  },
  setup() {
    const { t } = useI18n({
      //inheritLocale: true,
      //useScope: 'local'
    })

    // Something todo ..

    return { t }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
