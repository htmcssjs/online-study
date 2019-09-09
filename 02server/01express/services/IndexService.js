//引入模块
let ListingService = require("./ListingService");

class IndexService {
  constructor() {}
  getData(callback) {
    let listingService = new ListingService();
    //获得数据
    listingService.getListing(function(listing) {
      callback(listing);
    });
  }
}

module.exports = IndexService;
