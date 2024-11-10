declare namespace naver {
  namespace maps {
    class LatLng {
      constructor(lat: number, lng: number);
    }

    interface MapOptions {
      center: LatLng;
      zoom: number;
      zoomControl?: boolean;
      zoomControlOptions?: ZoomControlOptions;
    }

    class Map {
      constructor(container: HTMLElement, options: MapOptions);
    }

    interface ZoomControlOptions {
      position: Position;
    }

    enum Position {
      TOP_LEFT,
      TOP_RIGHT,
      BOTTOM_LEFT,
      BOTTOM_RIGHT,
    }
  }
}