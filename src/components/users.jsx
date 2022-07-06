import React, {useState} from "react";
import api from "../api"


const Users = () => {

    const [users, setUsers] = useState(api.users.fetchAll());

    const qualities = (arrQ, id) => {

        const list = arrQ.map((item, i) => {
    
            const classes = `m-2 badge bg-${item.color}`;    
            return <div key = {id + i} className = {classes}>{item.name}</div>;

        });
    
        return list;

    };

    const handleDelete = (id) => {

        setUsers((prevState) => prevState.filter(users => users._id !== id));
    
    };

    const userArr = () => {
        
        const arr = users.map((user) => {
            
                return <tr key = {user._id}>
                        <td>{user.name}</td>
                        <td>{qualities(user.qualities, user._id)}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td><button className='btn btn-danger' onClick = {() => handleDelete(user._id)}>delete</button></td>
                    </tr>;  

            });
        
        return arr;
        }
        const getBadgeClasses = () => { 

        let classes = "badge ";
        classes += users.length === 0 ? "bg-danger": "bg-primary";

        return classes;

        }
        
        let result = '';

        const textCount = (count) => {

            const lastNumber = count % 10;

            if(lastNumber === 1){
                return `${count} человек тусанет с тобой сегодня`;
            }
            if(((lastNumber === 2 || lastNumber === 3 || lastNumber === 4) && count > 21) || (count === 2 || count === 3 || count === 4) ){
                return `${count} человека тусанут с тобой сегодня`;
            }
            
            return `${count} человек тусанет с тобой сегодня`;

        }

        if(users.length){
         
         result = <>
           <span className={getBadgeClasses()}>{textCount(users.length)}</span>
           <table className="table">            
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userArr()}                
                    </tbody>
                </table>
                </>
        } else{
            result =  <span className={getBadgeClasses()}>Никто с тобой не тусанет</span>;
        };

           return result;
           
    };

export default Users;
