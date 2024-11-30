import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "40%",
  left: "40%",
  transform: "translate(-40%, -40%)",
  bgcolor: "background.paper",
  overflow: "scroll",
  border: "1px solid #000",
  boxShadow: 24,
  p:1,
};

export default function MyModal(props) {
  return (
    <div>
      <Modal
        open={props.open || false}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.comp()}</Box>
      </Modal>
    </div>
  );
}
