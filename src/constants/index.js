import { Dimensions } from 'react-native';
import { dynamicSize } from '../helpers/DynamicSize';
import {
  turnaroundOne,
  turnaroundTwo,
  turnaroundThree,
  turnaroundFour,
  commentOne,
  commentTwo,
  commentThree,
  commentFour,
} from './images';

const { width, height } = Dimensions.get('window');

export const Colors = {
  white: '#FFFFFF',
  mainBlue: '#1D7AEB',
  inActiveBlue: '#34DEE4'
};

export const metrics = {
  commonPadding: dynamicSize(10),
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,
};

export const carouselData = [
  {
    title: 'one',
    note: 'one',
    image: turnaroundOne,
    comment: commentOne
  },
  {
    title: 'two',
    note: 'four',
    image: turnaroundTwo,
    comment: commentTwo
  },
  {
    title: 'three',
    note: 'three',
    image: turnaroundThree,
    comment: commentThree
  },
  {
    title: 'four',
    note: 'four',
    image: turnaroundFour,
    comment: commentFour
  }
];
