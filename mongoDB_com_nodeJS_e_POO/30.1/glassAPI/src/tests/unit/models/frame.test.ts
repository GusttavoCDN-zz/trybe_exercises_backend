// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, frameArrayMock, frameUpdatedMock } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(frameArrayMock);
    sinon.stub(Model, 'findOneAndUpdate').resolves(frameUpdatedMock);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('searching all frames', () => {
    it('returns an array with all frames', async () => {
      const framesFound = await frameModel.read();
      expect(framesFound).to.be.deep.equal(frameArrayMock);
    })
  });

  describe('Updating a frame', () => {
    it('If found and update with sucess', async () => {
      const frameUpdated = await frameModel.update('62cf1fc6498565d94eba52cd', {
        material: 'Bronze',
        color: 'Preto'
      });

      expect(frameUpdated).to.be.deep.equal(frameUpdatedMock);
    });
  });

   it('If the id was in the incorrect format', async () => {
     try {
      await frameModel.update('dsada', {})
     } catch (error: any) {
        expect(error.message).to.be.deep.eq('InvalidMongoId');
     }
   });
});
