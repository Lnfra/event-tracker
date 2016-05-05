'use strict'

var express     = require('express');
var router      = express.Router();

//Reference to individual controller files
var eventsAPIController  = require('../controllers/eventsAPIController');



//=============== API Routes to Products Controller ========================

router.route('/api/eventInfo')
    .get(eventsAPIController.getEventInfo)

router.route('/api/eventOrders')
    .get(eventsAPIController.getEventOrders)

router.route('/api/eventVenue')
    .get(eventsAPIController.getEventVenue)


// router.route('/api/instagramPics')
//     .get(eventsAPIController.getInstagramPics)

// router.route('/api/products/:id')
//     .get(productsAPIController.showProduct)

//=============== API Routes to Sales Controller ===========================

// router.route('/api/sales')
//     .get(salesAPIController.getAll)
//     .post(salesAPIController.createSale)
//
// router.route('/api/sales/:id')
//   .get(salesAPIController.getSale)
//   .put(salesAPIController.updateSale)
//   .delete(salesAPIController.removeSale)

//================ End of Routes =======================================


module.exports = router
