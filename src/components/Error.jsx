import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const err = useRouteError();
    return (
        <div><h1>Oops!!!</h1><h2>Something went wrong!!. Reason: {err.data} </h2></div>
    )
}
