import React from "react";
import HeaderHome from "../../../components/Atoms/Headers/HeaderHome/HeaderHome";
import BarDashboard from "../../../components/Atoms/Headers/BarDashboard/BarDashboard";
import CardProfile from "../../../components/Atoms/Cards/CardProfile/CardProfile";
import Progress from "../../../components/Atoms/Progress/Progress";
import ButtonTabsFilters from "../../../components/Organisms/ButtonTabsFilters/ButtonTabsFilters";
import CardLoanTasks from "../../../components/Atoms/Cards/CardLoanTasks/CardLoanTasks";
import homeWhiteSvg from "../../../assets/images/home-white.svg";
import homeWhiteEmptySvg from "../../../assets/images/home-white-empty.svg";
import homeBlackSvg from "../../../assets/images/home-black-empty.svg";
import homeGreenSvg from "../../../assets/images/home-green-all.svg";

const Dashboard = () => {
  const dummyTasksCards = [
    {
      id: 1,
      title: "Property access details",
      text: "The main contact for the property is",
      textBold: "someone else.",
      contacName: "Ricardo Sims",
      contacEmail: "ricardo@constlending.com",
      contacPhone: "213-232-3248",
      state: "approved",
      stateTitle: "APPROVED",
      typeTask: "quick task",
    },
    {
      id: 2,
      title: "Entity ownership and guarantors",
      text: "My entity is/isn’t formed yet, but it will have # owners who own more than 20%. The owners/loan guarantors are ...",
      state: "beginTask",
      stateTitle: "NOT STARTED",
      typeTask: "Major task",
    },
    {
      id: 3,
      title: "Entity ownership and guarantors",
      text: "My entity isn’t formed yet, but it will have",
      state: "inReview",
      textBold: "3 guarantors",
      stateTitle: "IN REVIEW",
      typeTask: "Major task",
    },
    {
      id: 4,
      title: "Construction Budget/SOW",
      state: "addDocs",
      stateTitle: "NOT STARTED",
      typeTask: "Major task",
      progress: 0,
    },
    {
      id: 5,
      title: "Purchase contract",
      text: "My contract is/is not fully executed by all parties",
      state: "upload",
      stateTitle: "NOT STARTED",
      typeTask: "quick task",
    },
    {
      id: 6,
      title: "Proof of Liquidity",
      text2:
        "We’re reviewing the docs you submitted, but we need proof of a higher account balance",
      state: "incomplete",
      stateTitle: "INCOMPLETE",
      typeTask: "Major task",
      progress: 30,
    },
    {
      id: 7,
      title: "Proof of Liquidity",
      text2: "We were unable to approve 2 of your docs",
      state: "error",
      stateTitle: "ERROR",
      typeTask: "Major task",
      progress: 30,
    },
  ];
  const dummyTabsOfProgress = [
    {
      id: 1,
      name: "Pre-Approval",
      key: "preApproval",
      state: "complete",
      stateName: "COMPLETE",
      text: "You answer a few questions and we pre-approve you for a loan",
      arrayItems: [
        {
          id: 1,
          icon: homeWhiteSvg,
          text: "Pre-approval letter",
          titleButton: "View",
        },
      ],
    },
    {
      id: 2,
      name: "Approval Docs & Term Sheet",
      key: "approvalDocs",
      state: "not-started",
      stateName: "NOT STARTED",
      text: "We’ll conduct some due diligence to verify the info you gave us",
      arrayItems: [
        {
          id: 1,
          icon: homeBlackSvg,
          text: "Appraisal not ordered",
          titleButton: "Pay appraisal",
        },

        {
          id: 2,
          icon: homeBlackSvg,
          text: "Entity docs unverified",
          titleButton: "Submit docs",
        },
        {
          id: 3,
          icon: homeBlackSvg,
          text: "Insurance unverified",
          titleButton: "Request quote",
        },
        {
          id: 3,
          icon: homeBlackSvg,
          text: "Track record unverified",
          titleButton: "Submit HUDs",
        },
      ],
    },
    {
      id: 3,
      name: "Property evaluation & due diligence",
      key: "propertyEvaluation",
      state: "started",
      stateName: "INCOMPLETE",
      text: "We’ll conduct some due diligence to verify the info you gave us",
      arrayItems: [
        {
          id: 1,
          icon: homeWhiteEmptySvg,
          text: "Appraisal not ordered",
          titleButton: "Pay appraisal",
        },

        {
          id: 2,
          icon: homeGreenSvg,
          text: "Entity docs unverified",
          titleButton: "View docs",
          state: "complete",
        },
        {
          id: 3,
          icon: homeWhiteEmptySvg,
          text: "Insurance unverified",
          titleButton: "Request quote",
        },
        {
          id: 3,
          icon: homeWhiteEmptySvg,
          text: "Track record unverified",
          titleButton: "Submit HUDs",
        },
      ],
    },
    {
      id: 4,
      name: "final approval",
      key: "finalApproval",
      state: "not-started",
      stateName: "NOT STARTED",
      text: "We’ll conduct some due diligence to verify the info you gave us",
      arrayItems: [
        {
          id: 1,
          icon: homeBlackSvg,
          text: "Appraisal not ordered",
          titleButton: "Pay appraisal",
        },
      ],
    },
    {
      id: 5,
      name: "closing",
      key: "closing",
      state: "not-started",
      stateName: "NOT STARTED",
      text: "We’ll conduct some due diligence to verify the info you gave us",
      arrayItems: [
        {
          id: 1,
          icon: homeBlackSvg,
          text: "Appraisal not ordered",
          titleButton: "Pay appraisal",
        },
      ],
    },
  ];
  return (
    <div className="Dashboard">
      <HeaderHome />
      <div className="Dashboard--container">
        <BarDashboard />
        <div className="Dashboard__column">
          <div className="Dashboard__head">
            <div className="content">
              <p className="body-regular">
                <span className="body-regular-bold">UNDERWRITING |</span> Est.
                Closing: <span className="body-regular-bold">12/22/23</span>
              </p>
              <h1 className="h1">356 14th St. San Francisco, CA 93201</h1>
              <div className="content-progress">
                <span className="body-small">Loan progress</span>
                <Progress dummyTabsOfProgress={dummyTabsOfProgress} />
              </div>
            </div>
            <CardProfile />
          </div>
          <div className="Dashboard__label">
            <p className="body-small">
              <span className="body-small-w4">Rental | ReFi | 8% LTV</span>{" "}
              <span className="body-small-w6">See Loan Details and Docs</span>
            </p>
          </div>
          <div className="Dashboard__head Dashboard__head-tabs">
            <div className="box-title">
              <p className="red-title">DO NOW</p>
              <h1 className="h2">Approval Tasks</h1>
            </div>
            <ButtonTabsFilters />
          </div>
          <div className="content-flex-wrap">
            {dummyTasksCards?.map((task) => (
              <CardLoanTasks key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
