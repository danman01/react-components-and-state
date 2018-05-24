#!/bin/bash

# find by title

echo

URL='http://imdbapi.net/api' 
API_KEY='0vjNl9Wbe5Jg3LHlxxEQ1apwTy9ke4' 
TITLE='batman' 
FORMAT='json'
curl -X POST "${URL}?key=${API_KEY}&title=${TITLE}" \
  --include \
  -H "apikey: ${API_KEY}" \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/x-www-form-urlencoded'

echo
