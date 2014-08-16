Adoptees = new Meteor.Collection('adoptees');

AdopteeImages = new FS.Collection("adopteeImages", {
  stores: [new FS.Store.FileSystem("adopteeImages", {path: "~/uploads"})]
});

AdopteeImages.allow;