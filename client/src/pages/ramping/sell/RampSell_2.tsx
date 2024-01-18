/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Image,
  Space,
  Button,
  createStyles,
  Grid,
  Text,
  Tooltip,
  ActionIcon,
  CopyButton,
  Card,
} from "@mantine/core";
import Polygon from "../../../assets/qr_codes/polygon-code.png";
import { useNavigate } from "react-router-dom";
import {
  IconArrowNarrowLeft,
  IconCopy,
  IconCheck,
  IconInfoCircle,
} from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";

import { SlideInOutAnimation } from "../../../libs/PageAnimation";
import { useSellRampMutation } from "../../../services/transactionApi";
import { selectEntityLinkTag, selectId } from "../../../features/launchSlice";
import {
  selectAccountName,
  selectAccountNumber,
  selectBankName,
  cleanup,
  selectAmount,
  selectRampingNetwork,
  // selectRefCode,
  selectFee,
} from "../../../features/rampingSlice";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ":hover": { backgroundColor: theme.colors.secondary[5] },
    ":disabled": { backgroundColor: theme.colors.secondary[3], color: "white" },
    transition: "all 0.3s ease-in-out",
  },
  card: {
    border: "1px solid #1565d8",
    padding: "0.1rem 0.5rem 0.1rem 0.1rem",
    margin: "-0.5rem 0",
    borderRadius: 10,
  },
}));

export const RampSell_2 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { classes } = useStyles();

  const entityLinkTag = useSelector(selectEntityLinkTag);
  const accountName = useSelector(selectAccountName);
  const accountNumber = useSelector(selectAccountNumber);
  const amount = useSelector(selectAmount);
  const rampingNetwork = useSelector(selectRampingNetwork);
  const fee = useSelector(selectFee);
  const bankName = useSelector(selectBankName);
  const business_id = useSelector(selectId);
  // const refCode = useSelector(selectRefCode);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sellRamp] = useSellRampMutation();

  const handleSubmitTransactionData = async () => {
    setIsLoading(true);
    try {
      await sellRamp({
        business_id,
        amount,
        account_name: accountName,
        account_number: accountNumber,
        bank_name: bankName,
        link_tag: entityLinkTag,
        fee,
        type: "sell_ramp",
        // reference: refCode,
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
          <Grid align="center" mt={-50}>
            <Grid.Col span={1}>
              <IconArrowNarrowLeft
                size={30}
                color="#1565d8"
                cursor="pointer"
                onClick={() => navigate("/ramp_sell_1")}
              />
            </Grid.Col>
            <Grid.Col span={10}>
              <Text size="xl" align="center" color="#00" mt={-5}>
                Send NGNC
              </Text>
            </Grid.Col>
          </Grid>
          <section>
            <div>
              <Card p="sm" radius={8} mt={5} shadow="xs">
                <Grid justify="space-between" align="">
                  <Grid.Col>
                    <Text size="xs" align="center" color="#696F79">
                      Send this amount to the wallet address below
                    </Text>
                    <Text
                      weight={600}
                      align="center"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {amount} NGNC
                    </Text>
                    <Text size="xs" align="center" color="#696F79">
                      Network: {rampingNetwork}
                    </Text>
                  </Grid.Col>
                </Grid>
              </Card>
              <Card
                radius={8}
                mt={10}
                style={{ backgroundColor: "#F4F8FF", padding: "5px" }}
              >
                <Grid justify="space-between" align="flex-start">
                  <Grid.Col span={1}>
                    <IconInfoCircle size={25} stroke={1.5} color="#1565d8" />
                  </Grid.Col>
                  <Grid.Col span={10}>
                    <Card.Section>
                      <Text size="sm" color="#1565d8">
                        ADD THE PLATFORM NAME AS THE MEMO.
                      </Text>
                    </Card.Section>
                  </Grid.Col>
                </Grid>
              </Card>
            </div>
            <Space h={20} />
            <Grid
              className={classes.card}
              align="center"
              justify="space-around"
            >
              <Grid.Col span={10}>
                <Text size="md">
                  0xbf77a6649dd0d17f2a4b57cda3401af47646bf4a
                </Text>
              </Grid.Col>
              <Grid.Col span={1}>
                <CopyButton
                  value="0xbf77a6649dd0d17f2a4b57cda3401af47646bf4a"
                  timeout={1000}
                >
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? "Copied" : "Copy"}
                      withArrow
                      position="top"
                      color="#2c74dc"
                      transitionDuration={300}
                    >
                      <ActionIcon
                        color={copied ? "teal" : "gray"}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size={25} />
                        ) : (
                          <IconCopy size={25} color="#000" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Grid.Col>
            </Grid>
            <Space h={20} />
            <div style={{ width: 130, margin: "0 auto" }}>
              <Image src={Polygon} alt="stellar address" />
              <Space h={10} />
            </div>
          </section>

          <Button
            size="lg"
            fullWidth
            mb={-20}
            mt={10}
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={handleSubmitTransactionData}
            loading={isLoading && true}
            disabled={isLoading && true}
          >
            Continue
          </Button>
        </section>
      </SlideInOutAnimation>
    </>
  );
};
