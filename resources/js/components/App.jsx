import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Welcome from "../screens/Welcome";
import {
    createHashRouter,RouterProvider
} from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Otp from "../screens/Otp";
import Onboarding from "../screens/Onboarding";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Dashboard from "../dashboard/Dashboard";
import Preferences from "../screens/Preferences";
import Matches from "../screens/Matches";
import Explore from "../screens/Explore";
import Messages from "../screens/Messages";
import ProfilePanel from "./profile/ProfilePanel";
import Notification from "../screens/Notification";
import PreferenceSettings from "../screens/PreferenceSettings";
import Search from "../screens/Search";
import "animate.css";

import { ContextProvider } from "../context/SocketContext";
import Settings from "../screens/Settings";
import ManageSubscription from "../screens/ManageSubscription";
import Gift from "../screens/Gift";
import StoryScreen from "./home/storyscreen";
import MembershipScreen from "./home/membershipscreen";
import AboutScreen from "./home/aboutscreen";
import ContactUs from "./home/contactus";
import ContactForm from "./home/contactform";
import CommunityGuide from "./home/communityguide";
import CookiePolicy from "./home/cookiepolicy";
import DatingSafety from "./home/datingsafety";
import PrivacyPolicy from "./home/privacy";
import RefundPolicy from "./home/refund";
import TermsOfUse from "./home/terms";
import ShowAll from "../screens/ShowAll";
import Likes from "./activities/Likes";
import BlockedList from "./activities/BlockedList";
import Favorite from "./activities/Favorite";
import ProfileView from "./activities/ProfileView";
import MessageSingle from "../screens/MessageSingle";
import UpdatePreference from "../screens/UpdatePreference";
import ProfileUpdate from "./profile/ProfileUpdate";
import CouponRegistration from "../screens/CouponRegistration";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import store from "../store";
import ViewProfile from "./profile/ViewProfile";

const queryClient = new QueryClient();

const DB = "user-m9j234u94";
function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "Dosis",
        },
        palette: {
            primary: {
                main: "#B91D43",
            },
            secondary: {
                main: "#67192A",
            },
        },
    });
    const router = createHashRouter([
        {
            path: "/",
            element: <Welcome />,
        },
        {
            path: "/about",
            element: <AboutScreen />,
        },
        {
            path: "/story",
            element: <StoryScreen />,
        },
        {
            path: "/membership",
            element: <MembershipScreen />,
        },
        {
            path: "/new-login",
            element: <Login />,
        },
        { path: "/promo-signup", element: <CouponRegistration /> },
        { path: "/new-register", element: <Register /> },
        { path: "/otp", element: <Otp /> },
        { path: "/onboarding", element: <Onboarding /> },
        { path: "/preference", element: <Preferences /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/matches", element: <Matches /> },
        { path: "/likes", element: <Likes /> },
        { path: "/blocked", element: <BlockedList /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/profile-view", element: <ProfileView /> },
        { path: "/explore", element: <Explore /> },
        { path: "/messages", element: <Messages /> },
        { path: "/messages-single/:id", element: <MessageSingle /> },
        { path: "/profile", element: <ProfilePanel /> },
        { path: "/profile-update", element: <ProfileUpdate /> },
        { path: "/profile", element: <ProfilePanel /> },
        { path: "/user-profile/:id", element: <ViewProfile /> },
        { path: "/notification", element: <Notification /> },
        { path: "/notification/:id", element: <Notification /> },
        { path: "/preference-settings", element: <PreferenceSettings /> },
        { path: "/update-preference", element: <UpdatePreference /> },
        { path: "/settings", element: <Settings /> },
        { path: "/show-all", element: <ShowAll /> },
        
        { path: "/gift-to-friend", element: <Gift /> },
        { path: "/manage-subscription", element: <ManageSubscription /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/contact-form", element: <ContactForm /> },
        { path: "/dating-safety", element: <DatingSafety /> },
        { path: "/community-guideline", element: <CommunityGuide /> },
        { path: "/cookie-policy", element: <CookiePolicy /> },
        { path: "/refund-policy", element: <RefundPolicy /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/terms-of-use", element: <TermsOfUse /> },
        { path: "/search", element: <Search /> },
    ]);

    return (
        <StrictMode>
            <MuiThemeProvider theme={theme}>
                <RouterProvider router={router} />
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
        </Provider>,

        document.getElementById("root")
    );
}
