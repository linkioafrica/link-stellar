import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { BuyKYC } from "../pages/kyc/BuyKYC";
import { SellKYC } from "../pages/kyc/SellKYC";
import { RampBuy_1 } from "../pages/ramping/buy/RampBuy_1";
import { RampBuy_2 } from "../pages/ramping/buy/RampBuy_2";
import { RampBuy_3 } from "../pages/ramping/buy/RampBuy_3";
import { RampBuySuccess } from "../pages/ramping/buy/RampBuySuccess";
import { RampSell_1 } from "../pages/ramping/sell/RampSell_1";
import { RampSell_2 } from "../pages/ramping/sell/RampSell_2";
import { RampSellSuccess } from "../pages/ramping/sell/RampSellSuccess";
import { BadRequest } from "../pages/responses/BadRequest";

export const PageRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/bad-request" element={<BadRequest />} />

        {/* SEP Auth*/}
        {/* <Route path="/" element={<A />} /> */}

        {/* KYC */}
        <Route path="/buy_kyc" element={<BuyKYC />} />
        <Route path="/sell_kyc" element={<SellKYC />} />

        {/* Buy Ramp */}
        <Route path="/stellar_deposit_1" element={<RampBuy_1 />} />
        <Route path="/stellar_deposit_2" element={<RampBuy_2 />} />
        <Route path="/stellar_deposit_3" element={<RampBuy_3 />} />

        {/* Sell Ramp */}
        <Route path="/stellar_withdraw_1" element={<RampSell_1 />} />
        <Route path="/stellar_withdraw_2" element={<RampSell_2 />} />

        {/* Ramp Response */}
        <Route path="/stellar_deposit_success" element={<RampBuySuccess />} />
        <Route path="/stellar_withdraw_success" element={<RampSellSuccess />} />
      </Routes>
    </AnimatePresence>
  );
};
