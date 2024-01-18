import { createStyles } from "@mantine/core";
import { FadeInOutAnimation } from "../../libs/PageAnimation";
import { IconAlertTriangle } from "@tabler/icons";

const useStyles = createStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5rem",
    marginBottom: "7.5rem",
  },
  h2: {
    color: "#FF4B33",
    fontSize: "1.8rem",
    fontWeight: 700,
  },
  p: {
    color: "#15273f",
    fontSize: "1.1rem",
    marginTop: "-.7rem",
    marginBottom: "3rem",
  },
}));

export const BadRequest = () => {
  const { classes } = useStyles();
  return (
    <>
      <FadeInOutAnimation>
        <section className={classes.wrapper}>
          <IconAlertTriangle size={150} color="#FF4B33" stroke={1.2} />
          <h2 className={classes.h2}>Bad Request</h2>
          <p className={classes.p}>Couldn't Authenticate</p>
        </section>
      </FadeInOutAnimation>
    </>
  );
};
