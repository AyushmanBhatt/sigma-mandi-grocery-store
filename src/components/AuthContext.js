/*import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}*/

import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { user, token } = action.payload;
      localStorage.setItem('user', JSON.stringify({ user, token }))
      return action.payload;
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { user: null, token: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const initialState = savedUser ? savedUser : { user: null, token: null };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    console.log('AuthContext state:', state)
  }, [state])
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}