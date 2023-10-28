#!/usr/bin/env sh


curl https://manifold.markets/api/v0/market -X POST -H 'Content-Type: application/json' \
    -H 'Authorization: Key $MANIFOLD_API_KEY'
    --data-raw '{"outcomeType":"BINARY", \
                 "question":"Is there life on Mars?", \
                 "description":"Im not going to type some long ass example description.", \
                 "closeTime":1700000000000, \
                 "initialProb":25}'
