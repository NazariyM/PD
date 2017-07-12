import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import perfectScrollbar from 'perfect-scrollbar';

import './components/_tabs';
import './components/_menu';
import './components/_sliders';
import './components/_map';
import './common';
import './_global';

svg4everybody();

const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);

