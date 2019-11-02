import React, { useEffect, useState } from 'react';
import { getUser, User } from "../service/DataStore"

interface UserProps {
    username: string
}

export function UserComp(props: UserProps) {
    // This is state with hooks
    const [userinfo, setUserinfo] = useState<User | undefined>(undefined);

    // didComponentMound
    useEffect(() => {
        const callUser = async () => {
            let user = await getUser(props.username);
            setUserinfo(user);
        }
        callUser()
    }, [props.username]); //<-- Don't forget "[]"

    return (
        userinfo ?
            <table className="table">
                <tbody>
                {
                    Object.keys(userinfo).map(key => {
                        let value = Object(userinfo)[key];
                        return <tr key={key}><td>{key}</td><td>{value}</td></tr>
                    })
                }
                </tbody>
            </table>
            :
            (<div>loading...</div>)

    );
}

export const UserComp2 = (props: UserProps) => {
    // This is state with hooks
    const [userinfo, setUserinfo] = useState<User | undefined>(undefined);

    // didComponentMound
    useEffect(() => {
        const callUser = async () => {
            let user = await getUser(props.username);
            setUserinfo(user);
        }
        callUser()
    }, []); //<-- Don't forget "[]"

    return (
        <div>{userinfo ? userinfo.name : 'loading...'}</div>
    );
}