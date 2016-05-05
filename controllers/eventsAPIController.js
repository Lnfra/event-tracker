"use strict";

// var Product = require('../models/product');
const Nbrite      = require('nbrite');
//With personal OAuth key
var nbrite = new Nbrite({token:'K3Z6NFRHFAY2WICD3C2P'});
// var nbrite = new Nbrite(EVENTBRITE_ACCESS_TOKEN);
var eventId = '25241874125';
var venueId = '15205280';

//Get instagram module
var instagram = require('instagram-node').instagram();
instagram.use({
  client_id: '228c8ba000f84792b8bff7726b7789ef',
  client_secret: 'af23b2f259474d6c9cd5b447a5947484',
  access_token: '2104903097.228c8ba.97f09ae3fced46b09976dcaf8340f6c6'
});

//Get all pictures related to #scaladays
function getInstagramPics(request, response) {
  // instagram.tag_media_recent('cats', function(err, medias, pagination, remaining, limit) {
  //
  //   if (err) {
  //     var res = { message: 'no instagram pics'}
  //     return response.json(err)
  //   }
  //     response.json(medias);
  //   });
  }

function getEventInfo(request, response) {
  nbrite.events(eventId).info(function (err, event) {
    // `event` is parsed JSON response from the API
    if (err) {
      var res = { message: 'Event Not Found'}
      return response.json(res)
    }
    response.json(event);
  });
}

function getEventVenue(request, response) {
  nbrite.venues(venueId).info(function (err, body) {
    if (err) {
      var res = { message: 'Venue ' + venueId + ' not found'}
      return response.json(err);
    }
    response.json(body);
  });
}

function getEventOrders(request, response) {
  nbrite.events(eventId).orders().list(function (err, body) {
    if (err) {
      var res = { message: 'Orders for ' + eventId + ' not found'}
      return response.json(err);
    }
    response.json(body);
  });
}

module.exports = {
  getEventInfo : getEventInfo,
  getEventOrders: getEventOrders,
  getInstagramPics: getInstagramPics,
  getEventVenue: getEventVenue
}
