import {
  Button,
  createStyles,
  Select,
  Space,
  Text,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconArrowNarrowLeft } from '@tabler/icons';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlideInOutAnimation } from '../../libs/PageAnimation';
import { useCustomerKYCMutation } from '../../services/transactionApi';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ':hover': { backgroundColor: theme.colors.secondary[5] },
    ':disabled': { backgroundColor: theme.colors.secondary[3], color: 'white' },
    transition: 'all 0.3s ease-in-out',
  },
}));

export const SellKYC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const [IDType, setIDType] = useState();
  const [idNumber, setIDNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [customerKyc] = useCustomerKYCMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // console.log(IDType, idNumber, moment(dateOfBirth).format('MMMM DD, YYYY'));
    try {
      const response = await customerKyc({
        idType: IDType,
        idNumber: idNumber,
        dateOfBirth: moment(dateOfBirth).format('MMMM DD, YYYY'),
      }).unwrap();
      if (response.status === 'success') {
        toast.success(response.message);
        navigate('/ramp_sell_2');
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
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
            onClick={() => navigate('/ramp_sell_1')}
          />

          <Text size="xl" weight="bold" align="center" mt={-30} color="#1565d8">
            Identification Details
          </Text>
          <Space h={5} />
          <Text size="md" align="center" color="#000">
            Complete your KYC to continue
          </Text>
          <Space h={20} />
          <form onSubmit={handleSubmit}>
            <Select
              label="ID type"
              value={IDType}
              data={[
                'BVN',
                'Passport',
                'NIN',
                'Driving License',
                'Voters Card ',
                'National ID',
              ]}
              searchable
              size="md"
              transition="pop-top-left"
              transitionTimingFunction="ease"
              transitionDuration={80}
              maxDropdownHeight={200}
              nothingFound="Empty list"
              filter={(value: string, item: any) =>
                item.label?.toLowerCase().includes(value.toLowerCase().trim())
              }
              onChange={(value: any) => setIDType(value)}
            />
            <Space h={30} />
            <TextInput
              label="ID number"
              size="md"
              type="number"
              value={idNumber}
              onChange={(event: any) => setIDNumber(event.target.value)}
            />
            <Space h={30} />
            <DatePicker
              placeholder="Pick date"
              label="Date of birth"
              value={dateOfBirth}
              onChange={(value: any) => setDateOfBirth(value)}
            />

            <Space h={35} />
            <Button
              size="lg"
              fullWidth
              mb="md"
              mt={20}
              style={{ fontWeight: 500 }}
              radius="md"
              className={classes.button}
              loading={isLoading}
              type="submit"
              disabled={
                IDType === '' || idNumber === '' || dateOfBirth === ''
                  ? true
                  : false
              }
            >
              Continue
            </Button>
          </form>
        </section>
      </SlideInOutAnimation>
    </>
  );
};
