/**
 * results.jsx: describe data attributes associated with all prediction
 *              results.
 *
 * Note: the triple dots is the 'object spread' syntax:
 *
 *       http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
 *
 * Note: this script implements jsx (reactjs) syntax.
 *
 */

import 'core-js/modules/es6.object.assign';

const results = (state='default', action) => {
    var type = 'default';
    var data = null;

    if (
        action &&
        action.results
    ) {
        var nid = !!action.results.nid ? action.results.nid : 'default';
        var data = !!action.results.data ? action.results.data : null;
    }

    switch(action.type) {
        case 'SET-CURRENT-RESULT':
            return Object.assign({}, state, {
                results: {
                    nid: nid,
                    data: data
                }
            });
        default:
            return state;
    }
}

// indicate which class can be exported, and instantiated via 'require'
export default results