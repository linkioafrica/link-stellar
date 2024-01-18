import { Button, Text, createStyles, Space } from "@mantine/core";
import { SuccessImage } from "../../../libs/Images";
import { FadeInOutAnimation } from "../../../libs/PageAnimation";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.secondary[0],
    ":hover": { backgroundColor: theme.colors.secondary[5] },
  },
}));

export const RampBuySuccess = () => {
  const { classes } = useStyles();

  return (
    <>
      <FadeInOutAnimation>
        <section>
          <Space h={20} />
          <div style={{ width: 200, margin: "0 auto" }}>
            <SuccessImage />
          </div>
          <Text
            style={{ fontSize: "1.8rem" }}
            weight={700}
            align="center"
            transform="capitalize"
          >
            Buy Request Received
          </Text>
          <Space h={10} />
          <Text
            style={{ fontSize: "0.9rem", maxWidth: "80%", margin: "0 auto" }}
            weight={500}
            align="center"
            transform="capitalize"
          >
            Once your NGN has been received by the vendor, your wallet will be
            funded.
          </Text>
          <Space h={20} />
          <Button
            size="lg"
            fullWidth
            mb="md"
            mt={20}
            style={{ fontWeight: 500 }}
            radius="md"
            className={classes.button}
            onClick={() => closed}
          >
            Done
          </Button>
        </section>
      </FadeInOutAnimation>
    </>
  );
};
