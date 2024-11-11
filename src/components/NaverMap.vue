<template>
    <div id="map">naver맵 보기2</div>
  </template>

<script setup lang="ts">
declare global {
  interface Window {
    naver: any
  }
}
let naver: any
let map: any
</script>