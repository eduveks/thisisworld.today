#!/bin/bash

./build.sh

trash-put public/*

cp -r build/* public/

firebase deploy

