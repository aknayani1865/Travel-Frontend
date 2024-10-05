import React from 'react';
import ViewItems from './ViewItems';

const ViewDestinations = () => {
  return <ViewItems itemType="Destinations" apiEndpoint="https://travel-backend-jr66.onrender.com/api/admin/destinations" />;
};

export default ViewDestinations;