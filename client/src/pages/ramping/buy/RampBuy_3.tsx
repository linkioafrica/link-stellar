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
  useState,
  forwardRef,
  ComponentPropsWithoutRef,
  useEffect,
} from "react";
import { url3 } from "../../../api/";
import { useLocation, useNavigate } from "react-router-dom";
import { SlideInOutAnimation } from "../../../libs/PageAnimation";
import { bankList } from "../../../libs/bankList";
import { IconArrowNarrowLeft, IconInfoCircle } from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectEntityLinkTag, selectId } from "../../../features/launchSlice";
import {
  selectAmount,
  selectRampingNetwork,
  selectWalletAddress,
  selectAccountNumber,
  selectRefCode,
  selectAccountName,
  selectBankName,
  cleanup,
} from "../../../features/rampingSlice";
import { useBuyRampMutation } from "../../../services/transactionApi";
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

export const RampBuy_3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accNameCheck, setAccNameCheck] = useState("");
  const [bankCode, setbankCode] = useState<string | any>();
  const { classes } = useStyles();
  const navigate = useNavigate();

  const filterbankCode = bankList.filter((bank: any) => {
    if (bankCode === bank.value) {
      return bank;
    }
  });

  const checkIDNumber = () => {
    if (accountNumber.length >= 1 && accountNumber.length !== 10) {
      setAccNameCheck("🚫 provide 10 digits of account number");
    } else {
      setAccNameCheck("");
    }
    if (accountNumber.length >= 10) {
      setAccountNumber(accountNumber.slice(0, 10));
      setAccNameCheck("Checking account name...");
      handleCheckAccountNumber();
    }
  };

  const handleCheckAccountNumber = async () => {
    const loading = toast.loading("Fetching account name...");

    try {
      const { data } = await axios.get(
        `${url3}/account/verify-account-number?num=${accountNumber}&bank=${filterbankCode[0]?.value}`
      );
      if (data.status === "success") {
        setAccNameCheck("");
        toast.success("Account number valid", { id: loading });
      } else {
        toast.error("Account number invalid", { id: loading });
      }
    } catch (error) {
      // console.log(error);
      toast.error("Failed to get account name", { id: loading });
    }
  };

  useEffect(() => {
    checkIDNumber();
  }, [accountNumber]);

  const link_tag = useSelector(selectEntityLinkTag);
  const amount = useSelector(selectAmount);
  const network = useSelector(selectRampingNetwork);
  const wallet_address = useSelector(selectWalletAddress);
  const business_id = useSelector(selectId);
  const account_number = useSelector(selectAccountNumber);
  const refCode = useSelector(selectRefCode);
  const accountName = useSelector(selectAccountName);
  const bankName = useSelector(selectBankName);

  const [buyRamp] = useBuyRampMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { fee } = location.state;

  const handleSubmitTransactionData = async () => {
    setIsLoading(true);
    if (!accountNumber || !bankCode) return;
    try {
      await buyRamp({
        amount: Number(amount) - fee,
        network,
        wallet_address,
        fee,
        type: "buy_ramp",
        business_id,
        link_tag,
        link_account_name: accountName,
        link_account_number: account_number,
        link_bank_name: bankName,
        bank_name: filterbankCode[0]?.label,
        account_number: accountNumber,
        reference: refCode,
      }).unwrap();
      navigate("/ramp_buy_success");
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
        <section style={{ marginTop: -40 }}>
          <IconArrowNarrowLeft
            size={30}
            color="#1565d8"
            cursor="pointer"
            onClick={() => navigate("/ramp_buy_2")}
          />
          <Text
            size="xl"
            weight="semi-bold"
            align="center"
            color="#000"
            mt={-30}
          >
            Proof of Payment
          </Text>
          <section>
            <div>
              <Card
                p="sm"
                radius={8}
                mt={20}
                style={{ backgroundColor: "#F4F8FF" }}
              >
                <Grid justify="space-between" align="flex-start">
                  <Grid.Col span={1}>
                    <IconInfoCircle size={35} stroke={1.5} color="#1565d8" />
                  </Grid.Col>
                  <Grid.Col span={10}>
                    <Card.Section>
                      <Text size="xs" color="#1565d8">
                        Ensure the Account details provided below are in your
                        VERIFIED NAME and the SAME MAKING THE TRANSFER.
                      </Text>
                    </Card.Section>
                  </Grid.Col>
                </Grid>
              </Card>
            </div>
            <Space h={25} />
            <Select
              label="Bank"
              onChange={(value) => {
                setbankCode(value);
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
            <Space h={25} />
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
          </section>
          <Space h={100} />

          <Button
            size="lg"
            fullWidth
            mb={-10}
            mt={20}
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={handleSubmitTransactionData}
            loading={isLoading && true}
            disabled={accountNumber === "" || bankCode === "" ? true : false}
          >
            Continue
          </Button>
        </section>
      </SlideInOutAnimation>
    </>
  );
};
