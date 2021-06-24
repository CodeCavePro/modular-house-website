import "./global.css";
import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HouseSlider from "./HouseSlider";
import Accordions from "./Accordion";
import SquareButton from "./buttons/SquareButton";
import detail from "../constant/detail";
import answers from "../constant/answers";
import reviews from "../constant/reviews";
import Contacrs from "../components/Contacts";
import FormBlock from "../components/FormBlock";
import expodom from "../assets/images/expodom_img.png";
import ReviewsSlider from "../components/ReviewsSlider";
import RegularButton from "./buttons/RegularButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import Fade from './animations/Fade'

import { TransitionGroup, CSSTransition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
  },
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  BlockContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  BlockColumn: {
    width:'30%',
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  sliderBlock: {
    display: "flex",
    // flexDirection: "column",
    gap: "20px",
    overflow: "hidden",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  firstLine: {
    marginTop: "0px",
    height: "1px",
  },
  slider: {
    height: "auto",
    flexGrow: "1",
    border: "1px solid",
  },
  accordion: {
    width:'60%',
    display: "flex",
    gap: "40px",
    marginLeft: "auto",
  },

  commentBoxWrap: {
    position: "relative",
    width: "100%",
    height:'30%',
    gap: "20px",
  },
  commentBox: {
    position: "absolute",
    top:'0',
    left:'0',
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  buttons: {
    display: "flex",
    gap: "40px",
  },
  title: {
    marginTop: "140px",
    width: "165px",
  },
  message: {
    // width: "260px",
  },
  mediaBlock: {
    display: "flex",
    marginLeft: "auto",
  },
  mediaBlock_unborder: {
    border: "none",
  },
  formBox: {
    width: "260px",
  },
  sliderBox: {
    width: "100%",
    overflowX: "hidden",
  },
  buttonGroup: {
    display: "flex",
  },
  button: {
    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "96px",
    border: "1px solid",
  },
  expodom_img: {
    width: "100%",
  },
  logoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "135px",
    gap: "7px",
  },
  logo: {
    width: "83px",
  },
  contactsBox: {
    display: "flex",
    flexDirection: "column",
  },
  contactsBoxes: {
    display: "flex",
    gap: "40px",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "92px",
    gap: "30px",
  },
  formField: {
    width: "285px",
  },
  contactsFormBox: {
    display: "flex",
    flexDirection: "column",
  },
  contactsForm: {
    marginTop: "120px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  contactsButton: {
    marginTop: "auto",
  },
  reviewVideoBox: {
    position: "relative",
    width: "275px",
    height: "500px",
  },
  reviewVideo: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  secondBlock: {
    width: "57%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imagesBoxes: {
    width: "360px",
    height: "170px",
  },
  reviewData: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Expodom: {
    marginTop: "100px",
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
}));

const MainPageContent = () => {
  const matches = { 1920: useMediaQuery("(min-width:1920px)") };
  // console.log(matches[1920]);
  const classes = useStyles();
  const [review, setReview] = useState(0);
  const [answeGroup, setAnsweGroup] = useState(0);
  const [reviewVideo, setReviewVideo] = useState(reviews.length - 1);
  const [opacity, setOpasity] = useState(true);

  const handleClickLeft = () => {
    setReview((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    setReviewVideo((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    myRef.current.slickNext();
  };

  const handleClickRight = () => {
    setReview((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    setReviewVideo((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    myRef.current.slickPrev();
  };

  const handleReviewCange = (e) => {
    // console.log(e.target.textContent)
    e.target.textContent === "5-8" ? setAnsweGroup(1) : setAnsweGroup(0);
  };

  const myRef = useRef(null);

  return (
    <div className={classes.root}>
      <Box className={classes.sliderBlock}>
        <span className={`${classes.line} ${classes.firstLine}`}></span>
        <Box className={classes.sliderBox}>
          <HouseSlider />
        </Box>
      </Box>

      {/* ПОДРОБНЕЕ */}

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Typography variant="h4" className={classes.text}>
          ПОДРОБНЕЕ
        </Typography>
        <Box className={classes.accordion}>
          <Accordions arr={detail} />
        </Box>
      </Box>

      {/* ОТЗЫВЫ */}

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockColumn}>
          <Typography variant="h4">ОТЗЫВЫ</Typography>

          <TransitionGroup className={classes.commentBoxWrap}>
            <CSSTransition
              key={reviews[reviewVideo].id}
              in={opacity}
              appear={true}
              timeout={500}
              classNames="fade"
            >
              <Box className={classes.commentBox}>
                <Typography
                  className={classes.name}
                >{`${reviews[review].name} ${reviews[review].place}`}</Typography>
                <Typography
                  className={classes.place}
                >{`${reviews[review].place}, ${reviews[review].year}`}</Typography>
                <Typography variant="body1" className={classes.message}>
                  {reviews[review].text}
                </Typography>
              </Box>
            </CSSTransition>
          </TransitionGroup>

          <Box className={classes.buttons}>
            {/* <Button color="secondary">hello</Button> */}
            <SquareButton variant={"outlined"} click={handleClickLeft} less />
            <SquareButton click={handleClickRight} great variant={"outlined"} />
          </Box>
        </Box>
        <Box className={classes.mediaBlock} onChange={handleReviewCange}>
          {/* <TransitionGroup className="card-container"> */}

          <TransitionGroup className={classes.reviewVideoBox}>
            <CSSTransition
              key={reviews[reviewVideo].id}
              in={opacity}
              appear={true}
              timeout={500}
              classNames="fade"
            >
              <img
                className={classes.reviewVideo}
                src={reviews[reviewVideo].video}
                alt="img"
              ></img>
            </CSSTransition>
          </TransitionGroup>

          {/* </TransitionGroup> */}

          <Box className={classes.secondBlock}>
            <Box className={classes.reviewData}>
              <Typography variant="h4">
                {`${reviews[review].monts}/${reviews[review].day} `}
              </Typography>
            </Box>
            <Box className={classes.imagesBoxes}>
              <ReviewsSlider myRef={myRef} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ОТВЕТЫ */}

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockColumn}>
          <Typography variant="h4" className={classes.text}>
            ОТВЕТЫ
          </Typography>
          <Box className={classes.ButtonGroup}>
            <RegularButton variant="outlined" click={handleReviewCange}>
              1-4
            </RegularButton>

            <RegularButton
              leftNone
              variant="outlined"
              click={handleReviewCange}
            >
              5-8
            </RegularButton>
          </Box>
        </Box>
        <Box className={classes.accordion}>
          <Accordions arr={answers[answeGroup]} />
          {/* {!matches[1920] ? <Accordions arr={answers[answeGroup]} /> : null} */}
          {/* {matches[1920] ? <Accordions arr={answers[0]} /> : null}
          {matches[1920] ? <Accordions arr={answers[1]} /> : null} */}
        </Box>
      </Box>

      {/* "ЭКСПОДОМ" */}

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <FormBlock
          subtitle
          img={expodom}
          header={"ЭКСПОДОМ"}
          title={"Пожить в модульном доме на Браславских озерах"}
        />
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Contacrs header="Контакты" />
      </Box>
    </div>
  );
};
export default MainPageContent;
