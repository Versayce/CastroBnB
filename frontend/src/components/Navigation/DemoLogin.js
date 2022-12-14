import { useDispatch } from "react-redux"
import { login } from "../../store/session";

export const DemoLogin = () => {
    const dispatch = useDispatch();
    const loginWithDemoCredentials = () => {
        const loginData = {credential: 'FakeUser1', password: 'password2'}
        dispatch(login({ loginData }))
    }
    return (
        <div className="profile-dropdown-buttons" onClick={loginWithDemoCredentials}>DEMO LOGIN</div>
    )
}
