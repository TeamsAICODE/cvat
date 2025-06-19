// Copyright (C) CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from 'reducers';

function CVATLogo(): JSX.Element {
    return (
        <div className='cvat-logo-text'>
            아이코드랩 주식회사
        </div>
    );
}

export default React.memo(CVATLogo);
