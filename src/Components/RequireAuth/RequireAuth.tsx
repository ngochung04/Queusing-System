import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router';

const RequireAuth: React.FC<{children?: JSX.Element}> = ({children}) => {
    const user = useSelector((state: RootState)=> state.user)
    const navigate = useNavigate()
    useEffect(() => {
        // if (!user.email || user.email !== "") {
        //     navigate("/login")
        //     console.log("sign out")
        // } else {
        //     console.log("logged in")
        // }
    }, [])
  return children || <></>
}

export default RequireAuth