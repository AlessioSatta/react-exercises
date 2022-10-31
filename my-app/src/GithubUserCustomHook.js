import React from 'react';
import { useGithubUser } from './useGithubUser';

export function GithubUserCustomHook({ username }) {
   const { data } = useGithubUser(username)

    return (
        <div>
            {data && <h1>Lo username di Github è il seguente: {data.name}</h1>}
        </div>
    )
}