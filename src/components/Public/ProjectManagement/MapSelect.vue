<template>
  <div>
    <div class="tw-shadow tw-h-md tw-w-full tw-bg-white">
      <div ref="mappy" id="map"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mapboxgl, { PointLike } from 'mapbox-gl';

export default Vue.extend({
  name: 'MapSelect',
  props: ['map_active'],
  data() {
    return {
      mapbox: null as null | mapboxgl.Map,
      marker: null as null | mapboxgl.Marker,
      position: {
        longitude: null as null | number,
        latitude: null as null | number
      },
      mapbox_token:
        'pk.eyJ1IjoibWFucW9iYTEiLCJhIjoiY2s4dmdhcTE4MDAzeTNocXBzMXh0ajRteiJ9.KDLMyWdvIUck-sK5Q1UW3g'
    };
  },

  mounted() {
    console.log(this.$refs.map);
    try {
      this.addMap();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    clicked() {
      this.$emit('set_map_active');
    },
    addMap() {
      console.log('Adding me neh');
      mapboxgl.accessToken = this.mapbox_token;

      this.mapbox = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',

        center: [31.4629694, -26.5179414],
        zoom: 7,
        preserveDrawingBuffer: true
      });
      this.mapbox?.on('click', e => {
        this.position.longitude = e.lngLat.lng;
        this.position.latitude = e.lngLat.lat;

        if (this.mapbox) {
          if (this.marker) {
            this.marker.remove();
          }
          console.log(this.mapbox.getCanvas());
          this.marker = new mapboxgl.Marker()
            .setLngLat([this.position.longitude, this.position.latitude])
            .addTo(this.mapbox)
            .setOffset({
              x: (this.mapbox.getCanvas().width/2)-12,
              y: -this.mapbox.getCanvas().height-12
            } as PointLike);

        
          const coords =  [this.marker.getLngLat().lng,this.marker.getLngLat().lat];
          this.$emit('coordinates',coords)
        }
      });

      this.mapbox.addControl(new mapboxgl.FullscreenControl());
    }
  }
});
</script>

<style scoped>
#map {
  position: absolute;

  width: 50%;
  height: 25%;
}
</style>
