import React, {Image} from 'react';

const encodedData =
  'iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVRIie3WPQrCMBjG8b9C3fyYRKQn6DG8gQdTKngVQVfB2UGw2OLiFToq1MG+oDHU1CS69IFnSFr6y5S+8J4BsAZWQE/z3EnGwB4oyh6A0DUSAucnRJqVB3CSEZBqEGkCDG2RANhWINId0LGBlgaIdGEDnWpA2bdIS7NXGLxTO20XH2mgBmqg/0G5su76gi7KeuIC0mXO60V6BPo+oAi4KVgCTPEwQ8SY/zo+tTIBsPkFJFgMXH1DkgiY8Ri9cp+Qk9wB4ciDldPzrGoAAAAASUVORK5CYII=';

export const backTopTopArrow = () => (
<Image source={{uri: `data:image/png;base64, ${encodedData}`}} />
)