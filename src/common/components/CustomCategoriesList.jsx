import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllCategory } from "../../common/services/categoriesService";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const CustomCategoriesList = () => {
  const theme = useTheme();
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ position: "relative", width: "200px" }}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        sx={{
          position: "absolute",
          zIndex: 99,
          top: -28,
          left: 20,
          boxShadow: "none",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#1B1C1A",
          }}>
          <Typography
            sx={{
              fontSize: 20,
              // color: "#0d6efd",
              color: "#ffffff",
            }}>
            Categories
          </Typography>
        </AccordionSummary>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category}`}
              style={{ textDecoration: "none" }}>
              <AccordionDetails
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: 20,
                  textDecoration: "none",
                  backgroundColor: "#1B1C1A",
                  color: "#ffffff",
                  display: "flex",
                }}>
                <IconButton>
                  <KeyboardArrowRightIcon sx={{ color: "#ffffff" }} />
                </IconButton>
                {category}
              </AccordionDetails>
            </Link>
          ))}
      </Accordion>
    </Box>
  );
};
