import React from "react";
import { Box, Grid, Typography, Paper, Container } from "@mui/material";

export default function Review() {
  return (
    <Container maxWidth="lg">
      {/* First Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.oldest.org/wp-content/uploads/2023/01/3_Evan_Spiegel.jpg"
            alt="Ludovico Bassetti"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Ludovico Bassetti
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            CEO & Founder of Oversease Food Trading
          </Typography>
          <Typography variant="h5" color="primary" align="center" paragraph>
            Let’s See What the CEO of Oversease Food Trading Says About Our Products and Company:
          </Typography>
          <Paper sx={{ padding: 3, backgroundColor: "#f0f8ff", borderRadius: 2 }}>
            <Typography variant="body1" color="textSecondary" align="center" paragraph>
              <i>
                "If it’s good for them, it’s great for you!"
                At Earthy Tales, we let nature do its thing! No pesticides, no chemicals—just pure, organic love for your food. 
                So, if you spot a tiny hole in your spinach or a cheeky blemish on your tomato or a pest on cabbage, don’t worry—it’s nature’s way of saying: 
                “Hey, this food is so clean, even pests couldn’t resist!” 
                After all, real food isn’t picture-perfect—it’s pesticide-free, healthy, and safe for you and your family.
                Imperfections are beautiful when they’re real.
              </i>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ fontWeight: "bold" }}>
              Ludovico Bassetti <br /> CEO & Founder of Oversease Food Trading
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Second Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQENuDcgFACY5w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1568205869676?e=2147483647&v=beta&t=-WVGv6nZLpkLdTeFMYpjxe3_y0CBYwnty95C-uV4diQ"
            alt="Deepak Sabharwal"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Deepak Sabharwal
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            An Organic Farmer, A Father, Co-founder & CEO
          </Typography>
          <Typography variant="h5" color="primary" align="center" paragraph>
            Let’s See What the Organic Farmer, A Father, Co-founder & CEO Says About Our Products and Company:
          </Typography>
          <Paper sx={{ padding: 3, backgroundColor: "#f0f8ff", borderRadius: 2 }}>
            <Typography variant="body1" color="textSecondary" align="center" paragraph>
              <i>
                We are FREE from PESTICIDES and Yes, we take this pledge very seriously.
                At Earthy Tales, your health and trust mean everything to us. That’s why, since 2017, we’ve been conducting independent pesticide lab tests on our organic produce to ensure it’s truly safe, natural, and chemical-free. 
                The latest reports are in and tested for 260+ pesticides being used in India, and we’re thrilled to share that all tests came out perfectly clean! 
                This is our promise to you: only the purest, healthiest, and most honest food for your family.
                Thank you for being part of the Earthy Tales journey. Together, we’re building a healthier, happier world. Stay organic!
              </i>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ fontWeight: "bold" }}>
              Deepak Sabharwal <br /> An Organic Farmer, A Father, Co-founder & CEO
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Third Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://assets.zeezest.com/blogs/PROD_Shriya_naheta_wadhwa_zama_organics_1654003788720.jpg"
            alt="Shriya Naheta"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Shriya Naheta
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            The Founder of Zama Foods
          </Typography>
          <Typography variant="h5" color="primary" align="center" paragraph>
            Let’s See What the Founder of Zama Foods Says About Our Products and Company:
          </Typography>
          <Paper sx={{ padding: 3, backgroundColor: "#f0f8ff", borderRadius: 2 }}>
            <Typography variant="body1" color="textSecondary" align="center" paragraph>
              <i>
                When Shriya realized the variety of produce growing on the Indian subcontinent, she had a eureka moment. According to her, Indian geography provides high-quality, clean produce that should be more widely available.
                "Organizing the supply chain was a challenge in the beginning because organic commodities have a shorter shelf life and spoil easily owing to spoilage, infestation, or storage and handling issues."
                I discovered this the hard way when I couldn't meet delivery deadlines. "With our source location in mind, we had to come up with solutions across the board — from logistics to storage to packaging," the 28-year-old entrepreneur reveals.
                Zama Organics, situated in Mumbai, focuses on and contributes to the community's general health and welfare by promoting clean and green food.
              </i>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ fontWeight: "bold" }}>
              Shriya Naheta <br /> The Founder of Zama Foods
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
