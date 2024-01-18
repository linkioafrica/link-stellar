import { Group, Modal, Text } from "@mantine/core";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import LINK from "../assets/others/link.svg";
import { PageRoutes } from "../utils/PageRoutes";

export const Frame = () => {
  const [opened, setOpened] = useState(true);
  const origin = window.parent.frames[0];

  const handleCloseModal = () => {
    if (origin) {
      setOpened(false);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleCloseModal}
        size="md"
        zIndex={5}
        centered={true}
        radius="lg"
        closeOnEscape={false}
        closeOnClickOutside={false}
        trapFocus={false}
        overlayOpacity={0.1}
      >
        <Router>
          <PageRoutes />
        </Router>

        <Group position="center" mt={40} mb={10}>
          <Text>Powered by LINK</Text>
        </Group>
      </Modal>
    </>
  );
};
