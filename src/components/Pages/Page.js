import React from 'react';
import PageHeader from './PageHeader';
import PageSidebar from './PageSidebar';
import './Page.css';
import ResourceList from './ResourceList';

const Page = () => {
  return (
    <div className="page">
      <PageHeader />
      <div className="page-main">
        <PageSidebar />
        <ResourceList />
      </div>
    </div>
  );
};

export default Page;
