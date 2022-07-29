import mongoose, {Schema} from 'mongoose';

const ItemSchema = new Schema({
  name: {type: String, required: true},
  main_description: {type: String, required: true},
  view_description: {type: String, required: true},
  price: {type: String, required: true},
  category: {type: String, required: true},
  main_img: {type: String, required: true},
  images: {},
  color: [],
});

const Item = mongoose.model('items', ItemSchema);

export default Item;
