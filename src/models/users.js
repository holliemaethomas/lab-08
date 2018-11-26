'use strict';

class User {
  
  static FindOne (id) {
    let query = { _id: id };
    return this.find(query);
  }
  static find(query) {
    return storage.find(query);
  }

  static save(data) {
    return storage.save(data);
  }

  static delete(data) {
    return storage.delete(data);
  }

  static put(id, data) {
    return storage.save(data);
  }

  static patch(id, data) {
    return storage.save(data);
  }

}
