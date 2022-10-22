import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import LensModel from '../../../models/Lens';
import { lensMock, lensMockWithId, lensMockWithIdArray, updatedLensMock } from '../../mocks/lensMocks';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(lensMockWithIdArray);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedLensMock);
  });

  after(() => {
    sinon.restore();
  });

  describe('Creating a Lens', () => {
    it('sucessfuly crated', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('reading a Lens', () => {
    it('sucessfuly read', async () => {
      sinon.stub(Model, 'findOne').resolves(lensMockWithId);
      const lensFound = await lensModel.readOne('5f9f1b9b9b9b9b9b9b9b9b9b');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
      sinon.restore();
    });

    it('With id not valid', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });

    it('With id not found', async () => {
      sinon.stub(Model, 'findOne').resolves(null);
      const lensFound = await lensModel.readOne('5f9f1b9b9b9b9b9b9b9b9b9a');
      expect(lensFound).to.be.null;
      sinon.restore();
    });
  });

  // describe('reading all Lens', () => {
  //   it('sucessfuly read', async () => {
  //     const lensFound = await lensModel.read();
  //     expect(lensFound).to.be.deep.equal(lensMockWithIdArray);
  //   });
  // });

  // describe('Updating a Lens', () => {
  //   it('If found and update with sucess', async () => {
  //     const lensUpdated = await lensModel.update('5f9f1b9b9b9b9b9b9b9b9b9b', {
  //       degree: 3.5,
  //       antiGlare: false,
  //       blueLightFilter: false,
  //     });
  //     expect(lensUpdated).to.be.deep.equal(updatedLensMock);
  //   });

  //    it('If the id was in the incorrect format', async () => {
  //      try {
  //        await lensModel.update('dsada', {});
  //      } catch (error: any) {
  //        expect(error.message).to.be.deep.eq('InvalidMongoId');
  //      }
  //    });
  // });

    // describe('Deleting a Lens', () => {
    //   it('successful deletion', async () => {
    //     const lensDeleted = await lensModel.destroy('5f9f1b9b9b9b9b9b9b9b9b9b');
    //     expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    //   });

    //   it('_id invalid', async () => {
    //     try {
    //       await lensModel.destroy('idinvalid');
    //     } catch (error: any) {
    //       expect(error.message).to.be.eq('InvalidMongoId');
    //     }
    //   });
    // });


});
