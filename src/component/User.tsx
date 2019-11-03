import React, { useEffect, useState } from 'react';
import { getUser, User } from "../service/DataStore"

interface UserProps {
    username: string
}

//functional component
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

// Another way functional component
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

//classical class way
export class UserClassComp extends React.Component<UserProps, User> {
    constructor(props:UserProps){
        super(props);
    }
    async componentDidMount(){
        let user = await getUser(this.props.username);
        this.setState(user);
    }
    render() {
        return (
            this.state ?
                <table className="table">
                    <tbody>
                    {
                        Object.keys(this.state).map(key => {
                            let value = Object(this.state)[key];
                            return <tr key={key}><td>{key}</td><td>{value}</td></tr>
                        })
                    }
                    </tbody>
                </table>
                :
                (<div>loading...</div>)
        );
    } 
}