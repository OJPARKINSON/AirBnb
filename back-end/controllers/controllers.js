import mongoose from 'mongoose';

import { UsersSchema, PropertiesSchema, StaysSchema } from '../models/models';

const User = mongoose.model('users', UsersSchema);
const Properties = mongoose.model('properties', PropertiesSchema);
const Stay = mongoose.model('stays', StaysSchema);

export const securityMiddleware = (req, res, next) => {
  if (req.session.user_id) {
    next();
  } else {
    res.send('Error');
  }
};

export const userLogin = (req, res) => {
  console.log(req.body);
  User.find(req.body, (err, docs) => {
    if (err || !docs[0]) {
      res.redirect(301, 'http://localhost:3000/login#error');
    }
    if (docs[0]) {
      req.session.user_id = docs[0]._id;
      res.redirect(301, 'http://localhost:3000/user');
    }
  });
};

export const addNewUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) {
      console.error(err);
    }
    res.redirect(301, 'http://localhost:3000/login/');
  });
};

export const addNewProperty = (req, res) => {
  if (!req.session.user_id) {
    res.redirect(301, 'http://localhost:3000/login/');
  }
  req.body.user_id = req.session.user_id;
  const newProperty = new Properties(req.body);
  newProperty.save((err, newProp) => {
    if (err) {
      console.error(err);
    }
    res.redirect(301, `http://localhost:3000/property/${newProp[0]._id}`);
  });
};

export const getProperties = (req, res) => {
  Properties.find((err, docs) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).send(docs);
  });
};

export const getProperty = (req, res) => {
  Properties.find({ _id: req.query.propertyID }, (err, docs) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(docs);
  });
};

export const newStay = (req, res) => {
  if (!req.session.user_id) {
    res.redirect(301, 'http://localhost:3000/login/');
  }
  req.body.user_id = req.session.user_id;
  const stay = new Stay(req.body);
  stay.save(err => {
    if (err) {
      console.error(err);
    }
    return res.redirect(301, `http://localhost:3000/property/${req.body.property}`);
  });
  res.status(500);
};

export const getUser = async (req, res) => {
  console.log(req.body);
  const usersProfile = [
    await User.findOne({ _id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
    await Stay.find({ user_id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
    await Properties.find({ user_id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
  ];
  res.status(200).send(usersProfile);
};

export const getProfile = async (req, res) => {
  const usersProfile = [
    await User.findOne({ _id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
    await Stay.find({ user_id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
    await Properties.find({ user_id: req.session.user_id }, (err, docs) => {
      if (err) {
        console.log(err);
      }
      return docs[0];
    }),
  ];
  res.status(200).send(usersProfile);
};
