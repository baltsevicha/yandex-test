import React from 'react';

const StyledCaptureAreaContainer = storyFn => {
    return (
        <div style={{
            padding: 20,
        }} id="capture-area">{storyFn()}</div>
    )
};

export default StyledCaptureAreaContainer;