import {
  ActionIcon,
  Button,
  Card,
  CopyButton,
  createStyles,
  Grid,
  Group,
  Anchor,
  Space,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  IconArrowNarrowLeft,
  IconCheck,
  IconCopy,
  IconInfoCircle,
  IconMessageCircle2,
  IconPhone,
} from '@tabler/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SlideInOutAnimation } from '../../../libs/PageAnimation';
import {
  selectAmount,
  selectAccountName,
  selectAccountNumber,
  selectBankName,
  selectRefCode,
} from '../../../features/rampingSlice';
import { useEffect, useState } from 'react';
// message-circle-2-filled
const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ':hover': { backgroundColor: theme.colors.secondary[5] },
    ':disabled': { backgroundColor: theme.colors.secondary[3], color: 'white' },
    transition: 'all 0.3s ease-in-out',
  },
}));

export const RampBuy_2 = () => {
  const [fee, setFee] = useState(0);
  const { classes } = useStyles();
  const navigate = useNavigate();

  const amount = useSelector(selectAmount);
  const account_name = useSelector(selectAccountName);
  const account_number = useSelector(selectAccountNumber);
  const bank_name = useSelector(selectBankName);
  const refCode = useSelector(selectRefCode);

  useEffect(() => {
    calculateFee(Number(amount));
  }, [amount]);

  const calculateFee = (amount: number) => {
    if (amount >= 5000 && amount <= 65000) {
      return setFee(0);
    } else {
      return setFee(0);
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
            onClick={() => navigate('/ramp_buy_1')}
          />
          <Text
            size="xl"
            weight="semi-bold"
            align="center"
            color="#000"
            mt={-40}
          >
            Make Your Payment
          </Text>
          <section>
            <div>
              <Card
                p="sm"
                radius={8}
                mt={10}
                style={{ backgroundColor: '#F4F8FF' }}
              >
                <Grid justify="space-between" align="flex-start">
                  <Grid.Col span={1}>
                    <IconInfoCircle size={35} stroke={1.5} color="#1565d8" />
                  </Grid.Col>
                  <Grid.Col span={10}>
                    <Card.Section>
                      <Text size="xs" color="#1565d8">
                        To ensure your transfer being processed, add the
                        REFERENCE CODE and don’t add any CRYPTO PHRASE.
                      </Text>
                    </Card.Section>
                  </Grid.Col>
                </Grid>
              </Card>
              <Card p="sm" radius={8} mt={10} shadow="xs">
                <Grid justify="space-between" align="">
                  <Grid.Col>
                    <Text size="xs" align="center" color="#696F79">
                      Amount to send
                    </Text>
                    <Text
                      weight={600}
                      align="center"
                      style={{ fontSize: '1.5rem' }}
                    >
                      NGN {amount}
                    </Text>
                    <Text size="xs" align="center" color="#696F79">
                      (Merchant fee of {fee} NGN included)
                    </Text>
                  </Grid.Col>
                </Grid>
              </Card>
            </div>

            <Card radius={8} mt={10} style={{ backgroundColor: '#F4F8FF' }}>
              <Card.Section>
                <Group position="apart" align="center" p="xs">
                  <Text size="md" color="#1565d8">
                    Contact support:
                  </Text>
                  <Group position="right" align="center">
                    <Anchor
                      href="https://api.whatsapp.com/send/?phone=16893033761&text&type=phone_number&app_absent=0"
                      style={{
                        backgroundColor: '#1565d8',
                        padding: '6px',
                        borderRadius: '50px',
                        width: '25px',
                        height: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      target="_blank"
                    >
                      <IconMessageCircle2
                        size={20}
                        fill="#fff"
                        color="#fff"
                        stroke={1}
                      />
                    </Anchor>
                    <Anchor
                      href="https://call.whatsapp.com/voice/x6n2yjS4MvaErkKSRSBHBc"
                      style={{
                        backgroundColor: '#1565d8',
                        padding: '6px',
                        borderRadius: '50px',
                        width: '25px',
                        height: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      target="_blank"
                    >
                      <IconPhone
                        size={20}
                        fill="#fff"
                        color="#fff"
                        stroke={1}
                      />
                    </Anchor>
                  </Group>
                </Group>
              </Card.Section>
            </Card>

            <Group position="apart" mt={10}>
              <Text size="md" align="center" color="#696F79">
                Account name
              </Text>
              <Group>
                <Text size="lg" weight="semi-bold" align="center" color="#000">
                  {account_name.slice(0, 20)}
                </Text>
                {/* <CopyButton value={account_name} timeout={1000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? 'Copied' : 'Copy'}
                      withArrow
                      position="top"
                      color="#2c74dc"
                      transitionDuration={300}
                    >
                      <ActionIcon
                        color={copied ? 'teal' : 'gray'}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size={20} />
                        ) : (
                          <IconCopy size={20} color="#000" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton> */}
              </Group>
            </Group>
            <Group position="apart" mt={10}>
              <Text size="md" align="center" color="#696F79">
                Bank name
              </Text>
              <Group>
                <Text size="lg" weight="semi-bold" align="center" color="#000">
                  {bank_name}
                </Text>
                <CopyButton value={bank_name} timeout={1000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? 'Copied' : 'Copy'}
                      withArrow
                      position="top"
                      color="#2c74dc"
                      transitionDuration={300}
                    >
                      <ActionIcon
                        color={copied ? 'teal' : 'gray'}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size={20} />
                        ) : (
                          <IconCopy size={20} color="#000" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Group>
            </Group>
            <Group position="apart" mt={10}>
              <Text size="md" align="center" color="#696F79">
                Account number
              </Text>
              <Group>
                <Text size="lg" weight="semi-bold" align="center" color="#000">
                  {account_number}
                </Text>
                <CopyButton value={account_number} timeout={1000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? 'Copied' : 'Copy'}
                      withArrow
                      position="top"
                      color="#2c74dc"
                      transitionDuration={300}
                    >
                      <ActionIcon
                        color={copied ? 'teal' : 'gray'}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size={20} />
                        ) : (
                          <IconCopy size={20} color="#000" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Group>
            </Group>
            <Group position="apart" mt={10}>
              <Text size="md" align="center" color="#696F79">
                Reference code
              </Text>
              <Group>
                <Text size="lg" weight="semi-bold" align="center" color="#000">
                  {refCode}
                </Text>
                <CopyButton value={refCode} timeout={1000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? 'Copied' : 'Copy'}
                      withArrow
                      position="top"
                      color="#2c74dc"
                      transitionDuration={300}
                    >
                      <ActionIcon
                        color={copied ? 'teal' : 'gray'}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size={20} />
                        ) : (
                          <IconCopy size={20} color="#000" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Group>
            </Group>
          </section>

          <Space h={10} />

          <Button
            size="lg"
            fullWidth
            mb={-18}
            mt={5}
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={() => navigate('/ramp_buy_3', { state: { fee } })}
          >
            I have paid, Continue
          </Button>
        </section>
      </SlideInOutAnimation>
    </>
  );
};
