import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Result from "../layouts/components/Result";
import SliderSelect from "../layouts/components/SliderSelect";
import TenureSelect from "../layouts/components/TenureSelect";
import MortgageContent from "@layouts/components/Common/mortgage/mortgage-content";
import MortgageFqas from "@layouts/components/Common/mortgage/faqs";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import { NextSeo } from "next-seo";

function MortgageCalculator() {
  const [data, setData] = useState({
    homeValue: 1000000,
    downPayment: 1000000 * 0.3,
    loanAmount: 970000 * 0.8,
    loanTerm: 25,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  return (
    <div>
      <Header />
      <NextSeo
        title="Simplify Your Mortgage Planning with a Mortgage Calculator"
        description="Wondering how much house you can afford? Use a mortgage calculator to get an accurate estimate of your monthly payments and budget accordingly."
        canonical="https://taxmustache.com/mortgage-calculator"
      />
      <h1 className="m-t m-8 text-center">Mortgage Calculator 2023</h1>
      <div>
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="m-t m-12">
        <MortgageContent />
        <div className="flex justify-center">
          <div className="m-t m-5 basis-1/2">
            <MortgageFqas />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MortgageCalculator;
