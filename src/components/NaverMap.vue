<template>
  <div id="map" style="width: 100%; height: 500px;"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {

  const mapOptions = {
    center: new naver.maps.LatLng(37.5665, 126.978), // 서울시청 좌표
    zoom: 10, // 지도 초기 줌 레벨
  };

  const map = new naver.maps.Map('map', mapOptions); // 'map' ID로 지도 초기화
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>