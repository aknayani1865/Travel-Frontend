import React from 'react';
import ViewItems from './ViewItems';

const ViewHotels = () => {
  return <ViewItems itemType="Hotels" apiEndpoint="https://travel-backend-jr66.onrender.com/api/admin/hotels" />;
};

export default ViewHotels;