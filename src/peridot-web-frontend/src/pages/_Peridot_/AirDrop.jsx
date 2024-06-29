import React, { useState, useEffect } from 'react';
import { UserRoundCheck, Group } from 'lucide-react';
import ProgressBar from "@ramonak/react-progress-bar";
import formatToken from '../../utils/FormatterToken';

import { peridot_web_backend_airdrop_batch1 } from 'declarations/peridot_web_backend_airdrop_batch1';
import { peridot_web_backend_Token } from 'declarations/peridot_web_backend_Token';

export default function AirDrop() {
    const [isConnected, setIsConnected] = useState(JSON.parse(localStorage.getItem("isConnected")));
    const [claimed, setClaimed] = useState(false);
    const totalAirDrop = BigInt(500000000000000);
    const [currentAirDrop, setCurrentAirDrop] = useState(BigInt(0));
    const [persentage, setPersentage] = useState(100 - ((Number(currentAirDrop) / Number(totalAirDrop)) * 100));

    useEffect(() => {
        // setIsConnected(JSON.parse(localStorage.getItem("isConnected")));

        peridot_web_backend_Token.balance_of(process.env.CANISTER_ID_AIRDROP_BATCH1).then((result) => {
            setCurrentAirDrop(result);
        });

        const checkHasClaimed = () => {
            peridot_web_backend_airdrop_batch1.hasClaimed(localStorage.getItem("principalId")).then((result) => {
                setClaimed(result);
            });
        }
        setPersentage(100 - ((Number(currentAirDrop) / Number(totalAirDrop)) * 100));

        if (isConnected) {
            checkHasClaimed();
        }
    },);

    const ClaimRewardButton = () => {
        peridot_web_backend_airdrop_batch1.checkFieldsNotEmptyAndClaim(localStorage.getItem("principalId")).then((result) => {
            checkHasClaimed();
        });
    }

    const ClaimReward = () => {
        return (
            claimed ? <div className="border border-textDisable hover:cursor-not-allowed py-3 px-6 rounded-xl text-textDisable">You Claimed 5000 PER </div > : <button className="border border-myprimaryColor hover:bg-myprimaryColor py-3 px-6 rounded-xl" onClick={ClaimRewardButton}>Claim 5000 PER</button >
        );
    }


    return (
        <>
            <hr />
            <div className="mt-24"></div>
            <div className="py-4 mx-auto max-w-screen-xl px-8 w-full flex flex-col gap-5">
                <div className="flex gap-3 justify-between items-center max-md:flex-col">
                    <div className="max-md:text-center">
                        <p className='text-3xl font-nokioMedium'>Air Drop Batch 1</p>
                        <p className='text-textDisable'>login for claim your air drop. airdrop will finish if remaining = total or remaining less than 5000 PER.</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-myseccondaryDarkColor p-5 rounded-xl">
                        <p className='text-center text-xl font-nokioMedium'>Total AirDrop</p>
                        <hr />
                        <div className="flex py-3">
                            <div className="w-1/2 text-center">
                                <p className='text-xs text-textDisable'>Remaining</p>
                                <p className='font-nokioMedium'>{formatToken(currentAirDrop)}</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <p className='text-xs text-textDisable'>Total</p>
                                <p className='font-nokioMedium'>{formatToken(totalAirDrop)}</p>
                            </div>
                        </div>
                        <ProgressBar
                            className='w-96'
                            completed={persentage}
                            barContainerClassName='bg-mydarkColor rounded-full'
                            completedClassName={`bg-gradient-to-r from-myseccondaryColor to-myprimaryColor rounded-full w-[${persentage}%] text-end`}
                            labelClassName='text-sm p-3'
                        />
                        {claimed ? <p className='text-sm'>You Claimed 5000 PER</p> : <p></p>}
                    </div>
                </div>
                <hr />
                {JSON.parse(localStorage.getItem("isConnected")) ?
                    < div className="bg-myseccondaryDarkColor p-8 rounded-xl flex  justify-between items-center max-md:flex-col max-md:items-end gap-3">
                        <div className="flex max-md:w-full w-2/3 gap-3 items-center">
                            <UserRoundCheck className='size-14 stroke-1' />
                            <div className="">
                                <p className="text-xl font-nokioMedium">Complete Your Profile</p>
                                <p className="">fill in your details, and soon you'll be on the leaderboard for all to see :)</p>
                            </div>
                        </div>
                        <ClaimReward />
                    </div>
                    : <div className="text-center my-5">Login For Showing your Task</div>
                }
            </div >
        </>
    );
}