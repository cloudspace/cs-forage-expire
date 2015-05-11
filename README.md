#CS Forage Expire

Service that wraps localForage to allow storing items with an expiration
Requires: localForage, moment.js
 
```javascript
ForageExpire.setItem('someData', 'I want to expire this in 1 day', moment().add(1, 'days))
```

```javascript
ForageExpire.getItem('someData', function(data){ console.log(data); })
```

## Development Setup

- `npm install`
- `bower install`
- `npm install -g uglify`

## Use with bower

`"cs-forage-expire": "git@github.com:cloudspace/forage-expire.git#master",`

Include the following in your html

```html
<script src='./<my_base_path>/bower_components/dist/cs-forage-expire.min.js'></script>
```
## To minify
uglifyjs ./lib/cs-forage-expire.js ./lib/cs-forage-expire-factory.js -o ./dist/cs-forage-expire.min.js

## Releases
TBD

## Contribution
TBD