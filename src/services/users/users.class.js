import feathersMongoose from 'feathers-mongoose';
import { userModel } from './users.schema.js';

const { Service } = feathersMongoose;

export class UserService extends Service {
  async remove(id, params) {
    const data = {
      isDeleted: true,
    };
    return super.patch(id, data, params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: userModel,
  };
};
