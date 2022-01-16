import * as React from "react";
import { Switch } from 'react-router';

import PrivateRouter from './PrivateRouter';

import NotFound from '../components/NotFound';

import Watch from '../pages/mobile/Watch';
import Explore from '../pages/mobile/Explore';

export default function MobilePage() {
    return (<Switch>
        <PrivateRouter exact path="/watch" component={Watch} />
        <PrivateRouter exact path="/explore" component={Explore} />
        {/* <PrivateRouter exact component={NotFound} /> */}
    </Switch>);
}