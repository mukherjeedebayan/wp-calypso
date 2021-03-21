/**
 * Internal dependencies
 */
import { withoutPersistence } from 'calypso/state/utils';
import { CONCIERGE_INITIAL_REQUEST, CONCIERGE_INITIAL_UPDATE } from 'calypso/state/action-types';

export const availableTimes = withoutPersistence( ( state = null, action ) => {
	switch ( action.type ) {
		case CONCIERGE_INITIAL_REQUEST:
			return null;
		case CONCIERGE_INITIAL_UPDATE:
			return action.initial.availableTimes;
	}

	return state;
} );

export default availableTimes;