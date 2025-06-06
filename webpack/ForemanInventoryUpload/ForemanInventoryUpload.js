import React, { useContext, useEffect } from 'react';
import { ScalprumComponent } from '@scalprum/react-core';
import PageLayout from 'foremanReact/routes/common/PageLayout/PageLayout';
import AccountList from './Components/AccountList';
import PageHeader from './Components/PageHeader';
import {
  ScalprumContextWrapper,
  ScalprumContext,
} from '../common/ScalprumModule/ScalprumContext';

const ForemanInventoryUpload = () => {
  const { config, setConfig } = useContext(ScalprumContext);
  useEffect(() => {
    setConfig({
      landing: {
        name: 'landing',
        manifestLocation: `${window.location.origin}/scalprum/apps/landing/fed-mods.json`,
        cdnPath: `${window.location.origin}/scalprum/apps/landing/`,
      },
    });
  }, [setConfig]);

  return (
    <div className="rh-cloud-inventory-page">
      <PageLayout searchable={false} beforeToolbarComponent={<PageHeader />}>
        {config.landing && (
          <ScalprumComponent scope="landing" module="./AnsibleWidget" />
        )}
        <AccountList />
      </PageLayout>
    </div>
  );
};
ForemanInventoryUpload.propTypes = {};

ForemanInventoryUpload.defaultProps = {};

const ForemanInventoryUploadWrapped = () => (
  <ScalprumContextWrapper>
    <ForemanInventoryUpload />
  </ScalprumContextWrapper>
);
export default ForemanInventoryUploadWrapped;
