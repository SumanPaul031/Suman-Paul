import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v10';
  lat = 22.751952;
  lng = 86.208366;

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      style: this.style,
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });
    // var marker = new mapboxgl.Marker().setLngLat([22.751987, 86.208393]).addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      var layers = this.map.getStyle().layers;
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
      var marker = new mapboxgl.Marker().setLngLat([86.208366, 22.751952]).addTo(this.map);
      this.map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
        'fill-extrusion-color': '#aaa',
         
        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height']
        ],
        'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
        }
        },
        labelLayerId
        );
    });


  }

}
