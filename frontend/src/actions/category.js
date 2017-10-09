import * as CategoryAPI from '../utils/categoryAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'


export const fetchAllCategories = () => (dispatch) => {
  CategoryAPI.fetchAllCategories().then(
    (categories) => dispatch(receiveCategories(categories))
  );
};


function receiveCategories (categories){
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}


