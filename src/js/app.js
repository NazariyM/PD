import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';

import './components/_tabs';
import './common';
import './_global';

svg4everybody();

const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);

