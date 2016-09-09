import React from 'react';

import SearchBox from '../containers/SearchBox';
import ResultBox from './ResultBox.jsx';
import styles from './SplashBox.scss';

const googleStaticMapsApiKey = 'AIzaSyAouSFTFEITDfEGYoGaU5Nhr8hQvk7c_-0';


const SplashBox = props => <ResultBox>
    <title>ClimbPlan</title>
    <SearchBox />
</ResultBox>;


export default SplashBox;