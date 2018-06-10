import main from './main';

const routes = (app) => {
  const router = app.get('router');

  router.post('/insert-profile', (req, res) => {
    const data = req.body;

    main.calculateProfile(data, (cb) => {
      res.send(cb.profile);
    });
  });

  app.use('/api', router);
};

module.exports = routes;
