import { AccordionSummary, AccordionDetails, Accordion } from "@mui/material";
import React from "react";
import "./Accordion.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const AccordionComp = ({ title, desc }) => {
  return (
    <div>
      <Accordion className="main-acc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acc-title">{title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acc-desc">{desc}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
