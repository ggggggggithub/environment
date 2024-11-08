declare namespace naver {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number);
      }
  
      interface MapOptions {
        center: LatLng;
        zoom: number;
      }
  
      class Map {
        constructor(container: HTMLElement, options: MapOptions);
      }
    }
  }