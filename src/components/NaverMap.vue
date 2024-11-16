
<template>
  <div id="map" style="width: 90%; height: 500px; margin-top:80px;"></div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted } from 'vue';
function showCurrentLocation(map: any) {
  if (navigator.geolocation) {
    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude; // 위도
        const lng = position.coords.longitude; // 경도

        const userLocation = new window.naver.maps.LatLng(lat, lng);

        // 마커 생성
        const marker = new window.naver.maps.Marker({
          position: userLocation,
          map: map,
          title: "현재 위치",
        });
         // 정보 창 생성
         const infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 10px; font-size: 14px;">
              <strong>현재 위치</strong>
              <p>위도: ${lat.toFixed(4)}<br>경도: ${lng.toFixed(4)}</p>
            </div>
          `, // 정보 창 내용
        });

        // 마커 클릭 이벤트 등록
        window.naver.maps.Event.addListener(marker, "click", () => {
          infoWindow.open(map, marker); // 정보 창 열기
        });

          // 지도 클릭 시 정보 창 닫기
          window.naver.maps.Event.addListener(map, "click", () => {
            infoWindow.close();
          });

        // 지도 중심 이동
        map.setCenter(userLocation);
        map.setZoom(15); // 적당한 줌 레벨 설정
      },
      (error) => {
        console.error("Geolocation Error: ", error);
      }
    );
  } else {
    alert("Geolocation을 지원하지 않는 브라우저입니다.");
  }
}

onMounted(() => {
  const mapOptions = {
    center: new window.naver.maps.LatLng(37.5665, 126.978), // 기본 위치 (서울시청)
    zoom: 10, // 초기 줌 레벨
  };

  // 지도 생성
  const map = new window.naver.maps.Map("map", mapOptions);

  // 사용자 위치 표시
  showCurrentLocation(map);

  
});

</script>

