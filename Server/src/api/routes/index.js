import User from '../model/user.model';
import Item from '../model/items.model';

const routesInit = app => {
  // register routes
  app.post('/register', async (req, res) => {
    const userObj = {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avetar_img: req.body.avetar_img,
      favourite: req.body.favourite,
      cart: req.body.cart,
    };
    // Check if there is a user
    const user = await User.findOne({email: req.body.email});
    if (user) {
      res.json('all ready have account');
    } else {
      // create user
      await User.create(userObj)
        .then(user => {
          res.json('User Aded 🚀');
        })
        .catch(err => {
          res.json(err);
        });
    }
  });

  // login route
  app.post('/login', async (req, res) => {
    // find user
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(`User find ${user} 👍❤👍👍👍👍👍👍👍👍`);
    // check and send response
    if (user) {
      return res.json({
        status: 'ok',
        valid_user: true,
        first_name: user.first_name,
        avetar_img: user.avetar_img,
        favourite: user.favourite,
      });
    } else {
      return res.json({status: 'error', valid_user: false});
    }
  });

  // items store
  app.post('/items/set', async (req, res) => {
    const itemObj = {
      name: req.body.name,
      main_description: req.body.main_description,
      view_description: req.body.view_description,
      price: req.body.price,
      category: req.body.category,
      main_img: req.body.main_img,
      images: req.body.images,
      color: req.body.images,
    };
    await Item.create(itemObj)
      .then(item => {
        res.json({status: 'ok', item});
      })
      .catch(err => {
        res.json({status: 'error', err});
      });
  });

  //Items req
  app.get('/items/get', async (req, res) => {
    //find items
    const items = await Item.find();
    if (items) {
      console.log('someone get data 😊');
      return res.json(items);
    } else {
      return res.json({status: 'error'});
    }
  });
};
export {routesInit};
