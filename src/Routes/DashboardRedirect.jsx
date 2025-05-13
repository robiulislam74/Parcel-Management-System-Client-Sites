// DashboardRedirect.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseContext from '../Hooks/UseContext';
import { ColorRing } from 'react-loader-spinner';
import useAdmin from '../Hooks/useAdmin';
import useUser from '../Hooks/useUser';
import useDeliveryMen from '../Hooks/useDeliveryMen';

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const { user } = UseContext()
  const {isAdmin} = useAdmin();
  const {isUser} = useUser();
  const {isDeliveryMen} = useDeliveryMen();

  useEffect(() => {
      if (isAdmin) {
        navigate('/dashboard/statistics');
      }

    if(isUser){
        navigate('/dashboard/myParcels');
    }
    if(isDeliveryMen){
        navigate('/dashboard/deliveryList');
      }
    



    //   } else {
    //     // Example logic: adjust based on your roles
    //     switch (users?.role) {
    //       case 'User':
    //         navigate('/dashboard/myParcels');
    //         break;
    //       case 'DeliveryMen':
    //         navigate('/dashboard/deliveryList'); // or whatever route
    //         break;
    //     //   default:
    //     //     navigate('/dashboard/myParcels');
    //     }
    //   }

  }, [isDeliveryMen,isUser,isAdmin, user, navigate]);

  return <div className='min-h-[calc(100vh-88px)] flex justify-center items-center'>
              <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>; 
};

export default DashboardRedirect;
