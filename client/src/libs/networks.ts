import Stellar from "../assets/networks/stellar.svg";
import Solana from "../assets/networks/solana.svg";
import Polygon from "../assets/networks/polygon.svg";
import Jarvis from "../assets/networks/jarvis.svg";
import Avalanche from "../assets/networks/avalanche.svg";
import Cronos from "../assets/networks/cronos.svg";
import Flow from "../assets/networks/flow.svg";
import Near from "../assets/networks/near.svg";
import Oasis from "../assets/networks/oasis.svg";
import Polkadot from "../assets/networks/polkadot.svg";
import PolygonQR from "../assets/qr_codes/polygon.svg";
import SolanaQR from "../assets/qr_codes/solana.svg";
import StellarQR from "../assets/qr_codes/stellar.svg";
import { Networks } from "../typings";

export const networks: Networks[] = [
  {
    code: 7023,
    label: "Stellar",
    image: Stellar,
    value: "Stellar",
    content: {
      title: "Stellar address or Federation account ",
      address: "GCQLPBWOQ5PAJYEEQBE7GDSY7X3LCYKFEBKOCNF3OUA6F74ORK74HVSQ",
      qrCode: StellarQR,
      asMemo: true,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7041,
    label: "Solana",
    image: Solana,
    value: "Solana",
    content: {
      title: "Solana address",
      address: "BnqWRLZz3sHhH3xxwv6nXKRr6AcotfMay7uDjD58J1Q3",
      qrCode: SolanaQR,
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7080,
    label: "Polygon",
    image: Polygon,
    value: "Polygon",
    content: {
      title: "Polygon address",
      address: "0x2186030a127D970fa7B17E53F3fD8550D17394A5",
      qrCode: PolygonQR,
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7033,
    label: "Jarvis-JNGN (Polygon)",
    image: Jarvis,
    value: "Jarvis",
    content: {
      title: "Polygon address",
      address: "0x2186030a127D970fa7B17E53F3fD8550D17394A5",
      qrCode: PolygonQR,
      asMemo: false,
      exchangeRate: "1 JNGN = 1 NGNC = 1 JNGN",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7018,
    label: "Avalanche",
    image: Avalanche,
    value: "Avalanche",
    content: {
      title: "Avalanche address",
      address: "0x2186030a127D970fa7B17E53F3fD8550D17394A5",
      qrCode: PolygonQR,
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7059,
    label: "NEAR",
    image: Near,
    value: "Near",
    content: {
      title: "NEAR address",
      address: "N/A",
      qrCode: "",
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7064,
    label: "Polkadot",
    image: Polkadot,
    value: "Polkadot",
    content: {
      title: "Polkadot address",
      address: "N/A",
      qrCode: "",
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7003,
    label: "Cronos",
    image: Cronos,
    value: "Cronos",
    content: {
      title: "Cronos address",
      address: "N/A",
      qrCode: "",
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7095,
    label: "Oasis",
    image: Oasis,
    value: "Oasis",
    content: {
      title: "Oasis address",
      address: "N/A",
      qrCode: "",
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
  {
    code: 7039,
    label: "Flow",
    image: Flow,
    value: "Flow",
    content: {
      title: "Flow address",
      address: "N/A",
      qrCode: "",
      asMemo: false,
      exchangeRate: "1 NGN = 1 NGNC",
      buyFees: "5%",
      sellFees: "Free",
    },
  },
];

export const networkSelect = [
  {
    label: "Polygon",
    value: "Polygon",
  },
  {
    label: "Solana",
    value: "Solana",
  },
  {
    label: "Stellar",
    value: "Stellar",
  },
  {
    label: "Base",
    value: "Base",
  },
  {
    label: "Avalanche",
    value: "Avalanche",
  },
];
