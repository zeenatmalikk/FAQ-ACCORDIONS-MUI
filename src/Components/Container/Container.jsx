import { Grid } from "@mui/material";
import React from "react";
import "./Container.css";
import illust from "../../assets/images/illustration-box-desktop.svg";
import illust2 from "../../assets/images/illustration-woman-online-desktop.svg";
import AccordionComp from "../Accordion/Accordion";
import { data } from "../../assets/data";
const Container = () => {
  return (
    <div className="container">
      {/* <div className="acc"> */}
      <div className="acc-container">
        <Grid container>
          <img src={illust} alt="" className="acc-card-image" />

          <Grid item md={6} xs={12} className="acc-card-img-container">
            <img src={illust2} alt="" className="acc-card-second-img" />
          </Grid>
          <Grid item md={6} xs={12} className="faq-container">
            <div className="faq-content-container">
              <h2 className="faq-title">faq</h2>
              {data.map((item) => (
                <AccordionComp title={item.quest} desc={item.answer} />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Container;
