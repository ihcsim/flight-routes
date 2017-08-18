# flight-routes

## Introduction
flight-routes is a webtask that checks if two airports are connected. It uses the flight routes data from https://openflights.org.

A running instance of this webtask has been posted to [webtask.io](https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes?src=YVR&des=SFO).

The following is the supported query parameters:

Parameters | Descriptions | Defaults
---------- | ------------ | -------
`src`      | the 3-letter IATA or 4-letter ICAO code of the source airport      |
`des`      | the 3-letter IATA or 4-letter ICAO code of the destination airport |

An airport locator at [logisticsworld.com](http://www.logisticsworld.com/airports.asp) can be used to find an airport IATA and ICAO code.

Some sample test runs using `curl`:
```
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=NBO&des=MGQ"
"NBO and MGQ are connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=SFO&des=YVR"
"SFO and YVR are connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=KSFO&des=YVR"
"KSFO and YVR aren't connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=SFO&des=YVR"
"SFO and YVR are connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=YBR&des=YVR"
"YBR and YVR aren't connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=YYZ&des=YVR"
"YYZ and YVR are connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=YWG&des=YVR"
"YWG and YVR are connected"
$ curl "https://wt-e9563e87ef7289e475f9ffdf6e61081c-0.run.webtask.io/flight-routes/?src=SFO&des=NRT"
```

## Development

Prerequisites:

* Install the [wt-cli 6.2.2](https://webtask.io/cli) CLI
* Initialize your webtask profile using `wt init`

Install this webtask by running:
```
$ wt create -n flight-routes app.js
```
