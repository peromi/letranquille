import React from "react";
import ActivityProfile from "./ActivityProfile";
import ls from "localstorage-slim";
import { Link } from "react-router-dom";
import axios from "axios";
import MainContainer from "../../containers/MainContainer";

import woman from "../../assets/images/awoman.jpg";
import lady from "../../assets/images/lady.jpg";

const USERDB = 'dao'

const Likes = () => {
    const [likes, setLikes] = React.useState([]);

    const [tab, setTab] = React.useState(0)

    const loadData = () => {
        const db = ls.get(USERDB, { decrypt: true });
        axios
            .get("/api/liked-me", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + db.token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setLikes(response.data.likes);
            });
    };

    React.useEffect(() => {
        loadData();
    }, []);
    return (
        <MainContainer>
            <div className="bg-red-600 w-full px-12  flex gap-x-6">
                <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>Liked Me</button>
                <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>My Likes</button>
                <button className={tab===2 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(2)}>Mutual Likes</button>
            </div>
            <div className="h-screen w-full">
               {tab === 0 && <div>

                {likes.length > 0 ? (
                    <div
                        style={{
                            columnCount: 4,
                            justifyContent: "center",
                            gap: 15,
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {likes.map((data) => (
                            <ActivityProfile key={data.id} profile={data} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                            No one have liked you yet
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={woman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
                        <p>
                            Click on the <strong>Heart</strong> to like someone
                        </p>

                        <p>
                            Make the first move! Like someone who fits your
                            match criteria. It's FREE!
                        </p>

                        <Link
                            to="/matches"
                            className="bg-red-600 text-white p-3 px-12 mt-4 hover:bg-red-800"
                        >
                            View Matches Now
                        </Link>
                    </div>
                )}
                </div>}

{/* Tab my likes */}
{tab === 1 && <div>

{likes.length > 0 ? (
    <div
        style={{
            columnCount: 4,
            justifyContent: "center",
            gap: 15,
            alignItems: "center",
            flexWrap: "wrap",
        }}
    >
        {likes.map((data) => (
            <ActivityProfile key={data.id} profile={data} />
        ))}
    </div>
) : (
    <div className="flex flex-col justify-center w-full items-center">
        <h1 className="font-bold text-2xl mt-2">
        You haven't liked anyone yet
        </h1>
        <p className="md:w-[30%]">
            Are you browsing through profiles on the site and
            see someone you're interested in? If you can't send
            a message yet, "Like" them instead!
        </p>
        <img
            src={woman}
            width="200"
            className="rounded-full my-6"
        />

        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
        <p>
            Click on the <strong>Heart</strong> to like someone
        </p>

        <p>
            Make the first move! Like someone who fits your
            match criteria. It's FREE!
        </p>

        <Link
            to="/matches"
            className="bg-red-600 text-white p-3 px-12 mt-4 hover:bg-red-800"
        >
            View Matches Now
        </Link>
    </div>
)}
</div>}
{/* Tab for mutual likes */}
{tab === 2 && <div>

{likes.length > 0 ? (
    <div
        style={{
            columnCount: 4,
            justifyContent: "center",
            gap: 15,
            alignItems: "center",
            flexWrap: "wrap",
        }}
    >
        {likes.map((data) => (
            <ActivityProfile key={data.id} profile={data} />
        ))}
    </div>
) : (
    <div className="flex flex-col justify-center w-full items-center">
        <h1 className="font-bold text-2xl mt-2">
        You have no mutual like yet
        </h1>
        <p className="md:w-[30%]">
        Don't worry, we have so many members, there are bound to be many people interested in you. The best way to increase your chance of receiving interest is to initiate communication.
        </p>
        <img
            src={woman}
            width="200"
            className="rounded-full my-6"
        />

        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
        <p>
        Simply click a member's <strong>heart</strong> if you like them
        </p>


    </div>
)}
</div>}
            </div>
        </MainContainer>
    );
};

export default Likes;
