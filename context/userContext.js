import React, { useState, useEffect, useContext, useMemo } from "react";
import { axios } from '../settings/base'
import { getToken } from '../settings/auth'

const UserContext = React.createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [chargeUser, setChargeUser] = useState(true);

  useEffect(() => {
    const chargeSession = async () => {
      if (!getToken()) {
        setChargeUser(false)
        return
      }
      try {
        const { data } = await axios.get("/users/current");
        setUser(data)
        setChargeUser(false)
      } catch (error) {
        console.log(error)
      }
    }
    chargeSession()
  }, [])

  const value = useMemo(() => {
    return {
      user,
      chargeUser,
      setUser,
      setChargeUser,
    };
  }, [user, chargeUser])

  return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('no exite el provider para el componente')
  }
  return context
}