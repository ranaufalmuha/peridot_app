import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from "./../../components/gamestore/Footer";

function DetailGame() {
    return (
        <div className="">
            <div className="h-52 bg-myprimaryColor flex flex-col justify-end">
                <div className="py-4 mx-auto max-w-screen-xl px-8 w-full flex flex-col gap-2 text-sm">
                    <p className="text-3xl font-nokioMedium">Peridot Game</p>
                    <p><label className="text-white font-nokioMedium" >Genre </label>Single Player, Action, Adventure</p>
                </div>
            </div>
            <div className="py-4 mx-auto max-w-screen-xl px-8 w-full flex flex-col gap-5 ">
                <div className="flex justify-center">
                    <div className="h-[30rem] aspect-video rounded-3xl overflow-hidden">
                        <img src="./img/peridot/logo-bglight.png" className="h-full w-full object-cover" alt="" />
                    </div>
                </div>
                {/* Detail ========================================= */}
                <div className="bg-myseccondaryDarkColor p-10 text-lg rounded-3xl">
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Website:</p>
                            <Link target='#' to='https://www.ranaufalmuha.tech/' >https://www.ranaufalmuha.tech/</Link>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Game Chain:</p>
                            <p>Internet Computer Protocol</p>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Game Type:</p>
                            <p>Arcade Board/Card Games Crossword</p>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Platforms:</p>
                            <p>Android, iOS, Web</p>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Publisher:</p>
                            <p>Ranaufal Muha</p>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className="flex justify-between py-5">
                            <p className='font-nokioMedium'>Release Date:</p>
                            <p>2024</p>
                        </div>
                        <hr />
                    </div>
                </div>
                {/* Content  */}
                <div className="flex flex-col gap-5">
                    <p className='text-xl font-nokioMedium'>
                        Lorem ipsum dolor sit amet
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi similique debitis pariatur saepe eius impedit unde aliquid officiis accusantium consequuntur vero rem, odit sunt id a. Ratione quasi dolor nam ducimus corporis dolore, soluta temporibus sunt esse aspernatur. Quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore beatae quis alias ducimus dolor quae fugiat, natus fugit doloremque hic maxime. Laboriosam tempora et placeat, numquam possimus accusantium dignissimos doloribus voluptatem consequatur totam autem dolore corrupti cumque facilis officia!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi similique debitis pariatur saepe eius impedit unde aliquid officiis accusantium consequuntur vero rem, odit sunt id a. Ratione quasi dolor nam ducimus corporis dolore, soluta temporibus sunt esse aspernatur. Quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore beatae quis alias ducimus dolor quae fugiat, natus fugit doloremque hic maxime. Laboriosam tempora et placeat, numquam possimus accusantium dignissimos doloribus voluptatem consequatur totam autem dolore corrupti cumque facilis officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque et ducimus, architecto quaerat voluptate accusantium explicabo suscipit iusto dolorum maxime magnam eum distinctio, porro vel dignissimos repellendus hic, magni ipsum molestiae! Architecto magni nemo deleniti fuga est deserunt neque voluptatem necessitatibus eos soluta, repudiandae ea quis, inventore unde minus, provident blanditiis? Porro error perferendis reiciendis magni, hic dolorem voluptatem ipsam officiis nihil! Beatae placeat blanditiis modi, quisquam minus magni fuga non repellat labore odio quos optio, repudiandae itaque cumque quo, aliquid consequuntur? Natus aperiam modi hic amet. Minima, ipsa libero deserunt porro dolorum vitae sequi corporis molestias consectetur modi.</p>
                    <div className="flex justify-center">
                        <img src="./img/peridot/logo-bglight.png" className="h-96 w-2/3 object-cover rounded-xl" alt="" />
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi similique debitis pariatur saepe eius impedit unde aliquid officiis accusantium consequuntur vero rem, odit sunt id a. Ratione quasi dolor nam ducimus corporis dolore, soluta temporibus sunt esse aspernatur. Quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore beatae quis alias ducimus dolor quae fugiat, natus fugit doloremque hic maxime. Laboriosam tempora et placeat, numquam possimus accusantium dignissimos doloribus voluptatem consequatur totam autem dolore corrupti cumque facilis officia!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi similique debitis pariatur saepe eius impedit unde aliquid officiis accusantium consequuntur vero rem, odit sunt id a. Ratione quasi dolor nam ducimus corporis dolore, soluta temporibus sunt esse aspernatur. Quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore beatae quis alias ducimus dolor quae fugiat, natus fugit doloremque hic maxime. Laboriosam tempora et placeat, numquam possimus accusantium dignissimos doloribus voluptatem consequatur totam autem dolore corrupti cumque facilis officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque et ducimus, architecto quaerat voluptate accusantium explicabo suscipit iusto dolorum maxime magnam eum distinctio, porro vel dignissimos repellendus hic, magni ipsum molestiae! Architecto magni nemo deleniti fuga est deserunt neque voluptatem necessitatibus eos soluta, repudiandae ea quis, inventore unde minus, provident blanditiis? Porro error perferendis reiciendis magni, hic dolorem voluptatem ipsam officiis nihil! Beatae placeat blanditiis modi, quisquam minus magni fuga non repellat labore odio quos optio, repudiandae itaque cumque quo, aliquid consequuntur? Natus aperiam modi hic amet. Minima, ipsa libero deserunt porro dolorum vitae sequi corporis molestias consectetur modi.</p>
                </div>


            </div>
            <FooterComponent />
        </div>
    );
}

export default DetailGame;
