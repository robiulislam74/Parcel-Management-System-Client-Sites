import UserSideBar from '../Pages/Dashboard/User/UserSideBar'
// import DeliveryBoySideBar from '../Pages/Dashboard/DeliveryBoy/DeliveryBoySideBar'
// import AdminSideBar from '../Pages/Dashboard/Admin/AdminSideBar'
import useAdmin from '../Hooks/useAdmin'
import useDeliveryMen from '../Hooks/useDeliveryMen'
import useUser from '../Hooks/useUser'
import AdminSideBar from '../Pages/Dashboard/Admin/AdminSideBar'
import DeliveryBoySideBar from '../Pages/Dashboard/DeliveryBoy/DeliveryBoySideBar'

const Sidebar = () => {
  const {isAdmin} = useAdmin()
  // console.log("Admin:",isAdmin)
  const{isDeliveryMen} = useDeliveryMen()
  // console.log("deliveryMen",isDeliveryMen)
  const {isUser} = useUser()
  // console.log("isUser",isUser)
  return (
    <div>
     {isUser && <UserSideBar/>}
    {isDeliveryMen && <DeliveryBoySideBar/>}
    {isAdmin && <AdminSideBar/>}
    </div>
  )
}

export default Sidebar