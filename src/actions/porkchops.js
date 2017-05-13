import axios from 'axios';
import {ADD_CHOP, CHANGE_PORK_TYPE} from '../constants';

export const addChop = () => ({type: ADD_CHOP});
export const changeType = (index, porkType) => ({type: CHANGE_PORK_TYPE, index, porkType});
