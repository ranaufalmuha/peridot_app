import React, { useState, useEffect } from 'react';
import { Infinity } from 'lucide-react';

import currentTimeFromNano from '../../utils/CurrentTimeFromNano';
import Alert from '../../components/Alert';
import formatToken from '../../utils/FormatterToken';


// backend 
import { peridot_web_backend_user } from 'declarations/peridot_web_backend_user';
import { peridot_web_backend_Token } from 'declarations/peridot_web_backend_Token';


export default function Profile() {
    // is Connect 
    const [isConnected, setIsConnected] = useState(JSON.parse(localStorage.getItem("isConnected")));

    // Initial 
    const [alertMessage, setAlertMessage] = useState(null);
    const [balance, setBalance] = useState('');
    const [alertType, setAlertType] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        profilePic: "",
        username: "",
        bio: "",
        fullname: "",
        usertype: "",
        email: "",
        birthdate: "",
        createdAt: "",
        updatedAt: "",
    });

    // State for form inputs
    const [formInputs, setFormInputs] = useState(
        {
            profilePic: "",
            username: "",
            bio: "",
            fullname: "",
            usertype: "",
            email: "",
            birthdate: "",
            createdAt: "",
            updatedAt: "",
        }
    );

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };

    // Handle edit button click
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle submit button click
    const handleSubmitClick = () => {
        peridot_web_backend_user.isUsernameExists(formInputs.username).then((result) => {
            if (result === '') {
                peridot_web_backend_user.update(
                    localStorage.getItem("principalId"),
                    formInputs,
                ).then((result) => {
                    setAlertMessage("Updated Success");
                    setAlertType('success');
                    setIsEditing(false);
                });
            } else {
                setAlertMessage("Username already exists! Empty your Username if you don't want to change");
                setAlertType('error');
            }
        });
    };

    // start 
    useEffect(() => {
        setIsConnected(JSON.parse(localStorage.getItem("isConnected")));


        peridot_web_backend_Token.balance_of(localStorage.getItem("principalId")).then((result) => {
            setBalance(formatToken(result));
        });


        peridot_web_backend_user.findUser(localStorage.getItem("principalId")).then((result) => {
            let user = result[0];
            setUserInfo({
                profilePic: user.profilePic ? user.profilePic : 'undifiend',
                username: user.username ? user.username : 'undifiend',
                bio: user.bio ? user.bio : 'undifiend',
                fullname: user.fullname ? user.fullname : 'undifiend',
                usertype: user.usertype ? user.usertype : 'undifiend',
                email: user.email ? user.email : 'undifiend',
                birthdate: user.birthdate ? user.birthdate : 'undifiend',
                createdAt: user.createdAt ? currentTimeFromNano(user.createdAt) : 'undifiend',
                updatedAt: user.updatedAt ? currentTimeFromNano(user.updatedAt) : 'undifiend',
            });
        });
    },);

    const handleAlertDismiss = () => {
        setAlertMessage(null);
        setAlertType(null);
    };

    return (
        <div className="">
            {alertMessage && <Alert type={alertType} message={alertMessage} onDismiss={handleAlertDismiss} />}

            {isConnected ? (
                <div className="flex mb-3">
                    <div className="mx-auto max-w-screen-xl px-8 w-full flex gap-5">
                        {/* Left Column */}
                        <div className="w-1/4 mt-20 p-8 flex flex-col gap-5 mb-2 overflow-hidden">
                            <div className="flex justify-center ">
                                <img src="./img/peridot/logo-bglight.png" className="w-3/4 aspect-square rounded-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 text-center">
                                <p className="text-2xl font-nokioMedium">@{userInfo.username}</p>
                                <p className="text-textDisable">{userInfo.usertype}</p>

                            </div>
                            <p className="text-center">{userInfo.bio}</p>
                        </div>

                        {/* Right Scrollable Column */}
                        <div className="w-3/4 mt-20 flex flex-col gap-5">
                            <div className="bg-myseccondaryDarkColor p-8 rounded-xl">
                                <p className='text-3xl font-nokioMedium pt-1'>{balance} PER</p>

                                <div className="flex items-center gap-1">
                                    <Infinity className='h-5 ' />
                                    <p className="mt-1 text-sm">{localStorage.getItem("principalId")}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 bg-myseccondaryDarkColor p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-6 font-nokioMedium">Details</h2>

                                <div className="space-y-4">
                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">Username</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="username"
                                                value={formInputs.username}
                                                placeholder={userInfo.username}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            />
                                        ) : (
                                            <p className="py-2">{userInfo.username}</p>
                                        )}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">Bio</label>
                                        {isEditing ? (
                                            <textarea
                                                name="bio"
                                                value={formInputs.bio}
                                                placeholder={userInfo.bio}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            />
                                        ) : (
                                            <p className="py-2">{userInfo.bio}</p>
                                        )}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">Full Name</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="fullname"
                                                value={formInputs.fullname}
                                                placeholder={userInfo.fullname}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            />
                                        ) : (
                                            <p className="py-2">{userInfo.fullname}</p>
                                        )}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">User Type</label>
                                        {isEditing ? (
                                            <select
                                                name="usertype"
                                                value={formInputs.usertype}
                                                placeholder={userInfo.usertype}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            >
                                                <option >{userInfo.usertype}</option>
                                                <option value="Investor">Investor</option>
                                                <option value="Gamers">Gamers</option>
                                            </select>
                                        ) : (
                                            <p className="py-2">{userInfo.usertype}</p>
                                        )}
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">Email</label>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={formInputs.email}
                                                placeholder={userInfo.email}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            />
                                        ) : (
                                            <p className="py-2">{userInfo.email}</p>
                                        )}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <label className="block font-nokioMedium w-1/3">Birth Date</label>
                                        {isEditing ? (
                                            <input
                                                type="date"
                                                name="birthdate"
                                                value={formInputs.birthdate}
                                                placeholder={userInfo.birthdate}
                                                onChange={handleInputChange}
                                                className="block w-2/3 border border-textDisable bg-transparent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-myprimaryColor focus:border-myprimaryColor sm:text-sm"
                                            />
                                        ) : (
                                            <p>{userInfo.birthdate}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    {isEditing ? (
                                        <button
                                            onClick={handleSubmitClick}
                                            className="w-full inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white border-textDisable hover:bg-white hover:text-mydarkColor"
                                        >
                                            Submit
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleEditClick}
                                            className="w-full inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white border-textDisable hover:bg-white hover:text-mydarkColor"
                                        >
                                            Edit
                                        </button>
                                    )}
                                </div>

                            </div>
                            <div className="bg-myseccondaryDarkColor p-8 rounded-xl">
                                <div className="flex flex-col gap-4">
                                    <div className="">
                                        <p className='text-sm'>Updated At</p>
                                        <p className="text-xs text-textDisable">{userInfo.updatedAt}</p>
                                    </div>
                                    <div className="">
                                        <p className='text-sm'>Created At</p>
                                        <p className="text-xs text-textDisable">{userInfo.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex gap-2 w-screen h-screen justify-center items-center">
                    <p>Connect Your wallet</p>
                </div>
            )
            }
        </div>
    );
}