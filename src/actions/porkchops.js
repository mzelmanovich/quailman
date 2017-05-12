import axios from 'axios';
import {ADD_CHOP} from '../constants';

export const addChop = (chop) => ({chop, type: ADD_CHOP});
export const makeChop = ({type, startFunction, result}) =>


