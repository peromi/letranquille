import {
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
} from "@material-ui/core";
import React from "react";
import "../../../css/coins.scss";
import { data } from "../../constants";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ls from 'localstorage-slim'
import axios from 'axios'
import { toast } from 'react-toastify';
const DATABASE_KEY = 'user-m9j234u94'
const USERDB = 'dao'
function Coins() {
    const [balance, setBalance] = React.useState(0);
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

    const loadData = () =>{
        const db = ls.get(USERDB, { decrypt: true });
        axios.get("/api/membership", {
            headers: {
                Accept:'application/json',
                Authorization: 'Bearer ' + db.token
            }
        }).then((response) =>{

            const member = response.data.membership;
            console.log(response.data.membership)
            setName(member['name'])
            setEmail(member['email'])
            setAddress(member['address'])
            setCountry(member['country'])
            setRegion(member['state'])
            setCity(member['city'])
            setZip(member['zip'])
            console.log(member['credit'])
            setBalance(member['credit'])
        }).catch(e=>{
            console.log(e.response.data);
        })
    }
    const _loadCredit = ()=>{
        const db = ls.get(USERDB, { decrypt: true });
        axios.post("/api/buy-coins", {
            address:address,
            country:country,
            state:region,
            city:city,
            zip:zip,
            duration:duration,
            plan_type:type,
            credit:credit
          }, {
              headers: {
                  Accept:'application/json',
                  Authorization: 'Bearer ' + db.token
              }
          }).then((response)=>{
              console.log(response.data)
            //   setnote(response.data.notice)
            toast.success(response.data.message);
          }).catch((error)=>{
              console.log(error)
          })
    }

    React.useEffect(()=>{
        loadData()
    },[])

    return (
        <div className="container">
            <div className="titlebar">
                <i className="fi fi-rr-gift" style={{ fontSize: 21 }}></i>
                <h2>Credit Coins</h2>
                <div style={{ flex: 1, textAlign: "end" }}>
                    <h4>Balance: {(balance).toLocaleString()}</h4>
                </div>
            </div>
            <div className="progressbar">
                <div className="inner-progress">
                    <div
                        style={{
                            height: "100%",
                            width: process * 33 + "%",
                            background: "#830B2D",
                        }}
                    ></div>
                </div>
                <div className="progresscontainer">
                    <ul>
                        <li>
                            <h2
                                style={{
                                    background:
                                        process >= 0 ? "#830B2D" : "#2d2d2d",
                                }}
                            >
                                1
                            </h2>
                            <p
                                style={{
                                    color: process >= 0 ? "#830B2D" : "gray",
                                }}
                            >
                                Choose Your
                            </p>
                            <p
                                style={{
                                    color: process >= 0 ? "#830B2D" : "gray",
                                }}
                            >
                                Credit Coins
                            </p>
                        </li>
                        <li>
                            <h2
                                style={{
                                    background:
                                        process >= 1 ? "#830B2D" : "#2d2d2d",
                                }}
                            >
                                2
                            </h2>
                            <p
                                style={{
                                    color: process >= 1 ? "#830B2D" : "gray",
                                }}
                            >
                                Billing Information
                            </p>
                        </li>
                        <li>
                            <h2
                                style={{
                                    background:
                                        process >= 2 ? "#830B2D" : "#2d2d2d",
                                }}
                            >
                                3
                            </h2>
                            <p
                                style={{
                                    color: process >= 2 ? "#830B2D" : "gray",
                                }}
                            >
                                Payment Method
                            </p>
                        </li>
                        <li>
                            <h2
                                style={{
                                    background:
                                        process >= 3 ? "#830B2D" : "#2d2d2d",
                                }}
                            >
                                4
                            </h2>
                            <p
                                style={{
                                    color: process >= 3 ? "#830B2D" : "gray",
                                }}
                            >
                                Order Summary
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {process == 0 && (
                <>
                    <div className="table__board" style={{ display:'flex', justifyContent: 'center',marginInline:'10%', marginBottom:65,   }}>
                        <div style={{ width:'100%', background:'linear-gradient(to bottom,#4B4B4B, #0E0E0E)', height:550,display:'flex', flexDirection:'column',justifyContent: 'flex-end',alignItems:'center', color:'white',  fontWeight:'bold'   }}>
                            <img src={data.regularcoin} />
                            <p>100 Credits</p>
                            <div style={{fontWeight:'100',margin:12,borderRadius:35, paddingLeft:24, paddingRight:24, paddingTop:8, paddingBottom:8, background:'rgba(225,225,225,0.5)' }}>
                                <h1>$ 60/-</h1>
                            </div>
                            <h2>Regular Credit Pack</h2>
                            <button onClick={() => {
                    setProcess(1)
                    setType('regular')
                    setAmount(60)
                    setCredit(100)
                    setDuration(30)
                  }} style={{ height:48, width:200, borderRadius:25, border:"1px white solid", background:'transparent', marginTop:21, marginBottom:51,fontSize:21, color:'white',cursor:'pointer', fontWeight:'bold' }}>Get Pack</button>
                        </div>
                        <div style={{ width:'100%', background:'linear-gradient(to bottom,#C42250, #0E0E0E)', height:550,display:'flex', flexDirection:'column',justifyContent: 'flex-end',alignItems:'center', color:'white', fontWeight:'bold'  }}>
                        <img src={ data.boostercoin } />
                        <p>5,000 Credits</p>
                        <div style={{fontWeight:'normal',margin:12,borderRadius:35, paddingLeft:24, paddingRight:24, paddingTop:8, paddingBottom:8, background:'rgba(225,225,225,0.5)' }}>
                                <h1>$399/-</h1>
                            </div>
                            <h2>Booster Credit Pack</h2>
                            <button onClick={() => {
                    setProcess(1)
                    setType('booster')
                    setAmount(399)
                    setCredit(5000)
                    setDuration(30)
                  }} style={{ height:48, width:200, borderRadius:25, border:"1px white solid", background:'transparent', marginTop:21, marginBottom:51,fontSize:21, color:'white',cursor:'pointer', fontWeight:'bold' }}>Get Pack</button>
                        </div>
                        <div style={{ width:'100%', background:'linear-gradient(to bottom,#E5B302, #EC9901)', height:550 ,display:'flex', flexDirection:'column',justifyContent: 'flex-end',alignItems:'center', color:'black', fontWeight:'bold'  }}>
                        <img src={ data.goldcoin } />
                        <p>1,000 Credits</p>
                            <div style={{margin:12,borderRadius:35, paddingLeft:24, paddingRight:24, paddingTop:8, paddingBottom:8, background:'rgba(225,225,225,0.5)' }}>
                                <h1>$269/-</h1>
                            </div>
                            <h2>Big Credit Pack</h2>
                            <button onClick={() => {
                    setProcess(1)
                    setType('big')
                    setAmount(269)
                    setCredit(1000)
                    setDuration(30)
                  }} style={{ height:48, width:200, borderRadius:25, border:"1px black solid", background:'transparent', marginTop:21, marginBottom:51,fontSize:21,  cursor:'pointer', fontWeight:'bold'}}>Get Pack</button>
                        </div>

                    </div>
                </>
            )}

            {process >= 1 && process < 3 && (
                <>
                    <div className="content">
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                marginInline: 34,
                                marginBottom: 34,
                            }}
                        >
                            {process == 1 && (
                                <div style={{ width: "55%" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Your Name"
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                        style={{ marginTop: 12, width: "100%" }}
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
                                <div style={{ width: "55%" }}>
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
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
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
                                <h2>You are subscribing for:</h2>
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
                                        <h2>{type}</h2>
                                        <p>{duration} subscription</p>
                                    </div>
                                    <a href="">Change option</a>
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
                                    <p>{type}</p>
                                    <p>${amount}</p>
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
                                    <p>${amount}</p>
                                </div>

                                {process == 1 && (
                                    <Button
                                        onClick={() => {
                                            setProcess(2);
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

{process == 2 && payoption !== "paypal" && <Button
                onClick={()=>{
                    // setProcess(3)
                    handlePayment();
                }}
                    variant="contained"
                    color="primary"
                    style={{flex:1, width:'100%', marginTop:65, height:48,   }}
                  >
                    Pay
                  </Button>}
                  {process == 2 && payoption === "paypal" &&  <div style={{ height:120, paddingTop:21 }}>
                  <PayPalScriptProvider options={{ "client-id": "ATtzjhuIaE8LR7VOs2LhvaK4no7WtUxQ8P18QgJuuGvwKo7Dc7p-mh6gm10Nj8LYYke8MScZcx93wIC5",
                currency:'USD',

                 }}>
            <PayPalButtons style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description:type,
                            amount: {
                                value:amount,
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name} ${type}`);
                });
            }}
            />
        </PayPalScriptProvider>
                    </div>}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Coins;
