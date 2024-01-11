'use strict';
const assert = require('assert');
const BaseUser = require('./base');

class TipaltiUser extends BaseUser {
  constructor(id, email, extraOptions = {}) {
    super(id);
    assert(email, 'TipaltiUser.email is required');
    this.email = String(email);
    this.user = this.email;
    this.extraOptions = extraOptions;
  }
  get query() {
    let query = super.query;
    return Object.assign(query, {
      email: this.email,
      alias: this.alias,
      user: this.user,
      ...this.extraOptions
    });
  }
}

module.exports = TipaltiUser;
