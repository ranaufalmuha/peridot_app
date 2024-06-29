import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Alert = ({ type, message, onDismiss }) => {

    useEffect(() => {
        setTimeout(() => {
            onDismiss();
        }, 2000);
    }, []);

    let classes = ''
    if (type === 'success') {
        classes = 'bg-myprimaryColor';
    } else if (type === 'error') {
        classes = 'bg-red-500'
    } else {
        classes = 'bg-yellow-500'
    }

    return (
        <div className="absolute left-10 top-10 z-10 ">
            <div className={classes + " p-5 rounded-xl flex gap-5"} role="alert" >
                <div className="">
                    <p className="text-xl font-nokioMedium">{type}</p>
                    <p className="text-sm max-w-96">{message}</p>
                </div>
                <button
                    className="alert-close"
                    onClick={onDismiss}
                >
                    <X />
                </button>
            </div >
        </div>
    );
};

export default Alert;