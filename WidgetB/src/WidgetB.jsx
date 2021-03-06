/*
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import React, { Component } from 'react';
import styles from '../public/css/WidgetB.css';

const wrapperStyles = {
    padding: '30px 15px 15px 15px'
};

class WidgetB extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div style={wrapperStyles}>  
                <h1 className={styles.coloredtext}>Widget B</h1>
            </div>
        );
    }
}

global.dashboard.registerWidget("WidgetB", WidgetB);