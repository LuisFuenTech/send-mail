# API Global - SmartHome
## Export from mondoDB
`mongoexport -d databsae_name -c collection_name -o output_name.json`

## Import from mondoDB
`mongoimport -d databsae_name -c collection_name output_name.json`

## _*Note:*_
MongoDB creates a new database if no exits the put one. The _utils_ folder contains the json outputs
