<template>
  <v-app>
    <v-main><slot name="story"></slot></v-main>
  </v-app>
</template>

<style>
.v-application__wrap {
  min-height: auto !important;
  /* これをしないと大きな余白が作られる */
  /* !importantしないと設定が上書きされるもよう */
}
</style>
