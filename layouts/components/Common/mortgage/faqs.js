import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function MortgageFqas() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How much mortgage can I afford?
        </AccordionHeader>
        <AccordionBody>
          The amount you can afford to pay will depend on your ability to pay,
          this in turn depends on your financial health, usually with a simple
          calculation we can figure out what amount of free money we have left
          each month, i.e.: Income - Expenses = Amount available. It is
          important to make sure that you will be able to cover the cost of your
          mortgage, as this will be perhaps the biggest expense you will have
          for life.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to get a mortgage?
        </AccordionHeader>
        <AccordionBody>
          In the U.S. market there are many options for acquiring a mortgage,
          generally state banks are among the best options, since they have
          lower interest rates, although the requirements tend to be higher and
          more demanding.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What is a reverse mortgage?
        </AccordionHeader>
        <AccordionBody>
          It is known as a reverse mortgage loan, which is a lending system
          similar to a traditional mortgage, it allows the homeowner to borrow
          money using their home as collateral. As with traditional mortgages,
          when you obtain a reverse mortgage loan, the title to your home
          remains in your name. However, unlike a traditional mortgage, with a
          reverse mortgage loan, borrowers do not make monthly mortgage
          payments. The loan obtained is repaid when the borrower no longer
          lives in the home. In addition, the interest and fees generated are
          added to the loan balance each month and so the balance will increase.
          With a reverse mortgage loan, homeowners must pay property taxes and
          homeowners insurance, use the property as a primary residence, and
          maintain the home in good condition.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
