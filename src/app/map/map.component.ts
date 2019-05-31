import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 23.14756761567721
  longitude = 82.6984425712389
  zoom = 4.82
  latlong: LatLong
  mLatitude:Number
  mLongitude:Number
  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;

  onChosenLocation(event){
    this.mLatitude = event.coords.lat
    this.mLongitude = event.coords.lng
    this.data.changeMessage({
      latitude: event.coords.lat,
      longitude: event.coords.lng
    })
  }

  constructor(private data: DataShareService, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.data.current.subscribe(latlong => this.latlong = latlong)
    
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
 
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: [
          {"location": new google.maps.LatLng(26.4498954, 74.63991629999998), "weight":0.5},
          {"location": new google.maps.LatLng(25.4358011, 81.84631100000001), "weight":0.5},
          {"location": new google.maps.LatLng(19.8761653, 75.3433139), "weight":0.5},
          {"location": new google.maps.LatLng(12.9715987, 77.59456269999998), "weight":0.5},
          {"location": new google.maps.LatLng(21.1938475, 81.35094159999994), "weight":0.5},
          {"location": new google.maps.LatLng(23.2599333, 77.41261499999996), "weight":0.5},
          {"location": new google.maps.LatLng(25.2138156, 75.86475270000005), "weight":0.5},
          {"location": new google.maps.LatLng(15.8281257, 78.03727920000006), "weight":0.5},
          {"location": new google.maps.LatLng(9.9252007, 78.11977539999998), "weight":0.5},
          {"location": new google.maps.LatLng(12.2958104, 76.63938050000002), "weight":0.5},
          {"location": new google.maps.LatLng(21.1458004, 79.08815460000005), "weight":0.5},
          {"location": new google.maps.LatLng(14.2250932, 76.3980464), "weight":0.5},
          {"location": new google.maps.LatLng(17.329731, 76.83429569999998), "weight":0.5},
          {"location": new google.maps.LatLng(17.385044, 78.486671), "weight":0.5},
          {"location": new google.maps.LatLng(26.9124336, 75.78727090000007), "weight":0.5},
          {"location": new google.maps.LatLng(22.8045665, 86.20287540000004), "weight":0.5},
          {"location": new google.maps.LatLng(25.4484257, 78.56845939999994), "weight":0.5},
          {"location": new google.maps.LatLng(26.23894689999999, 73.02430939999999), "weight":0.5},
          {"location": new google.maps.LatLng(11.9415915, 79.80831330000001), "weight":0.5},
          {"location": new google.maps.LatLng(21.2513844, 81.6296413), "weight":0.5},
          {"location": new google.maps.LatLng(20.9588956, 81.41004029999999), "weight":0.5},
          {"location": new google.maps.LatLng(22.260423, 84.85358440000005), "weight":0.5},
          {"location": new google.maps.LatLng(24.0993031, 77.67079239999998), "weight":0.5},
          {"location": new google.maps.LatLng(10.7869994, 79.13782739999999), "weight":0.5},
          {"location": new google.maps.LatLng(10.7904833, 78.70467250000002), "weight":0.5},
          {"location": new google.maps.LatLng(24.585445, 73.71247900000003), "weight":0.5},
          {"location": new google.maps.LatLng(17.6868159, 83.21848150000005), "weight":0.5}
      ],
        radius: 48,
        gradient: [
          'rgba(140,207,242,0)',
          'rgba(140,197,242,1)',
          'rgba(140,207,242,1)',
          'rgba(140,207,242,1)',
          'rgba(140,207,242,1)',
          'rgba(140,207,242,1)',
        ]
    });

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: [
        {"location": new google.maps.LatLng(27.1766701, 78.00807450000002), "weight":2},
        {"location": new google.maps.LatLng(23.022505, 72.57136209999999), "weight":2},
        {"location": new google.maps.LatLng(23.68886359999999, 86.96606380000003), "weight":2},
        {"location": new google.maps.LatLng(28.3670355, 79.43043809999995), "weight":2},
        {"location": new google.maps.LatLng(15.8496953, 74.49767410000004), "weight":2},
        {"location": new google.maps.LatLng(30.210994, 74.94547450000005), "weight":2},
        {"location": new google.maps.LatLng(20.2960587, 85.82453980000003), "weight":2},
        {"location": new google.maps.LatLng(16.8301708, 75.71003100000007), "weight":2},
        {"location": new google.maps.LatLng(28.0229348, 73.31191590000003), "weight":2},
        {"location": new google.maps.LatLng(23.7978583, 85.88444040000002), "weight":2},
        {"location": new google.maps.LatLng(23.2324214, 87.86147929999993), "weight":2},
        {"location": new google.maps.LatLng(11.2587531, 75.78041000000007), "weight":2},
        {"location": new google.maps.LatLng(13.0826802, 80.27071840000008), "weight":2},
        {"location": new google.maps.LatLng(12.837284, 79.70417440000006), "weight":2},
        {"location": new google.maps.LatLng(26.449923, 80.3318736), "weight":2},
        {"location": new google.maps.LatLng(14.8184812, 74.1416127), "weight":2},
        {"location": new google.maps.LatLng(22.572646, 88.36389499999996), "weight":2},
        {"location": new google.maps.LatLng(26.8466937, 80.94616599999995), "weight":2},
        {"location": new google.maps.LatLng(12.9141417, 74.85595680000006), "weight":2},
        {"location": new google.maps.LatLng(19.0759837, 72.87765590000004), "weight":2},
        {"location": new google.maps.LatLng(19.9974533, 73.78980230000002), "weight":2},
        {"location": new google.maps.LatLng(14.4425987, 79.98645599999998), "weight":2},
        {"location": new google.maps.LatLng(18.1860659, 76.04194089999999), "weight":2},
        {"location": new google.maps.LatLng(15.4909301, 73.82784960000004), "weight":2},
        {"location": new google.maps.LatLng(30.3397809, 76.38687970000001), "weight":2},
        {"location": new google.maps.LatLng(16.5061743, 80.6480153), "weight":2},
        {"location": new google.maps.LatLng(12.9165167, 79.13249859999996), "weight":2},
        {"location": new google.maps.LatLng(22.3071588, 73.18121870000004), "weight":2},
        {"location": new google.maps.LatLng(12.2252841, 79.0746957), "weight":2},
        {"location": new google.maps.LatLng(8.524139100000001, 76.93663760000004), "weight":2},
        {"location": new google.maps.LatLng(19.2183307, 72.97808970000006), "weight":2},
        {"location": new google.maps.LatLng(17.6599188, 75.90639060000001), "weight":2},
        {"location": new google.maps.LatLng(11.664325, 78.14601419999997), "weight":2},
        {"location": new google.maps.LatLng(22.3038945, 70.80215989999999), "weight":2},
        {"location": new google.maps.LatLng(26.8466937, 80.94616599999995), "weight":2},
        {"location": new google.maps.LatLng(12.5238119, 80.15681339999992), "weight":2},
        {"location": new google.maps.LatLng(23.181467, 79.98640709999995), "weight":2},
        {"location": new google.maps.LatLng(24.7913957, 85.0002336), "weight":2},
        {"location": new google.maps.LatLng(23.5204443, 87.31192269999997), "weight":2},
        {"location": new google.maps.LatLng(18.1860659, 76.04194089999999), "weight":2},
        {"location": new google.maps.LatLng(12.1065271, 78.13614089999999), "weight":2},
        {"location": new google.maps.LatLng(15.45892359999999, 75.00780800000007), "weight":2},
        {"location": new google.maps.LatLng(20.462521, 85.88298950000001), "weight":2},
        {"location": new google.maps.LatLng(11.7480419, 79.77136870000004), "weight":2},
        {"location": new google.maps.LatLng(11.0168445, 76.95583209999995), "weight":2}
     ],
      radius: 46,
      gradient: [
        'rgba(253,239,46,0)',
        'rgba(253,239,46,1)',
        'rgba(253,239,46,1)',
        'rgba(253,239,46,1)',
        'rgba(253,239,46,1)'
      ]
    });

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: [
        {"location": new google.maps.LatLng(29.5892407, 79.64666599999998), "weight":2},
        {"location": new google.maps.LatLng(30.3752011, 76.78212200000007), "weight":2},
        {"location": new google.maps.LatLng(31.6339793, 74.87226420000002), "weight":2},
        {"location": new google.maps.LatLng(27.5708377, 81.59802460000003), "weight":2},
        {"location": new google.maps.LatLng(25.4712224, 85.97774509999999), "weight":2},
        {"location": new google.maps.LatLng(28.406963, 77.84982919999993), "weight":2},
        {"location": new google.maps.LatLng(30.7333148, 76.7794179), "weight":2},
        {"location": new google.maps.LatLng(30.900965, 75.85727580000002), "weight":2},
        {"location": new google.maps.LatLng(25.3747561, 86.47352509999996), "weight":2},
        {"location": new google.maps.LatLng(28.8386481, 78.77332860000001), "weight":2},
        {"location": new google.maps.LatLng(29.3803039, 79.46356579999997), "weight":2},
        {"location": new google.maps.LatLng(25.5940947, 85.13756450000005), "weight":2},
        {"location": new google.maps.LatLng(31.1048145, 77.17340330000002), "weight":2},
        {"location": new google.maps.LatLng(29.8542626, 77.88800019999996), "weight":2},
        {"location": new google.maps.LatLng(26.76055449999999, 83.37316750000002), "weight":2},
        {"location": new google.maps.LatLng(27.3389356, 88.60650350000003), "weight":2},
        {"location": new google.maps.LatLng(28.68627380000001, 77.22178310000004), "weight":2},
        {"location": new google.maps.LatLng(30.3164945, 78.03219179999996), "weight":2},
        {"location": new google.maps.LatLng(27.0360066, 88.26267510000002), "weight":2}
      ],
      radius: 44,
      gradient: [
        'rgba(245,150,50,0)',
        'rgba(245,150,50,1)',,
        'rgba(238,150,50,1)',
        'rgba(228,150,50,1)',
        'rgba(226,150,50,1)',
        'rgba(211,150,50,1)',
        'rgba(245,150,50,1)',
        'rgba(245,150,50,1)',
        'rgba(245,150,50,1)',
        'rgba(245,150,50,1)'
      ]

    });

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: [
        {"location": new google.maps.LatLng(23.2419997, 69.66693239999995), "weight":2},
        {"location": new google.maps.LatLng(25.6585963, 94.10533069999997), "weight":2},
        {"location": new google.maps.LatLng(31.7081655, 76.93136749999996), "weight":2},
        {"location": new google.maps.LatLng(26.6528495, 92.79255920000003), "weight":2},
        {"location": new google.maps.LatLng(34.0836708, 74.79728249999994), "weight":2},
        {"location": new google.maps.LatLng(27.860175, 95.62739510000006), "weight":2},
        {"location": new google.maps.LatLng(26.7465203, 94.20258590000003), "weight":2},
        {"location": new google.maps.LatLng(24.8170111, 93.93684389999999), "weight":2},
        {"location": new google.maps.LatLng(26.1445169, 91.73623650000002), "weight":2},
        {"location": new google.maps.LatLng(26.1542045, 85.89184539999997), "weight":2},
      ],
      radius: 46,
      gradient: [
        'rgba(205,58,51,0)',
        'rgba(205,58,51,1)',,
        'rgba(205,58,51,1)',
        'rgba(205,58,51,1)',
        'rgba(205,58,51,1)',
        'rgba(205,58,51,1)',
        'rgba(205,58,51,1)'
      ]
    });

  }

  boundsChange(event){
    console.log(event)
  }

  clicked(event){
    console.log(event)
  }

}

export interface LatLong {
  latitude:Number,
  longitude:Number
}
