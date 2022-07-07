import React, {useState} from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const getBadgeQualities = (arrQual) => {        
        const BadgeList = arrQual.map((item) => {                
            const classes = `m-2 badge bg-${item.color}`;    
            return <span key = {item._id} className = {classes}>{item.name}</span>;
        });    
        return BadgeList;
    };
    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter(users => users._id !== id));    
    };
    const userArr = () => {                
        const arrUser = users.map((user) => {                        
            const {_id, name, qualities, profession, completedMeetings, rate} = user;
            return <tr key = {_id}>
                    <td>{name}</td>
                    <td>{getBadgeQualities(qualities, _id)}</td>
                    <td>{profession.name}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate}/5</td>
                    <td><button className='btn btn-danger' onClick = {() => handleDelete(_id)}>delete</button></td>
                  </tr>;
            });        
        return arrUser;
        }
        const table =  (
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
        );   
        const getBadgeClasses = () => {            
            let classes = "badge ";
            classes += users.length === 0 ? "bg-danger": "bg-primary";
        return classes;
        }        
        let result = '';
        const textCount = (count) => {            
            if(count === 0){
                return <span className={getBadgeClasses()}>Никто с тобой не тусанет</span>
            }
            const lastNumber = count % 10;
            let stringCount = '';
            if(lastNumber === 1){
                stringCount = `${count} человек тусанет с тобой сегодня`;
            }else if(((lastNumber === 2 || lastNumber === 3 || lastNumber === 4) && count > 21) || (count === 2 || count === 3 || count === 4) ){
                stringCount = `${count} человека тусанут с тобой сегодня`;
            } else {
                stringCount = `${count} человек тусанет с тобой сегодня`;
            }            
           return <span className={getBadgeClasses()}>{stringCount}</span>
        };
        if(users.length){
         
            result = <>
                {textCount(users.length)}
                {table}
                </>
        } else{
            result = textCount(0)
        };

        return result;           
    };

export default Users;
