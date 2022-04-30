const favoritesController = require('./favorites.controller');
const Favorite = require('../models/favorite.model');

jest.mock('../models/Favorite.model');
let req;
let res;

describe('Given a getAllFavorites function', () => {
  describe('When is invoked', () => {
    describe('And find is resolved', () => {
      test('Then res.json should have been called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        Favorite.find.mockResolvedValue({});

        await favoritesController.getAllFavorites(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Favorite.find.mockRejectedValue({});

        await favoritesController.getAllFavorites(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a postFavorite function', () => {
  describe('When is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        req = { params: {} };
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        Favorite.create.mockResolvedValue({});

        await favoritesController.postFavorite(req, res);
      });

      test('Then res.json should have been called', async () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.status should have been called with 201', async () => {
        expect(res.status).toHaveBeenCalledWith(201);
      });
    });

    describe('And create is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Favorite.create.mockRejectedValue({});

        await favoritesController.postFavorite(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a findOneFavorite function', () => {
  describe('When is invoked', () => {
    describe('And findById is resolved', () => {
      describe('And a Favorite with FavoriteId exists', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          const next = jest.fn();
          Favorite.findById.mockResolvedValue({});

          await favoritesController.findOneFavorite(req, null, next);

          expect(next).toHaveBeenCalled();
        });
      });

      describe('And a Favorite with FavoriteId does not exist', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          res = {
            status: jest.fn(),
            send: jest.fn()
          };
          Favorite.findById.mockResolvedValue(undefined);

          await favoritesController.findOneFavorite(req, res, null);

          expect(res.status).toHaveBeenCalledWith(404);
        });
      });
    });

    describe('And findById is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Favorite.create.mockRejectedValue({});

        await favoritesController.findOneFavorite(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
