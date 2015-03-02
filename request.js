// Generated by CoffeeScript 1.9.1
(function() {
  var PinejsClientCore, PinejsClientRequest, Promise, _, request,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  _ = require('lodash');

  request = require('request');

  Promise = require('bluebird');

  PinejsClientCore = require('./core');

  request = Promise.promisify(request);

  module.exports = PinejsClientRequest = (function(superClass) {
    extend(PinejsClientRequest, superClass);

    function PinejsClientRequest() {
      return PinejsClientRequest.__super__.constructor.apply(this, arguments);
    }

    PinejsClientRequest.prototype._request = function(params) {
      if (params.gzip == null) {
        params.gzip = true;
      }
      params.json = true;
      return request(params).spread(function(response, body) {
        var ref;
        if ((200 <= (ref = response.statusCode) && ref < 300)) {
          return body;
        }
        throw new Error(body);
      });
    };

    return PinejsClientRequest;

  })(PinejsClientCore(_, Promise));

}).call(this);
