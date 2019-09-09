//引入模块
let ListingModel = require("../model/ListingModel");
class ListingService {
  constructor() {}
  getListing(callback) {
    let listingModel = new ListingModel();
    //获得数据
    listingModel.getAllListing(function(listing) {
        callback(listing);
    });
  }
}

module.exports = ListingService;
