'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://localhost:8080/api/vgimws"',
  // urlVGI: '"http://www.pauliceia.dpi.inpe.br/api/vgi"',
  urlGeocoding: '"http://localhost:8080/api/geocoding"',
  // urlGeocoding: '"http://www.pauliceia.dpi.inpe.br/api/geocoding"',
  urlGeoserverPauliceia: '"http://localhost:8080/geoserver/pauliceia"',
  // urlGeoserverPauliceia: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeoserveOther: '"http://localhost:8080/geoserver/other"',
  // urlGeoserveOther: '"http://www.pauliceia.dpi.inpe.br/geoserver/other"',
  keyCripto: '"keytest"'
})
