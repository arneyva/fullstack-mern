import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const UpdateUser = () => {
    const [name,setName] = useState('') //seperti ketika pertama kali di render paka akan jadi string kosong,mirip place holder lah gampange
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('')
    const navigate = useNavigate()
    const UpdateUser = async(e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`,{
                name,email,gender
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        userById()
    },[])
    const {id} = useParams();
    const userById = async() =>{
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    }
    return (
        <div className="coloumns">
            <div className="coloumn is-half mt-5">
                <form onSubmit={UpdateUser}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type='submit' className="button is-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateUser