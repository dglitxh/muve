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
  height: "90vh",
  boxShadow: 24,
  p: 2,
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
        <Box sx={style} width={{xs: "80vw", sm: "80vw"}}>{props.comp()}</Box>
      </Modal>
    </div>
  );
}
