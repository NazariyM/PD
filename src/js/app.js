import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';

import './components/_scroll';
import './components/_tabs';
import './components/_header';
import './components/_sliders';
import './components/_map';
import './components/_stat-block';
import './components/_parking';
import './components/_tech-map';
import './common';
import './helpers';

svg4everybody();

const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);