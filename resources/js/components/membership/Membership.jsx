import {
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
} from "@material-ui/core";
import React from "react";
import "../../../css/membership.scss";
import { data } from "../../constants";
import ls from "localstorage-slim";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/userSlice";
import { actions as actionpackage } from "../../store/subscriptionSlice";

const DATABASE_KEY = "user-m9j234u94";
const DBNAV = "nav";
const USERDB = "dao";
const subscribe = "subscriptionDb";
function Membership() {
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.user.profile);
    const subscription = useSelector((state) => state.user.subscription);
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const subscriptionPackage = useSelector(
        (state) => state.subscriptionPackage.item
    );
    const addNewSubscription = (subscribe) => {
        dispatch(actions.addSubscription(subscribe));
    };

    const addNewPackage = (item) => {
        dispatch(actionpackage.addPackage(item));
    };

    const [show, setShow] = React.useState(false)
    const [rate, setRate] = React.useState("");
    const [convert, setConvert] = React.useState([]);
    const [value, setValue] = React.useState(1);

    const [tab, setTab] = React.useState(0);
    const [process, setProcess] = React.useState(0);
    const [type, setType] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const [credit, setCredit] = React.useState(0);
    const [duration, setDuration] = React.useState(0);

    const [payoption, setPayoption] = React.useState("paypal");

    //   Personal information
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [city, setCity] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [coupon, setCoupon] = React.useState("");
    const [discount, setDiscount] = React.useState(null);

    const handleCoupon = () => {
        axios
            .post(
                "/api/get-coupon",
                {
                    coupon,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.coupon !== undefined) {
                        setDiscount(res.data.coupon);
                    } else {
                        if (res.data.message) {
                            alert(res.data.message);
                        }
                    }
                }
            });
    };

    const _handleSignupMembership = () => {
        axios
            .post(
                "/api/membership",
                {
                    address: address,
                    country: country,
                    state: region,
                    city: city,
                    zip: zip,
                    duration: duration,
                    plan_type: type,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                //   setnote(response.data.notice)

                if (res.status == 200) {
                    ls.set(
                        USERDB,
                        {
                            user: res.data.user,
                            token: res.data.token,
                            subscription: res.data.subscription,
                            profile: res.data.profile,
                            preference: res.data.preference,
                        },
                        { encrypt: true }
                    );

                    addNewUser(res.data.user);
                    addNewProfile(res.data.profile);
                    addNewPreference(res.data.preference);
                    addNewToken(res.data.token);
                    addNewSubscription(res.data.subscription);

                    toast.success(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const loadCurrencyValue = () => {
        axios
            .get("https://api.exchangerate.host/latest/?base=USD", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data.rates);
                setRate(res.data.rates);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    React.useEffect(() => {
        loadCurrencyValue();
    }, []);

    return (
        <div className="w-full mx-auto bg-white">
            <div className="bg-red-600 w-full px-12  flex gap-x-6 mb-4">
                <button
                    className={
                        tab === 0
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(0)}
                >
                    Silver
                </button>
                <button
                    className={
                        tab === 1
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(1)}
                >
                    Gold
                </button>
                <button
                    className={
                        tab === 2
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(2)}
                >
                    Platinum
                </button>
            </div>

            {/* <div
            style={{
              height: '100%',
              width: process * 33 + '%',
              background: '#830B2D',
            }}
          ></div> */}

            <div className="">
                <ul className="flex justify-around">
                    <li className="flex flex-col items-center font-bold">
                        <h2
                            className="font-bold w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full"
                            style={{
                                background:
                                    process >= 0 ? "#830B2D" : "#2d2d2d",
                            }}
                        >
                            1
                        </h2>
                        <p style={{ color: process >= 0 ? "#830B2D" : "gray" }}>
                            Choose A
                        </p>
                        <p style={{ color: process >= 0 ? "#830B2D" : "gray" }}>
                            Membership Plan
                        </p>
                    </li>
                    <li className="flex flex-col items-center font-bold">
                        <h2
                            className="w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full"
                            style={{
                                background:
                                    process >= 1 ? "#830B2D" : "#2d2d2d",
                            }}
                        >
                            2
                        </h2>
                        <p style={{ color: process >= 1 ? "#830B2D" : "gray" }}>
                            Billing Information
                        </p>
                    </li>
                    <li className="flex flex-col items-center font-bold">
                        <h2
                            className="w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full"
                            style={{
                                background:
                                    process >= 2 ? "#830B2D" : "#2d2d2d",
                            }}
                        >
                            3
                        </h2>
                        <p style={{ color: process >= 2 ? "#830B2D" : "gray" }}>
                            Payment Method
                        </p>
                    </li>
                    <li className="flex flex-col items-center font-bold">
                        <h2
                            className="w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full"
                            style={{
                                background:
                                    process >= 3 ? "#830B2D" : "#2d2d2d",
                            }}
                        >
                            4
                        </h2>
                        <p style={{ color: process >= 3 ? "#830B2D" : "gray" }}>
                            Order Summary
                        </p>
                    </li>
                </ul>
            </div>

            {process == 0 && (
                <div className=" flex w-full items-center">
                    {/* Silver package */}
                    {tab === 0 && (
                        <div className="w-full   mx-12">
                            <h1 className="mt-3 mb-2 font-bold text-3xl text-center">
                                Silver Package
                            </h1>
                            <div className="pb-4 flex flex-col justify-between items-center md:flex-row">
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-slate-200 px-4 p-2 rounded-full  ">
                                        Silver
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Weekly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-center items-center">
                                            <h1 className="text-2xl font-bold">
                                                $17.50
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>(7days)</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("silver");
                                            setAmount(17.5);
                                            setCredit(3000);
                                            setDuration(7);
                                            addNewPackage({
                                                package: "silver",
                                                type: "Weekly",
                                                amount: 17.5,
                                                credit: 3000,
                                                duration: 7,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full   font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-slate-300 px-4 p-2 rounded-full ">
                                        Silver
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $34.99
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span> 1month</span>
                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("silver");
                                            setAmount(34.99);
                                            setCredit(3000);
                                            setDuration(30);
                                            addNewPackage({
                                                package: "silver",
                                                type: "Monthly",
                                                amount: 34.99,
                                                credit: 3000,
                                                duration: 30,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full  font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-slate-300 px-4 p-2 rounded-full ">
                                        Silver
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                {"$"}
                                                {23.33 * 3}
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>3months</span>
                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("silver");
                                            setAmount(23.33 * 3);
                                            setCredit(3000);
                                            setDuration(90);
                                            addNewPackage({
                                                package: "silver",
                                                type: "Monthly",
                                                amount: 23.33 * 3,
                                                credit: 3000,
                                                duration: 90,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full  font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-slate-300 px-4 p-2 rounded-full ">
                                        Sliver
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Annual
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $139.99
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>12months</span>
                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("silver");
                                            setAmount(139.99);
                                            setCredit(3000);
                                            setDuration(365);
                                            addNewPackage({
                                                package: "silver",
                                                type: "Yearly",
                                                amount: 139.99,
                                                credit: 3000,
                                                duration: 365,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Gold Package */}
                    {tab === 1 && (
                        <div className="w-full   mx-12">
                            <h1 className="mt-3 mb-2 font-bold text-3xl text-center">
                                Gold Package
                            </h1>
                            <div className="pb-4   flex flex-col justify-between items-center md:flex-row">
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-amber-300 px-4 p-2 rounded-full">
                                        Gold
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Weekly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $20
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>7days</span>
                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("gold");
                                            setAmount(20);
                                            setCredit(3000);
                                            setDuration(7);

                                            addNewPackage({
                                                package: "gold",
                                                type: "Weekly",
                                                amount: 20,
                                                credit: 3000,
                                                duration: 7,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full  font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-amber-300 px-4 p-2 rounded-full  ">
                                        Gold
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $39.99
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>1month</span>
                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("gold");
                                            setAmount(39.99);
                                            setCredit(3000);
                                            setDuration(30);
                                            addNewPackage({
                                                package: "gold",
                                                type: "Monthly",
                                                amount: 39.99,
                                                credit: 3000,
                                                duration: 30,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-amber-300 px-4 p-2 rounded-full  ">
                                        Gold
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $79.98
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>3months</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("gold");
                                            setAmount(79.98);
                                            setCredit(3000);
                                            setDuration(90);

                                            addNewPackage({
                                                package: "gold",
                                                type: "Monthly",
                                                amount: 79.98,
                                                credit: 3000,
                                                duration: 90,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-amber-300 px-4 p-2 rounded-full ">
                                        Gold
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Annual
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $149.99
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>12months</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("gold");
                                            setAmount(149.99);
                                            setCredit(3000);
                                            setDuration(365);

                                            addNewPackage({
                                                package: "gold",
                                                type: "Yearly",
                                                amount: 149.99,
                                                credit: 3000,
                                                duration: 365,
                                            });
                                        }}
                                        className="mt-2 w-full hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Platinum package */}

                    {tab === 2 && (
                        <div className="w-full   mx-12">
                            <h1 className="mt-3 mb-2 font-bold text-3xl text-center">
                                Platinum Package
                            </h1>
                            <div className="pb-4  flex flex-col justify-between items-center md:flex-row">
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-purple-900 text-white px-4 p-2 rounded-full">
                                        Platinum
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Weekly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $40.0
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>7days</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("platinum");
                                            setAmount(40.0);
                                            setCredit(3000);
                                            setDuration(7);

                                            addNewPackage({
                                                package: "platinum",
                                                type: "Weekly",
                                                amount: 40.0,
                                                credit: 3000,
                                                duration: 7,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-centerbg-purple-900  px-[34px] p-[6px] rounded-full  font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-purple-900 text-white px-4 p-2 rounded-full  ">
                                        Platinum
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $79.98
                                            </h1>
                                            <span className="text-md">USD</span>
                                        </div>
                                    </div>
                                    <span>1month</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("platinum");
                                            setAmount(79.98);
                                            setCredit(3000);
                                            setDuration(30);

                                            addNewPackage({
                                                package: "platinum",
                                                type: "Monthly",
                                                amount: 79.98,
                                                credit: 3000,
                                                duration: 30,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-purple-900  px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-purple-900  px-4 p-2 rounded-full  ">
                                        Platinum
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Monthly
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $159.97
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>3months</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("platinum");
                                            setAmount(159.97);
                                            setCredit(3000);
                                            setDuration(90);

                                            addNewPackage({
                                                package: "platinum",
                                                type: "Monthly",
                                                amount: 159.97,
                                                credit: 3000,
                                                duration: 90,
                                            });
                                        }}
                                        className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-purple-900  px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5">
                                    <h1 className="bg-purple-900 text-white px-4 p-2 rounded-full ">
                                        Platinum
                                    </h1>
                                    <p className="text-2xl font-bold mt-1 mb-1">
                                        Annual
                                        <br />
                                        Subscription
                                    </p>
                                    <div className="flex my-4 items-end">
                                        <div className="flex flex-row justify-end items-center">
                                            <h1 className="text-2xl font-bold">
                                                $299.98
                                            </h1>
                                            <span className="text-sm">
                                                {"USD"}
                                            </span>
                                        </div>
                                    </div>
                                    <span>12months</span>

                                    <p>*VAT & local taxes may apply</p>
                                    <div className="w-[24px] h-[3px] bg-slate-300 rounded-full mb-3" />
                                    <ul>
                                        <li>Unlimited Messaging</li>
                                        <li>Profile Always on top</li>
                                        <li>Better Match Making</li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            setProcess(1);
                                            setType("platinum");
                                            setAmount(299.98);
                                            setCredit(3000);
                                            setDuration(365);

                                            addNewPackage({
                                                package: "platinum",
                                                type: "Yearly",
                                                amount: 299.98,
                                                credit: 3000,
                                                duration: 365,
                                            });
                                        }}
                                        className="mt-2 w-full hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-purple-900  px-[34px] p-[6px] rounded-full font-bold"
                                    >
                                        <p>Choose Plan</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {process >= 1 && process < 3 && (
                <>
                    <div className="px-4 py-4">
                        <div className="flex flex-col md:flex-row justify-between">
                            {process == 1 && (
                                <div className="flex flex-col w-full md:w-[50%]">
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Your Name"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Your Addess"
                                        multiline
                                        rows={3}
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Country"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={country}
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="State/Province/Region"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={region}
                                        onChange={(e) =>
                                            setRegion(e.target.value)
                                        }
                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="City"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Zip/Postal Code"
                                        style={{ marginTop: 12 }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                    />
                                </div>
                            )}
                            {process == 2 && (
                                <div className="md:w-[50%]">
                                    <RadioGroup
                                        name="card"
                                        value={payoption}
                                        onChange={(e) => {
                                            setPayoption(e.target.value);
                                        }}
                                    >
                                        <FormControlLabel
                                            value="card payment"
                                            control={<Radio />}
                                            label="Card Payment"
                                        />
                                        <>
                                            <TextField
                                                disabled={
                                                    payoption == "card payment"
                                                        ? false
                                                        : true
                                                }
                                                id="outlined-basic"
                                                label="Card"
                                                style={{
                                                    marginTop: 12,
                                                    width: "100%",
                                                }}
                                                variant="outlined"
                                                inputProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                            />
                                            <TextField
                                                disabled={
                                                    payoption == "card payment"
                                                        ? false
                                                        : true
                                                }
                                                id="outlined-basic"
                                                label="Card Name"
                                                style={{
                                                    marginTop: 12,
                                                    width: "100%",
                                                }}
                                                variant="outlined"
                                                inputProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />

                                            <TextField
                                                disabled={
                                                    payoption == "card payment"
                                                        ? false
                                                        : true
                                                }
                                                id="outlined-basic"
                                                label="State/Province/Region"
                                                style={{
                                                    marginTop: 12,
                                                    width: "100%",
                                                }}
                                                variant="outlined"
                                                inputProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                value={region}
                                                onChange={(e) =>
                                                    setRegion(e.target.value)
                                                }
                                            />

                                            <TextField
                                                disabled={
                                                    payoption == "card payment"
                                                        ? false
                                                        : true
                                                }
                                                id="outlined-basic"
                                                label="City"
                                                style={{
                                                    marginTop: 12,
                                                    width: "100%",
                                                }}
                                                variant="outlined"
                                                inputProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                value={city}
                                                onChange={(e) =>
                                                    setCity(e.target.value)
                                                }
                                            />
                                            <TextField
                                                disabled={
                                                    payoption == "card payment"
                                                        ? false
                                                        : true
                                                }
                                                id="outlined-basic"
                                                label="Zip/Postal Code"
                                                style={{ marginTop: 12 }}
                                                variant="outlined"
                                                inputProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        fontFamily: "Dosis",
                                                        fontWeight: "bold",
                                                    },
                                                }}
                                                value={zip}
                                                onChange={(e) =>
                                                    setZip(e.target.value)
                                                }
                                            />
                                        </>
                                        <FormControlLabel
                                            value="paypal"
                                            control={<Radio />}
                                            label="Pay with Paypal"
                                        />
                                    </RadioGroup>
                                </div>
                            )}
                            <div
                                style={{
                                    height: "100%",
                                    width: 1,
                                    marginLeft: 35,
                                    marginRight: 35,
                                    background:
                                        "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))",
                                }}
                            ></div>
                            <div style={{ flex: 1 }}>
                                <h2 className="font-bold text-2xl">
                                    You are subscribing for:
                                </h2>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 21,
                                        marginTop: 21,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img src={data.logo} width={60} />
                                    <div style={{ flex: 1 }}>
                                        <h2 className="font-bold text-2xl tracking-tighter capitalize">
                                            {subscriptionPackage.package}{" "}
                                            package
                                        </h2>
                                        <p className="font-bold tracking-tighter text-xl">
                                            {subscriptionPackage.type}{" "}
                                            subscription
                                        </p>
                                        <p className="font-bold tracking-tighter">
                                            {subscriptionPackage.duration} days
                                        </p>
                                    </div>
                                    <button onClick={() => setProcess(0)}>
                                        Change option
                                    </button>
                                </div>
                                {/* Coupon section */}

                                <div
                                    style={{
                                        marginTop: 34,
                                        display: "flex",
                                        gap: 8,
                                        height: 48,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Coupon"
                                        style={{ width: "90%" }}
                                        variant="outlined"
                                        inputProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: "Dosis",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        value={coupon}
                                        onChange={(e) =>
                                            setCoupon(e.target.value)
                                        }
                                    />
                                    <Button
                                        disabled={coupon !== "" ? false : true}
                                        variant="contained"
                                        color="primary"
                                        style={{ height: "100%" }}
                                        onClick={handleCoupon}
                                    >
                                        Apply
                                    </Button>
                                </div>

                                {/* Summary */}
                                <div
                                    style={{
                                        marginTop: 24,
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <p className="font-bold tracking-tighter capitalize">
                                        {subscriptionPackage.package}{" "}
                                        {subscriptionPackage.type} package
                                    </p>
                                    <p className="font-bold text-2xl">
                                        {"$"}
                                        {amount}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        marginTop: 8,
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <p>Discount</p>
                                    <p>NA</p>
                                </div>
                                <div
                                    style={{
                                        marginTop: 34,
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "space-between",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <p>Total</p>
                                    <p className="font-bold text-2xl">
                                        {"$"}
                                        {amount}
                                    </p>
                                </div>

                                {process == 1 && (
                                    <Button
                                        onClick={() => {
                                            if (
                                                name.length == 0 &&
                                                email.length == 0
                                            ) {
                                                toast.error(
                                                    "Please enter your details "
                                                );
                                            } else {
                                                setProcess(2);
                                            }
                                        }}
                                        variant="contained"
                                        color="primary"
                                        style={{
                                            flex: 1,
                                            width: "100%",
                                            marginTop: 65,
                                            height: 48,
                                        }}
                                    >
                                        Continue
                                    </Button>
                                )}

                                {/* {process == 2 && payoption !== "paypal" && (
                                    // <Button
                                    //     onClick={() => {
                                    //         // setProcess(3)
                                    //         // _handleSignupMembership();
                                    //         // card payment
                                    //     }}
                                    //     variant="contained"
                                    //     color="primary"
                                    //     style={{
                                    //         flex: 1,
                                    //         width: "100%",
                                    //         marginTop: 65,
                                    //         height: 48,
                                    //     }}
                                    // >
                                    //     Pay
                                    // </Button>
                                )} */}
                                {process == 2 && payoption === "paypal" && (
                                    <div
                                        style={{ height: 120, paddingTop: 21 }}
                                    >
                                        <PayPalScriptProvider
                                            options={{
                                                "client-id":
                                                    "ATtzjhuIaE8LR7VOs2LhvaK4no7WtUxQ8P18QgJuuGvwKo7Dc7p-mh6gm10Nj8LYYke8MScZcx93wIC5",
                                                currency: "USD",
                                            }}
                                        >
                                            <PayPalButtons
                                                style={{ layout: "vertical" }}
                                                createOrder={(
                                                    data,
                                                    actions
                                                ) => {
                                                    return actions.order.create(
                                                        {
                                                            purchase_units: [
                                                                {
                                                                    description:
                                                                        type,
                                                                    amount: {
                                                                        value: amount.toFixed(
                                                                            2
                                                                        ),
                                                                    },
                                                                },
                                                            ],
                                                        }
                                                    );
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order
                                                        .capture()
                                                        .then((details) => {
                                                            const name =
                                                                details.payer
                                                                    .name
                                                                    .given_name;
                                                            _handleSignupMembership();

                                                            if(subscriptionPackage.package !== "platinum"){
                                                                setShow(true)
                                                            }

                                                            // alert(`Transaction completed by ${name} ${type}`);
                                                        });
                                                }}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* popup alert message */}
            {show && <div className="fixed flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-slate-500/75 backdrop-blur-xs">
                <div className="bg-white p-5 w-[35%] flex flex-col items-center overflow-y-auto">
                    <h1 className="text-3xl font-bold tracking-tighter text-center ">
                        Get more out of Le-Tranquille with these exclusive
                        features
                    </h1>
                    <p className="mt-2 mb-3">
                        For only <span className="font-bold text-red-500">$ 3.33</span> per month extra you can unlock these
                        exclusive Platinum benefits
                    </p>
                    <div className="flex flex-row gap-x-4 my-2">
                        <div className="flex-1 flex flex-col justify-start ">
                        <div className="w-[90px] h-[90px] mb-3 flex flex-col self-center ring-8 ring-slate-600 rounded-full">
                                <h1 className="text-6xl font-bold tracking-tighter self-center justify-center">
                                   <i className="fi fi-rr-arrow-trend-up text-2xl"></i>
                                </h1>
                            </div>
                            <h1>Rank Above Other Members</h1>
                            <p className="mb-2">Appear at the top when compatible singles are searching</p>
                            <p className="my-2"><i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i> Instantly Translate Messages</p>
                            <p><i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i> Unlock Exclusive Search Features</p>

                        </div>
                        <div className="flex-1 flex flex-col justify-start ">
                        <div className="w-[90px] h-[90px] flex flex-col mb-3  self-center   ring-8 ring-slate-600 rounded-full">
                                <h1 className="text-6xl pt-3 text-red-500 font-bold tracking-tighter text-center">
                                    x2
                                </h1>
                            </div>
                            <h1>Double your profile space</h1>
                            <p className="mb-2">Stand out from the crowd in search results with twice the real estate</p>
                            <p  className="my-2"><i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i> Get Better Matches</p>
                            <p className="mt-1"><i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i> Profile Highlighting</p>

                        </div>
                    </div>

                    <button onClick={()=>{
                        setProcess(1)
                        setTab(2)
                        addNewPackage({})
                        setShow(false)
                    }} className="bg-red-600 text-white p-2 px-12 mt-3">Yes - Upgrade to Platinum</button>
                    <button onClick={()=>{addNewPackage({})
                        setShow(false)}} className="bg-red-800 text-white p-2 px-12 mt-1">Cancel</button>
                </div>
            </div>}
        </div>
    );
}

export default Membership;
