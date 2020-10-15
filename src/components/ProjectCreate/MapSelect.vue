<template>
  <div>
    <q-dialog :value="map_active">
      <div class="tw-shadow tw-h-lg tw-w-full tw-bg-white">
        <div ref="map"></div>
      </div>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mapboxgl from 'mapbox-gl';

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
    setTimeout(() => {
      if (this.map_active) {
        console.log(this.$refs.map);
        try {
          this.addMap();
        } catch (e) {
          console.log(e);
        }
      }
    }, 3000);
  },
  methods: {
    clicked() {
      this.$emit('set_map_active');
    },
    addMap() {
      mapboxgl.accessToken = this.mapbox_token;

      this.mapbox = new mapboxgl.Map({
        container: this.$refs.map as HTMLElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [31.4629694, -26.5179414],
        zoom: 7
      });
      this.mapbox?.on('click', e => {
        this.position.longitude = e.lngLat.lng;
        this.position.latitude = e.lngLat.lat;

        if (this.mapbox) {
          if (this.marker) {
            this.marker.remove();
          }

          this.marker = new mapboxgl.Marker()
            .setLngLat([this.position.longitude, this.position.latitude])
            .addTo(this.mapbox);

          console.log(this.marker);
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

  width: 100%;
  height: 100%;
}
</style>
