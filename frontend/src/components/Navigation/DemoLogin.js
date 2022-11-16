import { useDispatch } from "react-redux"
import { login } from "../../store/session";

export const DemoLogin = () => {
    const dispatch = useDispatch();
    const loginWithDemoCredentials = () => {
        dispatch(login({credential: 'FakeUser1', password: 'password2'}))
    }
    return (
        <button onClick={loginWithDemoCredentials}>DEMO LOGIN</button>
    )
}
