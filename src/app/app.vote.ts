import { Component, ViewEncapsulation } from '@angular/core';

import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';
import { Solution } from './domain/Solution';

@Component({
  selector: 'vote',
  templateUrl: './app.vote.html',
  styleUrls: ['./app.vote.css']
})
export class VoteComponent {
  title = 'My first AGM project';
  lat = 39.0921017;
  lng = -94.71580062;

// markers: {lat: number, lng: number, label: string}[] = [
//   { lat: 37.5592563, lng: -122.2785536, label: 'Visa' },
//   { lat: 42.1567664, lng: -87.8922984, label: 'Discover' },
//   { lat: 33.6585169, lng: -84.4261124, label: 'Delta'},
//   { lat: 40.7206599, lng: -74.0134065, label: 'Citi'},
//   { lat: 43.6465201, lng: -79.3822483, label: 'RBC' },
//   { lat: 19.4357552, lng: -99.1815213, label: 'Pemex' }

// ];

public solution: Solution = new Solution().deserialize({
  'solutionName' : 'MPC Demo',
  'solutionEntries' : [ {
    'venueName' : 'C8',
    'cityName' : 'New York, New York',
    'latitude' : 40.7128,
    'longitude' : -74.006,
    'revenueOpportunity' : 2200000,
    'date' : '2018-10-16'
  }, {
    'venueName' : 'E3',
    'cityName' : 'Dallas, Texas',
    'latitude' : 32.7767,
    'longitude' : -96.797,
    'revenueOpportunity' : 2400000,
    'date' : '2018-10-17'
  }, {
    'venueName' : 'V2',
    'cityName' : 'Foster City, California',
    'latitude' : 37.5585,
    'longitude' : -122.2711,
    'revenueOpportunity' : 13000000,
    'date' : '2018-10-18'
  }, {
    'venueName' : 'P4',
    'cityName' : 'Mexico City, Mexico',
    'latitude' : 19.4326,
    'longitude' : -99.1332,
    'revenueOpportunity' : 2000000,
    'date' : '2018-10-22'
  }, {
    'venueName' : 'M6',
    'cityName' : 'Rochester, New York',
    'latitude' : 39.1031,
    'longitude' : -84.512,
    'revenueOpportunity' : 100000,
    'date' : '2018-10-23'
  }, {
    'venueName' : 'D5',
    'cityName' : 'Chicago, Illinois',
    'latitude' : 41.8781,
    'longitude' : -87.6298,
    'revenueOpportunity' : 1900000,
    'date' : '2018-10-24'
  }, {
    'venueName' : 'R7',
    'cityName' : 'Toronto, Canada',
    'latitude' : 43.6532,
    'longitude' : -79.3832,
    'revenueOpportunity' : 2400000,
    'date' : '2018-10-25'
  }, {
    'venueName' : 'T10',
    'cityName' : 'Seattle, Washington',
    'latitude' : 47.6062,
    'longitude' : -122.3321,
    'revenueOpportunity' : 1500000,
    'date' : '2018-10-29'
  }, {
    'venueName' : 'A1',
    'cityName' : 'Phoenix, California',
    'latitude' : 33.4484,
    'longitude' : -112.074,
    'revenueOpportunity' : 100000,
    'date' : '2018-11-29'
  }, {
    'venueName' : '9D',
    'cityName' : 'Atlanta, Georgia',
    'latitude' : 33.749027,
    'longitude' : -84.388229,
    'revenueOpportunity' : 10000000,
    'date' : null
  } ]
});

public markers = this.solution.getLatLongArray();

}
