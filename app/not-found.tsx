import * as React from 'react';

import ButtonGoBack from '@design-system/button-go-back';
import Typography from '@design-system/typography';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <Typography as="h1" size="2xl">
        404 page
      </Typography>
      <ButtonGoBack to="/" label="Go back" />
    </div>
  );
}

export default NotFoundPage;
