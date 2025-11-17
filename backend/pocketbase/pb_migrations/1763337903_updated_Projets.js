/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // remove field
  collection.fields.removeById("file3123270139")

  // remove field
  collection.fields.removeById("file589299777")

  // remove field
  collection.fields.removeById("file1411854551")

  // remove field
  collection.fields.removeById("file3393430900")

  // remove field
  collection.fields.removeById("file3175388642")

  // remove field
  collection.fields.removeById("file609076312")

  // remove field
  collection.fields.removeById("file1397421262")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file1542800728",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
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

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3123270139",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file589299777",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file1411854551",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "file3393430900",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_4",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "file3175388642",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_5",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file609076312",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_6",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file1397421262",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_7",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "file1542800728",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "field",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
