import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LoginForm from '../pages/Login';
import FemaleModel from '../pages/FemaleModel';
import MaleModelPage from '../pages/MaleModels';
import Celebraties from '../pages/Celebraties';
import KidsModels from '../pages/KidsModels';
import FemaleInfluencer from '../pages/Influencer/FemaleInfluencer';
import HowItsWork from '../pages/Influencer/HowItsWork';
import AboutUS from '../pages/AboutUS';
import HireModel from '../pages/HireModel';
import ProfilePage from '../pages/ProfilePage';
import MaleInfluncer from '../pages/Influencer/MaleInfluencer';
import ContactUS from '../pages/Contact';
import LogOut from '../pages/Logout';
import HireInfuncer from '../pages/HireInfluencer';
import ChangePassword from '../pages/ChangePassword';
import Booking from '../pages/Booking';
import Services from '../pages/Services/Services';
import ServiceDetail from '../pages/Services/ServiceDetails ';
import PlanDetails from '../pages/PlanDetails';
import FAQ from '../pages/FAQ';
import PostCampaign from '../pages/PostCampaign';
// import API from "../pages/API"
// import PopularModelPage from '../pages/PopularModel';
const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("InfluncerData"));

  return (
    <Routes >

      {isLoggedIn ?
        <>
          {/* <Route path='/RF' element={<Navigate to='/RF/home' />} /> */}
          <Route path='/RF' element={<Home />} />
          <Route path='/RF/signUp' element={<SignUp />} />
          <Route path='/RF/login' element={<LoginForm />} />
          <Route path='/RF/hiremodel' element={<HireModel />} />
          <Route path='/RF/hireinfluencer' element={<HireInfuncer />} />
          <Route path='/RF/female-models' element={<FemaleModel />} />
          <Route path='/RF/male-models' element={<MaleModelPage />} />
          <Route path='/RF/celebrities' element={<Celebraties />} />
          <Route path='/RF/kids-models' element={<KidsModels />} />
          <Route path='/RF/female-influencer' element={<FemaleInfluencer />} />
          <Route path='/RF/male-influencer' element={<MaleInfluncer />} />

          <Route path="/RF/services" element={<Services />} />
          <Route path="/RF/services/:slug" element={<ServiceDetail />} />

          {/* <Route path='/RF/plan' element={<PlanDetails />} /> */}

          <Route path='/RF/howitwork' element={<HowItsWork />} />
          <Route path='/RF/about-us' element={<AboutUS />} />
          <Route path='/RF/contactUS' element={<ContactUS />} />

          <Route path='/RF/postCampaign' element={<PostCampaign />} />

          <Route path='/RF/faq' element={<FAQ />} />

          <Route path='/RF/profile' element={<ProfilePage />} />
          <Route path='/RF/changepassword' element={<ChangePassword />} />
          <Route path='/RF/logout' element={<LogOut />} />
          <Route path='/*' element={<Navigate to='/RF' />} />
        </>
        :
        <>
          {/* <Route path='/RF/' element={<Navigate to='/RF/home' />} /> */}
          <Route path='/RF' element={<Home />} />
          <Route path='/RF/signUp' element={<SignUp />} />
          <Route path='/RF/login' element={<LoginForm />} />
          <Route path='/RF/hiremodel' element={<HireModel />} />
          <Route path='/RF/hireinfluencer' element={<HireInfuncer />} />
          <Route path='/RF/female-models' element={<FemaleModel />} />
          <Route path='/RF/male-models' element={<MaleModelPage />} />
          <Route path='/RF/celebrities' element={<Celebraties />} />
          <Route path='/RF/kids-models' element={<KidsModels />} />
          <Route path='/RF/female-influencer' element={<FemaleInfluencer />} />
          <Route path='/RF/male-influencer' element={<MaleInfluncer />} />

          <Route path="/RF/services" element={<Services />} />
          <Route path="/RF/services/:slug" element={<ServiceDetail />} />

          {/* <Route path='/RF/plan' element={<PlanDetails />} /> */}

          <Route path='/RF/postCampaign' element={<PostCampaign />} />

          <Route path='/RF/howitwork' element={<HowItsWork />} />
          <Route path='/RF/about-us' element={<AboutUS />} />
          <Route path='/RF/contactUS' element={<ContactUS />} />
          <Route path='/RF/booking' element={<Booking />} />

          <Route path='/RF/faq' element={<FAQ />} />

          <Route path='/*' element={<Navigate to='/RF' />} />
        </>}
    </Routes>
  )
}

export default Router
