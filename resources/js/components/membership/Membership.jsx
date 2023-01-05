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
import { actions as actioncountry } from "../../store/countrySlice";
import trend from "../../assets/images/trend.svg";
import { Link, useNavigate } from "react-router-dom";
import countrycurrency from "../../assets/json/country-currancy.json";
import timezone from "../../assets/json/timezone.json";

const DATABASE_KEY = "user-m9j234u94";
const DBNAV = "nav";
const USERDB = "dao";
const subscribe = "subscriptionDb";
function Membership() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.user.profile);
    const subscription = useSelector((state) => state.user.subscription);
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const currency = useSelector((state) => state.country.currency);

    const subscriptionPackage = useSelector(
        (state) => state.subscriptionPackage.item
    );
    const addNewSubscription = (subscribe) => {
        dispatch(actions.addSubscription(subscribe));
    };

    const addNewPackage = (item) => {
        dispatch(actionpackage.addPackage(item));
    };

    
    const addCurrency = (item) => {
        dispatch(actioncountry.addCurrency(item));
    };

    const [show, setShow] = React.useState(false);
   
    const [showpayment, setShowpayment] = React.useState(false);
    const [rate, setRate] = React.useState("");
    const [convert, setConvert] = React.useState([]);
    const [value, setValue] = React.useState(1);

    const [tab, setTab] = React.useState(2);
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
                console.log(res.data);
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
           
            {!showpayment && (
                <div className="bg-[#8A071A] w-full px-12  flex gap-x-20 mb-4">
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
            )}
            {!showpayment && (
                <div className="w-[80%] mx-auto ">
                    <div className="flex flex-col  py-12 ">
                        {/* Subscription categories */}
                        {tab === 0 && (
                            <div>
                                <h1 className="text-3xl font-black tracking-tighter self-center">
                                    Silver Subscription
                                </h1>
                                <div className="flex flex-col md:flex-row justify-between px-12">
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="week"
                                                className="w-[35px] h-[35px]"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Silver");
                                                    setAmount(17.5);
                                                    setCredit(3000);
                                                    setDuration(7);
                                                    addNewPackage({
                                                        package: "Silver",
                                                        type: "Weekly",
                                                        amount: 17.5,
                                                        credit: 3000,
                                                        duration: 7,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="week">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Week
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            17.5 *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="month"
                                                className="w-[35px] h-[35px]"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Silver");
                                                    setAmount(34.99);
                                                    setCredit(3000);
                                                    setDuration(30);
                                                    addNewPackage({
                                                        package: "Silver",
                                                        type: "Weekly",
                                                        amount: 34.99,
                                                        credit: 3000,
                                                        duration: 30,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="month">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Month
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            34.99 *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="month">
                                            <div className="bg-black text-white p-2 w-full text-sm tracking-tighter rounded-md cursor-pointer text-center">
                                                Exclusive Membership
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="onemonth"
                                                className="w-[35px] h-[35px]"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Silver");
                                                    setAmount(66.99);
                                                    setCredit(3000);
                                                    setDuration(90);
                                                    addNewPackage({
                                                        package: "Silver",
                                                        type: "Weekly",
                                                        amount: 66.99,
                                                        credit: 3000,
                                                        duration: 90,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="onemonth">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        3 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            22.33 *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="onemonth">
                                            <p>
                                                Billed in one payment of{" "}
                                                {(
                                                    66.99 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                            </p>

                                            <div className="bg-blue-400 text-white p-2 w-full rounded-md cursor-pointer text-center">
                                                Save 33%
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="year"
                                                className="w-[35px] h-[35px]"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Silver");
                                                    setAmount(139.99);
                                                    setCredit(3000);
                                                    setDuration(365);
                                                    addNewPackage({
                                                        package: "Silver",
                                                        type: "Weekly",
                                                        amount: 139.99,
                                                        credit: 3000,
                                                        duration: 365,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="year">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        12 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            (139.99 / 12) *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="year">
                                            <p>
                                                Billed in one payment of{" "}
                                                {(
                                                    139.99 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                            </p>
                                            <div className="bg-black text-white p-2 w-full px-12 mt-2 rounded-md cursor-pointer text-center">
                                                Save 67%
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                        {tab === 1 && (
                            <div>
                                <h1 className="text-3xl font-black tracking-tighter self-center">
                                    Gold Subscription
                                </h1>
                                <div className="flex flex-col md:flex-row justify-between px-12">
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="week"
                                                className="w-[35px] h-[35px] text-amber-400"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Gold");
                                                    setAmount(20);
                                                    setCredit(3000);
                                                    setDuration(7);
                                                    addNewPackage({
                                                        package: "Gold",
                                                        type: "Weekly",
                                                        amount: 20,
                                                        credit: 3000,
                                                        duration: 7,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="week">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Week
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            20 *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="month"
                                                className="w-[35px] h-[35px] text-amber-400"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Gold");
                                                    setAmount(39.99);
                                                    setCredit(3000);
                                                    setDuration(30);
                                                    addNewPackage({
                                                        package: "Gold",
                                                        type: "Monthly",
                                                        amount: 39.99,
                                                        credit: 3000,
                                                        duration: 30,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="month">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Month
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            39.99 *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="month">
                                            <div className="bg-amber-400  p-2 w-full text-sm tracking-tighter rounded-md cursor-pointer text-center">
                                                Exclusive Membership
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="onemonth"
                                                className="w-[35px] h-[35px] text-amber-400"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Gold");
                                                    setAmount(79.99);
                                                    setCredit(3000);
                                                    setDuration(90);
                                                    addNewPackage({
                                                        package: "Gold",
                                                        type: "Monthly",
                                                        amount: 79.99,
                                                        credit: 3000,
                                                        duration: 90,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="onemonth">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        3 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            (79.99 / 3) *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="onemonth">
                                            <p>
                                                Billed in one payment of{" "}
                                                {(
                                                    79.99 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                            </p>

                                            <div className="bg-amber-400  p-2 w-full rounded-md cursor-pointer text-center">
                                                Save 33%
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="year"
                                                className="w-[35px] h-[35px] text-amber-400"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Gold");
                                                    setAmount(149.99);
                                                    setCredit(3000);
                                                    setDuration(365);
                                                    addNewPackage({
                                                        package: "Gold",
                                                        type: "Monthly",
                                                        amount: 149.99,
                                                        credit: 3000,
                                                        duration: 365,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="year">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        12 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                        {(
                                                            (149.99 / 12) *
                                                            rate[
                                                               currency
                                                                    .code
                                                            ]
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency:
                                                                   currency.code,
                                                            }
                                                        )}{" "}
                                                        {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="year">
                                            <p>
                                                Billed in one payment of{" "}
                                                {(
                                                    149.99 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                            </p>
                                            <div className="bg-amber-600  p-2 w-full px-12 mt-2 rounded-md cursor-pointer text-center">
                                                Save 67%
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                        {tab === 2 && (
                            <div>
                                <h1 className="text-3xl font-black tracking-tighter self-center">
                                    Platinum Subscription
                                </h1>
                                <div className="flex flex-col md:flex-row justify-between px-12">
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="week"
                                                className="w-[35px] h-[35px] text-black"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Platinum");
                                                    setAmount(40.0);
                                                    setCredit(3000);
                                                    setDuration(7);
                                                    addNewPackage({
                                                        package: "Platinum",
                                                        type: "Weekly",
                                                        amount: 40.0,
                                                        credit: 3000,
                                                        duration: 7,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="week">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Week
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                    {(
                                                    40.0 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                                    </h1>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="month"
                                                className="w-[35px] h-[35px] text-black"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Platinum");
                                                    setAmount(79.99);
                                                    setCredit(3000);
                                                    setDuration(30);
                                                    addNewPackage({
                                                        package: "Platinum",
                                                        type: "Monthly",
                                                        amount: 79.99,
                                                        credit: 3000,
                                                        duration: 30,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="month">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        1 Month
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                    {(
                                                    79.99 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="month">
                                            <div className="bg-black text-white p-2 w-full text-sm tracking-tighter rounded-md cursor-pointer text-center">
                                                Exclusive Membership
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="onemonth"
                                                className="w-[35px] h-[35px] text-black"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Platinum");
                                                    setAmount(159.97);
                                                    setCredit(3000);
                                                    setDuration(90);
                                                    addNewPackage({
                                                        package: "Platinum",
                                                        type: "Monthly",
                                                        amount: 159.99,
                                                        credit: 3000,
                                                        duration: 90,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="onemonth">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        3 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                    {(
                                                    159.97/3 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="onemonth">
                                            <p>Billed in one payment of  {(
                                                    159.97*
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}</p>

                                            <div className="bg-blue-400 text-white p-2 w-full rounded-md cursor-pointer text-center">
                                                Save 33%
                                            </div>
                                        </label>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-row gap-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="test"
                                                id="year"
                                                className="w-[35px] h-[35px] text-black"
                                                onChange={() => {
                                                    setProcess(1);
                                                    setType("Platinum");
                                                    setAmount(299.98);
                                                    setCredit(3000);
                                                    setDuration(365);
                                                    addNewPackage({
                                                        package: "Platinum",
                                                        type: "Monthly",
                                                        amount: 299.98,
                                                        credit: 3000,
                                                        duration: 365,
                                                    });
                                                }}
                                            />
                                            <label htmlFor="year">
                                                <div className="cursor-pointer">
                                                    <h1 className="-mb-2">
                                                        12 Months
                                                    </h1>
                                                    <h1 className="text-2xl font-black">
                                                    {(
                                                   299.98/12 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}
                                                    </h1>
                                                    <p>per month</p>
                                                </div>
                                            </label>
                                        </div>
                                        <label htmlFor="year">
                                            <p>Billed in one payment of  {(
                                                   299.98 *
                                                    rate[currency.code]
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency:
                                                       currency.code,
                                                })}{" "}
                                                {currency.symbol}</p>
                                            <div className="bg-black text-white p-2 w-full px-12 mt-2 rounded-md cursor-pointer text-center">
                                                Save 67%
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div>
                            <h1 className="text-2xl font-bold tracking-tighter mb-2">
                                Choose a payment method
                            </h1>
                            <div className="flex flex-row items-center mb-8">
                                <input
                                    type="radio"
                                    name="pay"
                                    id="payment"
                                    className="w-[35px] h-[35px] text-green-600 mr-2"
                                    checked
                                />
                                <div className="tracking-tighter">
                                    <p className="-mb-2">Credit / Debit Card</p>
                                    <small className="text-green-600">
                                        Recommended
                                    </small>
                                </div>

                                <div className="flex-1 text-center">
                                    <i className="fi fi-brand-mastercard"></i>
                                </div>
                                <Link to="/">Question Mark</Link>
                            </div>
                            <div className="flex flex-row items-center">
                                <input
                                    type="radio"
                                    name="pay"
                                    id="payment"
                                    className="w-[35px] h-[35px] text-green-600 mr-2"
                                />
                                <div className="tracking-tighter">
                                    <h1>Skrill</h1>
                                </div>

                                <div className="flex-1 text-center"> </div>
                                <Link to="/">Question Mark</Link>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setShowpayment("true");
                            }}
                            className="bg-green-700 p-3 px-12 shadow-md self-center mt-12 hover:bg-green-900 text-white uppercase tracking-tighter"
                        >
                            Upgrade Now
                        </button>

                        <p className="w-[65%] text-center self-center text-sm mt-12">
                            This subscription will be automatically renewed once
                            it expires. This will ensure continuous access to
                            all the benefits of a premium membership so you can
                            enjoy uninterrupted communications with all your
                            potential matches. You can opt out of auto renewal
                            at any time. Learn more
                        </p>

                        <div className="flex flex-row justify-center gap-x-6 mt-8">
                            <div className="flex flex-row items-center gap-x-2">
                                <p className="tracking-tighter">Standard</p>
                                <div className="w-[10px] h-[10px] rounded-full bg-green-600" />
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                                <p className="tracking-tighter">Silver</p>
                                <div className="w-[10px] h-[10px] rounded-full bg-zinc-200" />
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                                <p className="tracking-tighter">Gold</p>
                                <div className="w-[10px] h-[10px] rounded-full bg-amber-600" />
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                                <p className="tracking-tighter">Platinum</p>
                                <div className="w-[10px] h-[10px] rounded-full bg-slate-600" />
                            </div>
                        </div>

                        <h1 className="text-2xl font-black tracking-tighter">
                            Compare Membership Features
                        </h1>
                        {/* compare membership feature */}
                        <div className="flex flex-row gap-x-12">
                            <div className="w-full flex flex-col gap-y-2">
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">Basic Matching</p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-green-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">Like</p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-green-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Communicate with Paying Members
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-green-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Send Unlimited Communications
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Unlock Your Messages
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">Say Goodbye to Ads</p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Hide Your Profile and Photos
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-zinc-200" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Double Your Profile Space
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Unlock Exclusive Search Features
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col gap-y-2">
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">Get Better Matches</p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Instantly Translate Messages
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Rank Above Other Members
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-amber-600" />
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">Priority Messaging</p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Rank Above All Members
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Profile Highlighting
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center">
                                    <p className="flex-1">
                                        Premium Customer Service
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="w-[30px] h-[30px] rounded-full bg-slate-600" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* standard features */}

                        <h1 className="tracking-tighter text-2xl font-black mt-5">
                            Standard Features
                        </h1>

                        <div>
                            <div className="flex flex-col md:flex-row justify-between gap-x-12">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">Basic Matching</p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-green-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        We show you profiles that match your
                                        ideal partner filtered by age, interests
                                        and lifestyle.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">Like</p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-green-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Show you're interested by sending
                                        profile likes to other members
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center flex-wrap gap-2">
                                        <p className=" ">
                                            {" "}
                                            Communicate with Paying Members{" "}
                                        </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-green-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Start messaging any paying member you've
                                        got your eye on!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 className="tracking-tighter text-2xl font-black mt-5">
                            Plus Features
                        </h1>

                        <div>
                            <div className="flex flex-col md:flex-row justify-between gap-x-12 mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Send Unlimited Communications
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Start interacting via instant messenger
                                        chat.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Unlock Your Messages
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Send and receive unlimited messages to
                                        all members
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center flex-wrap gap-2">
                                        <p className=" "> Say Goodbye to Ads</p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-zinc-200" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Premium members enjoy no third-party ads
                                        in their dating experience.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between gap-x-12 mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Hide Your Profile and Photos
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Value your privacy? Premium members can
                                        hide their profiles and photos from
                                        other members with ease.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Unlock Exclusive Search Features{" "}
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Find your perfect match by location,
                                        lifestyle, ethnicity, and dating
                                        intention. Meet that special someone
                                        today!
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center flex-wrap gap-2">
                                        <p className=" ">
                                            Instantly Translate Messages{" "}
                                        </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Don't let language barriers get in the
                                        way of love with messages translated
                                        instantly.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between gap-x-12 mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">Get Better Matches</p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Find your perfect partner easier with
                                        access to exclusive mutual and reverse
                                        matching algorithms. It's never been
                                        easier to find that special someone.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Premium Customer Service{" "}
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Experience premium customer service, 24
                                        hours a day, 7 days a week, 365 days a
                                        year.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center flex-wrap gap-2">
                                        <p className=" ">
                                            Double Your Profile Space{" "}
                                        </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Gold members get twice the profile
                                        space in search results.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between gap-x-12 mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Rank Above Other Members
                                        </p>

                                        <div className="w-[8px] h-[8px] rounded-full bg-amber-600" />
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Rank above other members
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">Priority Messaging </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Be the top message in the inbox of all
                                        the singles that you've messaged.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-row items-center flex-wrap gap-2">
                                        <p className=" ">
                                            {" "}
                                            Rank Above All Members{" "}
                                        </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Have your profile rank above all members
                                        in search results.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between gap-x-12 mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <p className=" ">
                                            Profile Highlighting
                                        </p>
                                        <div className="w-[8px] h-[8px] rounded-full bg-slate-600" />
                                    </div>
                                    <p className="w-full">
                                        Show you're a serious dater with the
                                        exclusive Platinum icon on your profile.
                                    </p>
                                </div>
                                <div className="flex-1"></div>
                                <div className="flex-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

           { showpayment && <PayPalScriptProvider
                options={{
                    "client-id":
                        "AaFbP2eUJk8RX45nLfR9TUOy-Y0GSmD4LuX4EkOaKvhGR9wxjc8LH9QESTVSMZi_UQXJS_3pVig4fVKw",
                    currency: "USD",
                }}
            >
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: type,
                                    amount: {
                                        value: amount.toFixed(2),
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            _handleSignupMembership();

                            alert(`Transaction completed by ${name} ${type}`);
                            navigate('/show-all')
                        });
                    }}
                />
            </PayPalScriptProvider>}

            {/* popup alert message */}
            {show && (
                <div className="fixed flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-slate-500/75 backdrop-blur-xs">
                    <div className="bg-white p-5 w-[35%] flex flex-col items-center overflow-y-auto">
                        <h1 className="text-3xl font-bold tracking-tighter text-center ">
                            Get more out of Le-Tranquille with these exclusive
                            features
                        </h1>
                        <p className="mt-2 mb-3">
                            For only{" "}
                            <span className="font-bold text-red-500">
                                $ {(40 / 12).toFixed(2)}
                            </span>{" "}
                            per month extra you can unlock these exclusive
                            Gold benefits
                        </p>
                        <div className="flex flex-row gap-x-4 my-2">
                            <div className="flex-1 flex flex-col justify-start ">
                                <div className="w-[90px] h-[90px] mb-3 flex flex-col self-center ring-8 ring-slate-600 rounded-full">
                                    <img
                                        className="text-6xl font-bold tracking-tighter self-center m-6 justify-center"
                                        src={trend}
                                    />
                                </div>
                                <h1>Rank Above Other Members</h1>
                                <p className="mb-2">
                                    Appear at the top when compatible singles
                                    are searching
                                </p>
                                <p className="my-2">
                                    <i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i>{" "}
                                    Instantly Translate Messages
                                </p>
                                <p>
                                    <i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i>{" "}
                                    Unlock Exclusive Search Features
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col justify-start ">
                                <div className="w-[90px] h-[90px] flex flex-col mb-3  self-center   ring-8 ring-slate-600 rounded-full">
                                    <h1 className="text-6xl pt-3 text-red-500 font-bold tracking-tighter text-center">
                                        x2
                                    </h1>
                                </div>
                                <h1>Double your profile space</h1>
                                <p className="mb-2">
                                    Stand out from the crowd in search results
                                    with twice the real estate
                                </p>
                                <p className="my-2">
                                    <i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i>{" "}
                                    Get Better Matches
                                </p>
                                <p className="mt-1">
                                    <i className="fi fi-rr-check rounded-full bg-red-500 text-white p-2 m-2"></i>{" "}
                                    Profile Highlighting
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setProcess(1);
                                setTab(2);
                                addNewPackage({});
                                setShow(false);
                            }}
                            className="bg-red-600 text-white p-2 px-12 mt-3"
                        >
                            Yes - Upgrade to Gold
                        </button>
                        <button
                            onClick={() => {
                                addNewPackage({});
                                setShow(false);
                                navigate('/show-all')
                            }}
                            className="bg-red-800 text-white p-2 px-12 mt-1"
                        >
                            No continue with Silver
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Membership;


