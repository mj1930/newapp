import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Name } from './../model/model';
import './main.html';

Template.app.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.app.helpers({

  names() {
    var names = Name.find({}).fetch();
    return names;
  }
});

Template.app.events({

  'click #click': function(evt, tmpl) {
    var name = $("#name").val();
    Name.insert({
      name: name,
      createdAt: new Date()
    })
  }
});
