<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/testside">Test Side</router-link>
      <p>Hei sunniva</p>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
