import {query} from 'svelte-apollo';
import {TEST, TEST_EXAMPLE_DATA} from '../../queries';
import {readable} from 'svelte/store';

const getTest = id => {
  if (false) { // ENV VAR TO HIT API INSTEAD OF MOCK
    return query(TEST, {
      variables: {id: id}
    });
  } else {
    return readable(TEST_EXAMPLE_DATA, () => {});
  }
};

export {getTest};