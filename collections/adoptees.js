Adoptees = new Meteor.Collection('adoptees');

// var adopteeImagesStore = new FS.Store.GridFS("adopteeImages", {
// });

AdopteeImages = new FS.Collection("adopteeImages", {
  stores: [new FS.Store.GridFS("adopteeImages")]
});

AdopteeImages.allow;
