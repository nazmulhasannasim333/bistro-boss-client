import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access_token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart =[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log(response);
            return response.data;
          },
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     })
        //     return response.json();
        //   },
      })

return [cart, refetch];
}

export default useCart;