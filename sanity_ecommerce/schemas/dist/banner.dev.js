"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [{
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
    }
  }, {
    name: 'buttonText',
    title: 'ButtonText',
    type: 'string'
  }, {
    name: 'product',
    title: 'Product',
    type: 'string'
  }, {
    name: 'price',
    title: 'Price',
    type: 'number'
  }, {
    name: 'name',
    title: 'Name',
    type: 'string'
  }, {
    name: 'desc',
    title: 'Desc',
    type: 'string'
  }, {
    name: 'smallText',
    title: 'SmallText',
    type: 'string'
  }, {
    name: 'midText',
    title: 'MidText',
    type: 'string'
  }, {
    name: 'largeText1',
    title: 'LargeText1',
    type: 'string'
  }, {
    name: 'largeText2',
    title: 'LargeText2',
    type: 'string'
  }, {
    name: 'discount',
    title: 'Discount',
    type: 'string'
  }, {
    name: 'saleTime',
    title: 'SaleTime',
    type: 'string'
  }, {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'product',
      maxLength: 90
    }
  }]
};
exports["default"] = _default;