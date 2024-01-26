import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Page from '@components/Page';

function ExampleInvoices(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Invoices"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/invoices"
    >
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleInvoices;
