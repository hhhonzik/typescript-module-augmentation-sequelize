import { CreateOptions, Model } from 'sequelize';

// this works
const testDirect: CreateOptions = {
  newKey: 'this works'
}


class TestModel extends Model {

}


// this doesn't
TestModel.create({

}, {
    newKey: 'this is still broken'
});