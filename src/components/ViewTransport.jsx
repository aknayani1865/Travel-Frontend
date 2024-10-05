import {React} from 'react';
import ViewItems from './ViewItems';

const ViewTransports = () => {
  return <ViewItems itemType="Transports" apiEndpoint="https://travel-backend-jr66.onrender.com/api/admin/transports" />;
};

export default ViewTransports;