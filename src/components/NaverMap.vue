<template>
    <div id="map">kakao맵 보기</div>
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