#!/bin/bash
export FLASK_APP=./guild-discovery/index.py

if [[ $REBUILD_DATABASE == true ]]; then
    flask refreshguilds
    echo "rebuilding database"
else
    echo "no rebuild requested"
fi

flask run --host=0.0.0.0