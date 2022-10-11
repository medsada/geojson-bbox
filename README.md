# GeoJson

restful API that exposes a route to get “GeoJSON features” of a location given with a geolocation box ([bounding box](https://wiki.openstreetmap.org/wiki/Bounding_Box)) as input.

## Description:

this is an api wrapper that make a call to open street map api (https://www.openstreetmap.org/api/0.6/map) gather information in “osm” format, then convert it using “osmtogeojson” library to “GeoJSON” and return the converted dataset.

## Installation and Running locally:

After cloning the Repository just run npm install

There is no need to configure an .env file or a database, this project has no need to persistence

To run the application, run
npm run dev
you can import the requests collection to a client (like postman) from geoJson-bBox.postman_collection.json, It covers all use case of the api with many input possibilities

## Tests and Test Coverage:

Jest is used to test 4 unit test on 2 util functions

to run tests, run
npm test

to run tests with coverage, run
npm run test:coverage
coverage data is will be stored in `./coverage` directory
