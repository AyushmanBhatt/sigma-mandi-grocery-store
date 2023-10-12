import { useAuthContext } from './useAuthContext'
import cartContext from '../components/cartContext'
import { useContext } from 'react'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  // const { productsDispatch } = useContext(cartContext);

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    // productsDispatch({type: 'TOGGLE_CART', payload: null})
  }

  return { logout }
}