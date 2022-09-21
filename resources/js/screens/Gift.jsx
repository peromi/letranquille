import React from "react";
import MainContainer from "../containers/MainContainer";
import "../../css/gift.scss";
import axios from "axios";
import ls from "localstorage-slim";
import { toast } from "react-toastify";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DATABASE_KEY = "user-m9j234u94";
function Gift() {
    const [text, setText] = React.useState("");
    const [value, setValue] = React.useState([]);
    const [person, setPerson] = React.useState({});
    const [show, setShow] = React.useState(false);
    const [product, setProduct] = React.useState({});

    const handleSearch = (e) => {
        if (e.target.value.trim() == "") {
            setValue([]);
            return;
        }
        setText(e.target.value.trim());
        const token = ls.get(DATABASE_KEY, { decrypt: true });

        axios
            .post(
                "/api/quick-search",
                {
                    name: e.target.value,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                console.log(response.data["users"]);
                setValue(response.data["users"]);
            })
            .catch((e) => {
                console.log(e.toString());
            });
    };

    const _handleGiftMembership = () => {
        let token = ls.get(DATABASE_KEY, { decrypt: true });
        axios
            .post(
                "/api/gift-membership",
                {
                    friendid:person.user_id,
                    duration: product.duration,
                    plan_type: product.title,

                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                //   setnote(response.data.notice)
                toast.success(response.data.message);


            })
            .catch((error) => {
                console.log(error);
            });
    };

    React.useEffect(() => {
        if (value.length > 0) {
            handleSearch();
        }
        return () => {
            setValue([]);
            setText("");
        };
    }, []);
    return (
        <MainContainer>
            <div className="">
                <div className="gift-container">
                    <h1 className="font-bold text-2xl">Gift To Friend</h1>
                    <div className="search">
                        <i className="fi fi-rr-search"></i>
                        <input
                            type="text"
                            value={text}
                            onChange={handleSearch}
                            placeholder="Search gift recipients"
                        />

                        <div className="search-results">
                            {value.length > 0 &&
                                value.map((m, index) => (
                                    <div
                                        className="person"
                                        key={index}
                                        onClick={() => {
                                            setPerson(m);
                                            setText("");
                                            setValue([]);
                                        }}
                                        style={{
                                            display: "flex",
                                            gap: 12,
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={`/storage/avatar/${m.first_cover}`}
                                            alt={m.name}
                                            style={{
                                                width: 55,
                                                borderRadius: 35,
                                            }}
                                        />
                                        <h4>{m.name}</h4>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {person.first_cover && (
                        <div
                            style={{
                                marginTop: 34,
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: 23,
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={`/storage/avatar/${person.first_cover}`}
                                style={{ borderRadius: 35, width: 150 }}
                            />
                            <h1>{person.name}</h1>
                        </div>
                    )}

                   {person.first_cover && <div className="item-sub">
                        <div>
                            <h2>Days</h2>
                            <hr />
                            <h1>
                                Soft
                                <br />
                                membership
                            </h1>
                            <h1>
                                $45/<span>5days</span>
                            </h1>
                            <ul>
                                <li>Unlimited Messaging</li>
                                <li>Unlimited Calling</li>
                                <li>Profile Always on top</li>
                                <li>Better Match Making</li>
                            </ul>
                            <button
                                onClick={() => {
                                    setProduct({
                                        title: "soft membership",
                                        price: 45,
                                        duration: 5,
                                    });
                                    setShow(true);
                                }}
                            >
                                Buy Plan
                            </button>
                        </div>
                        <div>
                            <h2>Weekly</h2>
                            <hr />
                            <h1>
                                Longing
                                <br />
                                Membership
                            </h1>
                            <h1>
                                $95/<span>7days</span>
                            </h1>
                            <ul>
                                <li>Unlimited Messaging</li>
                                <li>Unlimited Calling</li>
                                <li>Profile Always on top</li>
                                <li>Better Match Making</li>
                            </ul>
                            <button
                                onClick={() => {
                                    setProduct({
                                        title: "longing membership",
                                        price: 95,
                                        duration: 7,
                                    });
                                    setShow(true);
                                }}
                            >
                                Buy Plan
                            </button>
                        </div>
                        <div>
                            <h2>Weekly</h2>
                            <hr />
                            <h1>
                                Mega Gift
                                <br />
                                Membership
                            </h1>
                            <h1>
                                $145/<span>14days</span>
                            </h1>
                            <ul>
                                <li>Unlimited Messaging</li>
                                <li>Unlimited Calling</li>
                                <li>Profile Always on top</li>
                                <li>Better Match Making</li>
                            </ul>
                            <button
                                onClick={() => {
                                    setProduct({
                                        title: "mega gift membership",
                                        price: 145,
                                        duration: 14,
                                    });
                                    setShow(true);
                                }}
                            >
                                Buy Plan
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
            {show && (
                <div className="dialog">
                    <div className="dialog-content">
                        <div className="dialog-nav">
                            <h3>{product.title}</h3>
                            <button
                                onClick={() => {
                                    setShow(false);
                                    setProduct({});
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width:'100%',
                                height:'100%'
                            }}
                        >
                            <h2>Gift To Friend</h2>

                            <h3>({person.name})</h3>
                            <p>You are about to subscribe</p>
                            <h2>{product.title}</h2>
                            <p>Duration {product.duration} days</p>
                            <h1 style={{ marginTop:13, marginBottom:24 }}>${product.price}</h1>

                            <PayPalScriptProvider options={{ "client-id": "ATtzjhuIaE8LR7VOs2LhvaK4no7WtUxQ8P18QgJuuGvwKo7Dc7p-mh6gm10Nj8LYYke8MScZcx93wIC5",
                currency:'USD',

                 }}>
            <PayPalButtons style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description:product.name,
                            amount: {
                                value:product.price,
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    // _handleSignupMembership();
                    _handleGiftMembership()
                    // window.location.href = "/matches"
                    // alert(`Transaction completed by ${name} ${type}`);
                });
            }}
            />
        </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            )}
        </MainContainer>
    );
}

export default Gift;
