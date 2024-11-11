<template>
  <div id="map">kakao맵 보기</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 최소한의 kakao 타입을 정의
declare global {
  interface Window {
    kakao: any
  }
}
let kakao: any
let map: any

// 카카오 맵을 로드하는 함수
function loadMap() {
  const container = document.getElementById('map') as HTMLElement
  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  }

  map = new window.kakao.maps.Map(container, options)

  const positions = [
    {
      title: '카카오',
      latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
    },
    {
      title: '생태연못',
      latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
    },
    {
      title: '텃밭',
      latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
    },
    {
      title: '근린공원',
      latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
    },
  ]

  // 마커 이미지의 이미지 주소
  const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'

  for (let i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기
    const imageSize = new window.kakao.maps.Size(24, 35)

    // 마커 이미지를 생성
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    })

    marker.setMap(map)
  }
}
// 카카오 스크립트를 동적으로 추가하는 함수
function loadScript() {
  const script = document.createElement('script')
  script.src =
    '//dapi.kakao.com/v2/maps/sdk.js?appkey=ce7bb9e14c3037277539e74278ef75fd&autoload=false'
  script.onload = () => window.kakao.maps.load(loadMap)

  document.head.appendChild(script)
}

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    loadMap()
  } else {
    loadScript()
  }
})
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
