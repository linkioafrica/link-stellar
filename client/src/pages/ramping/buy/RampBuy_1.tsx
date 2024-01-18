import {
  Avatar,
  Button,
  Grid,
  Card,
  createStyles,
  Group,
  Select,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectKycRequired } from "../../../features/launchSlice";
import {
  initiateRamping,
  selectAmount,
  selectRampingData,
  selectRampingNetwork,
  selectWalletAddress,
} from "../../../features/rampingSlice";
import { SlideInOutAnimation } from "../../../libs/PageAnimation";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ":hover": { backgroundColor: theme.colors.secondary[5] },
    ":disabled": { backgroundColor: theme.colors.secondary[3], color: "white" },
    transition: "all 0.3s ease-in-out",
  },
}));

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  code: number;
  image: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} size="sm" />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

export const RampBuy_1 = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amount = useSelector(selectAmount);
  const rampingNetwork = useSelector(selectRampingNetwork);
  const walletAddress = useSelector(selectWalletAddress);
  const rampingData = useSelector(selectRampingData);
  const kycRequired = useSelector(selectKycRequired);

  const handleNextSlide = async () => {
    navigate(kycRequired ? "/buy_kyc" : "/ramp_buy_2");
  };

  return (
    <>
      <SlideInOutAnimation>
        <section>
          <Text size="xl" weight="semi-bold" align="center" mt={-40}>
            Confirm
          </Text>
          <Space h={5} />
          <div>
            <Card
              p="sm"
              radius={8}
              mt={10}
              style={{ backgroundColor: "#F4F8FF" }}
            >
              <Grid justify="space-between" align="flex-start">
                <Grid.Col span={1}>
                  <IconInfoCircle size={35} stroke={1.5} color="#1565d8" />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Card.Section>
                    <Text size="xs" color="#1565d8">
                      Before you confirm make sure the AMOUNT and WALLET ADDRESS
                      are correct. Any errors will result in loss of funds!
                    </Text>
                  </Card.Section>
                </Grid.Col>
              </Grid>
            </Card>
          </div>
          <Space h={20} />
          <TextInput label="Amount" size="md" value={amount} disabled />
          <Space h={25} />
          <Select
            label="Network"
            value={rampingNetwork}
            defaultValue={rampingNetwork}
            placeholder={rampingNetwork}
            itemComponent={SelectItem}
            data={[]}
            disabled
            searchable
            size="md"
            transition="pop-top-left"
            transitionTimingFunction="ease"
            transitionDuration={80}
            maxDropdownHeight={200}
            nothingFound="Empty list"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            filter={(value: string, item: any) =>
              item.label?.toLowerCase().includes(value.toLowerCase().trim())
            }
          />
          <Space h={25} />
          <TextInput
            label="Wallet address"
            size="md"
            // disabled
            value={walletAddress}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                initiateRamping({
                  ...rampingData,
                  wallet_address: event.target.value,
                })
              )
            }
          />

          <Space h={30} />
          <Button
            size="lg"
            fullWidth
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={handleNextSlide}
            disabled={
              walletAddress.length < 5 || amount === "" || rampingNetwork === ""
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
