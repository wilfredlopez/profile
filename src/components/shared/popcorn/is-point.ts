
import { Point } from './types';

const isPoint = (point: Object): point is Point =>
point.hasOwnProperty('x') && point.hasOwnProperty('y');
export default isPoint