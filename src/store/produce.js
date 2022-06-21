import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}



export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE: {
        // goes through array turns it into an object, assigns produce.id as key to produce value
        const newState = {};
        action.produce.forEach(produce => {
          newState[produce.id] = produce;
        });
        return newState;
    }
      default:
        return state;
    }
  }
