/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  Card,
  createStyles,
  Grid,
  Group,
  Select,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { url3 } from "../../../api/";
import {
  selectEntityLinkTag,
  selectHoldsNgnc,
  selectId,
  selectKycRequired,
} from "../../../features/launchSlice";
import { selectLinkUsdcRate } from "../../../features/linkRateSlice";
import {
  cleanup,
  setBankData,
  selectAmount,
} from "../../../features/rampingSlice";
import { bankList } from "../../../libs/bankList";
import { SlideInOutAnimation } from "../../../libs/PageAnimation";
import { useSellRampMutation } from "../../../services/transactionApi";
import axios from "axios";
import toast from "react-hot-toast";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ":hover": { backgroundColor: theme.colors.secondary[5] },
    ":disabled": { backgroundColor: theme.colors.secondary[3], color: "white" },
    transition: "all 0.3s ease-in-out",
  },
}));

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  image: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} size="sm" variant="filled" radius="xl" />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

export const RampSell_1 = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState<string | any>();
  const [fee, setFee] = useState(0);
  const [amountInNgn, setAmountInNgn] = useState(0);
  const entityLinkTag = useSelector(selectEntityLinkTag);
  const business_id = useSelector(selectId);
  const [isLoading, setIsLoading] = useState(false);
  const [accNameCheck, setAccNameCheck] = useState("");

  const holds_ngnc = useSelector(selectHoldsNgnc);
  const kycRequired = useSelector(selectKycRequired);

  const usdcRate = useSelector(selectLinkUsdcRate);
  const amount = useSelector(selectAmount);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filterbankCode = bankList.filter((bank: any) => {
    if (bankCode === bank.value) {
      return bank;
    }
  });

  const checkIDNumber = () => {
    if (accountNumber.length >= 1 && accountNumber.length !== 10) {
      setAccNameCheck("🚫 provide 10 digits of account number");
      setAccountName("");
    } else {
      setAccNameCheck("");
    }
    if (accountNumber.length >= 10) {
      setAccountNumber(accountNumber.slice(0, 10));
      setAccNameCheck("Fetching account name...");
      handleCheckAccountNumber();
    }
  };

  const handleCheckAccountNumber = async () => {
    const loading = toast.loading("Fetching account name...");

    try {
      console.log("usdcRate", usdcRate.USD);
      const { data } = await axios.get(
        `${url3}/account/verify-account-number?num=${accountNumber}&bank=${filterbankCode[0]?.value}`
      );
      if (data.status === "success") {
        setAccountName(data.name);
        setAccNameCheck("");
        toast.success("Account name found", { id: loading });
      } else {
        toast.error("Account name invalid", { id: loading });
      }
    } catch (error) {
      // console.log(error);
      toast.error("Failed to get account name", { id: loading });
    }
  };

  useEffect(() => {
    checkIDNumber();
  }, [accountNumber]);

  useEffect(() => {
    calculateFee();
    return () => {};
  }, [accountNumber]);

  const [sellRamp] = useSellRampMutation();

  const calculateFee = () => {
    let calcFee = 0;
    // const amountInNgn = Number(amount) * usdcRate.USD;
    const amountInNgn = Number(amount);
    if (Number(amountInNgn) >= 1000 && Number(amountInNgn) <= 10000000) {
      calcFee = 760;
    }
    if (calcFee <= 650) {
      setFee(calcFee + 110);
      setAmountInNgn(amountInNgn - calcFee + 110);
    } else {
      setFee(760);
      setAmountInNgn(amountInNgn - 760);
    }
  };

  const handleNext = async () => {
    if (holds_ngnc === true) {
      dispatch(
        setBankData({
          accountName,
          accountNumber,
          fee,
          bankName: filterbankCode[0]?.label,
        })
      );
      return navigate("/ramp_sell_2");
    }

    if (kycRequired === true) {
      return navigate("/sell_kyc");
    }

    setIsLoading(true);
    try {
      await sellRamp({
        business_id,
        amount: amountInNgn,
        fee,
        account_name: accountName,
        account_number: accountNumber,
        bank_name: filterbankCode[0]?.label,
        link_tag: entityLinkTag,
        type: "sell_ramp",
      }).unwrap();
      navigate("/ramp_sell_success");
    } catch (error: any) {
      navigate("/failed");
    } finally {
      dispatch(cleanup());
      setIsLoading(false);
    }
  };

  return (
    <>
      <SlideInOutAnimation>
        <section>
          <Text
            size="xl"
            weight="semi-bold"
            align="center"
            mt={-40}
            color="#000"
          >
            Receiver’s Account
          </Text>
          <Card p="sm" radius={8} mt={5} shadow="xs">
            <Grid justify="space-between" align="">
              <Grid.Col>
                <Text size="xs" align="center" color="#696F79">
                  Amount to send
                </Text>
                <Text
                  weight={600}
                  align="center"
                  style={{ fontSize: "1.5rem" }}
                >
                  NGN {amount}
                </Text>
                <Text size="xs" align="center" color="#696F79">
                  (Fixed merchant fee of 760 NGN included)
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
          <Space h={15} />
          <Select
            label="Bank name"
            onChange={(value) => {
              setBankCode(value);
            }}
            placeholder="Select bank"
            itemComponent={SelectItem}
            data={bankList}
            searchable
            size="md"
            transition="pop-top-left"
            transitionTimingFunction="ease"
            transitionDuration={80}
            maxDropdownHeight={200}
            nothingFound="Empty list"
            filter={(label: string, item: any) =>
              item.label?.toLowerCase().includes(label.toLowerCase().trim())
            }
          />
          <Space h={15} />
          <TextInput
            label="Account number"
            type="number"
            size="md"
            placeholder={`Enter account number`}
            value={accountNumber}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAccountNumber(event.target.value);
            }}
          />
          <p
            className="text-gray-600"
            style={{
              color: "red",
              marginTop: "0px",
              fontWeight: "lighter",
              fontSize: "14px",
            }}
          >
            {accNameCheck}
          </p>
          {/* <Space h={10} /> */}
          <TextInput
            label="Account name"
            type="text"
            size="md"
            placeholder={`Enter Account name `}
            value={accountName}
            readOnly
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAccountName(event.target.value);
            }}
          />

          <Space h={10} />
          <Button
            size="lg"
            fullWidth
            mt={20}
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={handleNext}
            loading={isLoading && true}
            disabled={
              accountName === "" || accountNumber === "" || bankCode === ""
                ? true
                : false
            }
          >
            Continue
          </Button>
        </section>
      </SlideInOutAnimation>
    </>
  );
};
