
<template>
  <div id="map" style="width: 90%; height: 500px; margin-top:80px;"></div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onMounted } from 'vue';

onMounted(() => {

  const mapOptions = {
    center: new naver.maps.LatLng(37.5665, 126.978), // 서울시청 좌표
    zoom: 10, // 지도 초기 줌 레벨
  };

  const map = new naver.maps.Map('map', mapOptions); // 'map' ID로 지도 초기화

  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5665, 126.9780), // 마커를 표시할 위치 (예: 서울)
    map: map,
    title: '네이버 지도 마커',
  })
});


</script>

