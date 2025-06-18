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
  // for https://quay.io/repository/cloudservices/vulnerability-ui?tab=tags
  const path = 'apps/vulnerability'; // apps/landing
  const scope = 'vulnerability'; // landing
  const module = './SatelliteDemoComponent'; // ./AnsibleWidget
  useEffect(() => {
    setConfig({
      [scope]: {
        name: scope,
        manifestLocation: `https://ip-10-0-167-238.rhos-01.prod.psi.rdu2.redhat.com:1337/${path}/fed-mods.json`,
        cdnPath: `https://ip-10-0-167-238.rhos-01.prod.psi.rdu2.redhat.com:1337/${path}/`,
      },
    });
  }, [setConfig]);

  return (
    <div className="rh-cloud-inventory-page">
      <PageLayout searchable={false} beforeToolbarComponent={<PageHeader />}>
        {config[scope] && <ScalprumComponent scope={scope} module={module} />}
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
