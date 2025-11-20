/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file4270449830",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images_mobile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // remove field
  collection.fields.removeById("file4270449830")

  return app.save(collection)
})
