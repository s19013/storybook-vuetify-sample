<template>
  <v-app>
    <v-main><slot name="story"></slot></v-main>
  </v-app>
</template>

<style>
.v-application__wrap {
  /* !importantしないと無駄に余白がつくられてしまう */
  min-height: auto !important;
}
</style>
