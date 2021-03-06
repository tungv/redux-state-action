// import get from 'lodash/get';
import {
  get,
} from 'lodash';

const getDefaultValueByType = (type) => {
  const values = {
    string: '',
    number: 0,
    boolean: false,
    array: [],
    object: {},
  };

  return get(values, type, '');
};

export default getDefaultValueByType;
