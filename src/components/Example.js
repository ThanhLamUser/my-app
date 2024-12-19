import { useEffect, useState } from "react";



const Example = () => {


    const [count, setCount] = useState(0);
    const [action, checkAction] = useState('');

    useEffect(()=>{
        fetch(`https://reqres.in/api/${action}`)
        .then(res => console.log({res}))
        .catch(err => console.log({err}))
    },[action]);

    return (
        <div>
            <button onClick={()=> checkAction('users')}>Get User</button>
            <button onClick={()=> checkAction('comments')} >Get Comments</button>

        </div>
    );
};

export default Example;