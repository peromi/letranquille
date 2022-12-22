import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import Welcome from "../screens/Welcome";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Otp from "../screens/Otp";
import Onboarding from "../screens/Onboarding";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Dashboard from "../dashboard/Dashboard";
import Preferences from "../screens/Preferences";
import Matches from "../screens/Matches";
import Activities from "../screens/Activities";
import Explore from "../screens/Explore";
import Messages from "../screens/Messages";
import { UserContextProvider } from "../context/Usercontext";
import app from "../containers/FirebaseConfig";
import ProfilePanel from "./profile/ProfilePanel";
import Notification from "../screens/Notification";
import PreferenceSettings from "../screens/PreferenceSettings";
import Search from "../screens/Search";
import 'animate.css'

import ls from 'localstorage-slim'
import { ContextProvider } from "../context/SocketContext";
import Settings from "../screens/Settings";
import ManageSubscription from "../screens/ManageSubscription";
import Gift from "../screens/Gift";
import StoryScreen from "./home/storyscreen";
import MembershipScreen from "./home/membershipscreen";
import AboutScreen from "./home/aboutscreen";
import ContactUs from "./home/contactus"
import ContactForm from "./home/contactform"
import CommunityGuide from "./home/communityguide"
import CookiePolicy from "./home/cookiepolicy"
import DatingSafety from "./home/datingsafety"
import PrivacyPolicy from "./home/privacy"
import RefundPolicy from "./home/refund"
import TermsOfUse from "./home/terms"
import ShowAll from "../screens/ShowAll";
import Likes from "./activities/Likes";
import BlockedList from "./activities/BlockedList";
import Favorite from "./activities/Favorite";
import ProfileView from "./activities/ProfileView";
import MessageSingle from "../screens/MessageSingle";
import UpdatePreference from "../screens/UpdatePreference";
import ProfileUpdate from "./profile/ProfileUpdate";
import ForgetPassword from "./home/ForgetPassword";
import CouponRegistration from "../screens/CouponRegistration";
import { 
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

  import { Provider } from "react-redux";
import store from "../store";
import ViewProfile from "./profile/ViewProfile";


const queryClient = new QueryClient()

const DB = "user-m9j234u94"
function App() {

    const theme = createTheme({
        typography:{
            fontFamily: "Dosis"
        },
        palette:{

            primary:{
                main: "#B91D43"
            },
            secondary:{
                main: "#67192A"
            }
        }
    })

    return (

        <StrictMode>

        <MuiThemeProvider theme={theme}>

            <HashRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/story" element={<StoryScreen />} />
                    <Route path="/membership" element={<MembershipScreen />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/promo-signup" element={<CouponRegistration />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/otp" element={<Otp />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/preference" element={<Preferences />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/likes" element={<Likes />} />
                    <Route path="/blocked" element={<BlockedList />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/profile-view" element={<ProfileView />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/messages-single/:id" element={<MessageSingle />} />
                    <Route path="/profile" element={<ProfilePanel />} />
                    <Route path="/profile-update" element={<ProfileUpdate />} />
                    <Route path="/profile" element={<ProfilePanel />} />
                    <Route path="/user-profile/:id" element={<ViewProfile />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/notification/:id" element={<Notification />} />
                    <Route path="/preference-settings" element={<PreferenceSettings />} />
                    <Route path="/update-preference" element={<UpdatePreference />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/show-all" element={<ShowAll />} />
                    {/* <Route path="/credit-coins" element={<CreditCoins />} /> */}
                    <Route path="/gift-to-friend" element={<Gift />} />
                    <Route path="/manage-subscription" element={<ManageSubscription />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/contact-form" element={<ContactForm />} />
                    <Route path="/dating-safety" element={<DatingSafety />} />
                    <Route path="/community-guideline" element={<CommunityGuide />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/search" element={<Search />} />

                </Routes>

            </HashRouter>

        </MuiThemeProvider>

        </StrictMode>

    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
        <ContextProvider>
            <QueryClientProvider client={queryClient}>
                <App />
          </QueryClientProvider>
        </ContextProvider>
        </Provider>
   

    , document.getElementById("root"));
}
