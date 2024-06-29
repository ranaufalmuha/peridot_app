export default function CommunityComponent() {
    const renderLogosSlide = () => {
        const logosSlide = [];

        for (let i = 0; i < 3; i++) {
            logosSlide.push(
                <div className="flex gap-10 animate-loop-scroll scroller-slide" key={i}>
                    <CommunityDetail title="instagram" color="from-darkPink" imgurl="./img/brands/instagram.png" directTo="https://www.instagram.com/peridotfound/" />
                    <CommunityDetail title="Twitter / X" color="from-myseccondaryDarkColor" imgurl="./img/brands/x.png" directTo="https://x.com/peridotfound" />
                    <CommunityDetail title="Telegram" color="from-darkOcean" imgurl="./img/brands/telegram.png" directTo="https://t.me/+P7M1yGCobeA5ZGNl" />
                    <CommunityDetail title="Discord" color="from-darkPurple" imgurl="./img/brands/discord.png" directTo="https://discord.gg/wSdSsjBT5M" />
                    <CommunityDetail title="YouTube" color="from-darkRed" imgurl="./img/brands/youtube.png" directTo="https://www.youtube.com/@peridotfound" />
                </div>
            );
        }

        return logosSlide;
    };


    return (
        <div className="flex overflow-hidden gap-10 scroller ">
            {renderLogosSlide()}
        </div>
    );
}


function CommunityDetail({ title, color, imgurl, directTo }) {
    return (
        <a href={directTo} target="_blank" className={`w-96 relative bg-mydarkColor bg-gradient-to-tl ${color} myrounded p-8 hover:animate-pulse`}>
            <div className="flex">
                <img src={imgurl} className="w-8 h-8 object-cover" />
            </div>
            <div className="row mb-32"></div>
            <h4 className="text-2xl">{title}</h4>
        </a>
    );
}