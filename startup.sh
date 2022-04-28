#!/bin/bash
export mongodb_URI='mongodb+srv://cs_sj:BrandeisSpr22@cluster0.kgugl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
#export mongodb_URI='mongodb://localhost:27017/cs103a_L36'
echo "connecting to $mongodb_URI"
nodemon
