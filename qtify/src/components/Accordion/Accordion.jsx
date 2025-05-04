import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const MuiAccordion = ({ data }) => {
//   console.log(data.data.data);
  return (
    <>
      {!data.length ? (
        <Box>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        data.map((item, index) => {
          return (
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                width: "85%",
              }}
              key={`Accordion${index}`}
            >
              <Accordion>
                <AccordionSummary
                  sx={{
                    backgroundColor: "var(--color-black)",
                    color: "var(--color-white)",
                    border: "1px solid var(--color-white)",
                    borderRadius: "10px",
                    paddingLeft: "30px",
                  }}
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 60,
                        color: "var(--color-primary)",
                      }}
                    />
                  }
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: "30px", paddingTop: "15px" }}>
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })
      )}
    </>
  );
};

export default MuiAccordion;
