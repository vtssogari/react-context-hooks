import React, { useEffect, useState } from 'react';
import { getUser, User } from "../service/DataStore"

interface UserProps {
    username: string
}

// Another way functional component
export const UserComp = (props: UserProps) => {
    // This is state with hooks
    const [userinfo, setUserinfo] = useState<User | undefined>(undefined);
    const [username, setUserName] = useState<string>('');

    // didComponentMound
    useEffect(() => {
        search(props.username)
    }, []); //<-- Don't forget "[]"

    const search = async (usernameText:string) => {
        let user = await getUser(usernameText);
        setUserinfo(user);
    }

    const onUserChanges = (e:React.ChangeEvent<HTMLInputElement>) => {
        let usernameText = e.currentTarget.value;
        setUserName(usernameText);
    }

    const onEnterKey = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter' && username != ''){
            search(username);
        }
    }

    const onClickViewUser = async (e:React.MouseEvent) => {
        search(username);
    }

    return (
        <div>
            <div className="row">
                <div className="col">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <input type="text" onKeyPress={onEnterKey} onChange={onUserChanges} className="form-control" placeholder="View username" aria-label="View username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button onClick={onClickViewUser} className="btn btn-outline-secondary" type="button" id="button-addon2">View</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                {userinfo ?
                    <table className="table">
                            <tbody>
                                {
                                    Object.keys(userinfo).map(key => {
                                        let value = Object(userinfo)[key];
                                        if(key =='avatar_url'){
                                            return <tr key={key}><td>{key}</td><td><img src={value}/></td></tr>
                                        }else{
                                            return <tr key={key}><td>{key}</td><td>{value}</td></tr>
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                        :
                    (<div>loading...</div>)
                }
                </div>
        </div>
        </div>
    );
}

//classical class way
export class UserClassComp extends React.Component<UserProps, User> {
    constructor(props: UserProps) {
        super(props);
    }
    async componentDidMount() {
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