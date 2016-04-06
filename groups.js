Groups = new Mongo.Collection('groups');

if (Meteor.isClient) {

  Template.form.events({
    "submit .new-group": function(event){
      event.preventDefault();
      var contactName = $('[name=contactName]').val();
      var contactEmail = $('[name=contactEmail]').val();
      var groupName = $('[name=groupName]').val();
      var phoneNumber = $('[name=phoneNumber]').val();
      var rate = parseInt($('[name=rate]').val());
      var lesson = $('[name=lesson]').val();
      var deposit = parseInt($('[name=deposit]').val());
      var groupDay = parseInt($('[name=groupDay]').val());
      var groupMonth = $('[name=groupMonth]').val();
      var timeslot = $('[name=timeslot]').val();
      var numberOfGuest = parseInt($('[name=numberOfGuest]').val());

      Groups.insert({
        contactName: contactName,
        contactEmail: contactEmail,
        groupName: groupName,
        phoneNumber: phoneNumber,
        rate: rate,
        lesson: lesson,
        deposit: deposit,
        groupMonth: groupMonth,
        groupDay: groupDay,
        timeslot: timeslot,
        numberOfGuest: numberOfGuest,
        createdAt: new Date()
      });
      Router.go('display');
    }
  });

  Template.display.helpers({
    'display': function(){
      var d = new Date();
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";

      var currentMonth = month[d.getMonth()];
      return Groups.find({groupMonth: currentMonth}, {sort: {groupDay: 1}});
    }
  });

  Template.january.helpers({
    'january': function(){
      var month = "January";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.january.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.february.helpers({
    'february': function(){
      var month = "February";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.february.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.march.helpers({
    'march': function(){
      var month = "March";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.march.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.april.helpers({
    'april': function(){
      var month = "April";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.april.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.may.helpers({
    'may': function(){
      var month = "May";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.may.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.june.helpers({
    'june': function(){
      var month = "June";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.june.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.july.helpers({
    'july': function(){
      var month = "July";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.july.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.august.helpers({
    'august': function(){
      var month = "August";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.august.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.september.helpers({
    'september': function(){
      var month = "September";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.september.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.october.helpers({
    'October': function(){
      var month = "October";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.october.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.november.helpers({
    'november': function(){
      var month = "November";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.november.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });

  Template.december.helpers({
    'december': function(){
      var month = "December";
      return Groups.find({groupMonth: month}, {sort: {groupDay: 1}});
    }
  });

  Template.december.events({
    'click .delete-group': function(event){
      var documentId = this._id;
      Groups.remove({_id: documentId});
    }
  });
}

if (Meteor.isServer) {

}
