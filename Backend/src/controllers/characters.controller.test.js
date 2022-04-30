const characgtersController = require('./characters.controller');
const Character = require('../models/character.model');

jest.mock('../models/Character.model');
let req;
let res;

describe('Given a getAllCharacters function', () => {
  describe('When is invoked', () => {
    describe('And find is resolved', () => {
      test('Then res.json should have been called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        Character.find.mockResolvedValue({});

        await characgtersController.getAllCharacters(req, res);

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
        Character.find.mockRejectedValue({});

        await characgtersController.getAllCharacters(req, res);
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

describe('Given a postCharacter function', () => {
  describe('When is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        req = { params: {} };
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        Character.create.mockResolvedValue({});

        await characgtersController.postCharacter(req, res);
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
        Character.create.mockRejectedValue({});

        await characgtersController.postCharacter(req, res);
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

describe('Given a findOneCharacter function', () => {
  describe('When is invoked', () => {
    describe('And findById is resolved', () => {
      describe('And a Character with CharacterId exists', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          const next = jest.fn();
          Character.findById.mockResolvedValue({});

          await characgtersController.findOneCharacter(req, null, next);

          expect(next).toHaveBeenCalled();
        });
      });

      describe('And a Character with CharacterId does not exist', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          res = {
            status: jest.fn(),
            send: jest.fn()
          };
          Character.findById.mockResolvedValue(undefined);

          await characgtersController.findOneCharacter(req, res, null);

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
        Character.create.mockRejectedValue({});

        await characgtersController.findOneCharacter(req, res);
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
