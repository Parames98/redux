import {useSelector, useDispatch} from 'react-redux';
import {setName} from "../store/slices/authSlice";


export default function Home() {
    const name = useSelector((state) => state.findName?.nameValue);
    console.log('My name is :' , name)
    const dispatch = useDispatch();

    const giveName = () => {
        dispatch(setName)
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={giveName}>
                Click Me
            </button>
        </div>
    );
}