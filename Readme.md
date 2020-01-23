# Climbplan

UI for a mountain climbing research/planning tool. Hosted at http://climbplan.com.

Features:
* Search input landing page, which autofills peak and mountain names based on GeoNames database
* Search result page, including
  * Upcoming weather for the peak location
  * Quick research links to handy sites focused on hiking and climbing. Currently focused on the Pacific Northwest but expandable to elsewhere
  * Trip report links from a number of sites (again, currently focused on the PNW) via [trfind](https://github.com/thatneat/trfind) sorted by recency.


# Contributing

This was mostly a weekend project that we Pull requests are welcome!

## Wishlist

Ideas are tracked using the (issues page)[https://github.com/thatneat/climbplan/issues].

## Installing & Running

* Clone the github repo
* npm install
* npm start
* visit http://localhost:8080/

### Developing on trfind

[trfind](https://github.com/thatneat/trfind) is used to search for trip reports across several sites. The recommended mode for contributing to trfind is to check out that repository and test it directly via its HTTP or command-line interfaces.

If you want to test the interaction between a local copy of trfind and a local copy of climbplan, you can set up your local version of trfind and modify [/app/api/tripReports.js](app/api/tripReports.js) to point to your locally running copy of trfind.

## Contributors

* [thatneat](https://github.com/thatneat)
* [jaimemarijke](https://github.com/jaimemarijke)
* [priti-wright](https://github.com/priti-wright)

# License

All rights reserved.
Some infra code from https://github.com/bradleyboy/yarsk/tree/e581d528774cbc7ef874e8b5955ab78c5e858af6 (MIT license stated but not included)
