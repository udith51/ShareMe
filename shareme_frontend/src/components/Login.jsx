import React from 'react'
import '../App.css'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { client } from '../client';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'


export default function Login() {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        var decodedHeader = jwt_decode(response.credential);
        localStorage.setItem("user", JSON.stringify(decodedHeader));
        const { name, sub, picture } = decodedHeader;
        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture
        }
        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', { replace: true })
            })
    }
    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                    src={shareVideo}
                    type='video/mp4'
                    loop
                    autoPlay
                    muted
                    controls={false}
                    className='h-full w-full object-cover'
                ></video>
                <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center bg-black opacity-70">
                    <div className="p-5">
                        <img src={logo} alt="logo" width={130} />
                    </div>
                    <div className="shadow-2xl">
                        <GoogleLogin
                            render={(renderProps) => (
                                <button
                                    className='bg-slate-50 opacity-1 flex flex-row items-center justify-center p-3 rounded-lg cursor-pointer outline-none'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-5' /> Sign In With Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_rigin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
