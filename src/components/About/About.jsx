import "./About.css";
import Header from "../Header/Header";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-cont">
        <div className="about-sub-cont">
          <Typography
            variant="h5"
            display="block"
            gutterBottom
            className="heading"
          >
            About Us
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="">
            ETark is an automated complaint resolution platform for smartphone
            complaints. We help in resolving both technical and non-technical
            smartphone problems via. our service offerings. ETark was
            conceptualized after identifying the plight of hapless smartphone
            customers and the inefficiency of the service centers.
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="">
            How ETark helps customers?
          </Typography>
          <Typography variant="h6" gutterBottom className="heading">
            Resolving technical problems :
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="">
            Having a technical problem with your smartphone can be disastrous
            because unlike any other gadget, a smartphone lets you stay
            connected with the world and manage all your electronic records. The
            current approaches that a user usually takes :
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Visit an authorized service center
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="h6" gutterBottom className="heading1">
                While an authorized service center is always recommended, but as
                a user, you don’t know if:
              </Typography>
              <div className="paragraph">
                <Typography variant="subtitle1" gutterBottom className="">
                  A. Parts are available at the service center to service your
                  device
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="">
                  B. Your device would be considered within warranty by the
                  service center
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="">
                  C. The exact problem in your device and the price to be paid
                  to fix that
                </Typography>
              </div>
              <Typography variant="subtitle1" gutterBottom className="">
                All this demands you to visit the service center and wait in a
                queue with other customers which can often take hours with the
                possibility of parts not available or the device not considered
                within warranty by the service center or the quoted price of
                servicing out of your budget!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="top-accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Visit an unauthorized service center
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="h6" gutterBottom className="heading1">
                Although an unauthorized service center might seem light on your
                pocket, this route is never recommended because :
              </Typography>
              <div className="paragraph">
                <Typography variant="subtitle1" gutterBottom className="">
                  A. Due to the poor quality of servicing, they often result in
                  frequent annual repairs for the same issue or some other
                  problem thus making the actual cost of repair for that phone
                  way higher than the cost of repair by an authorized service
                  center
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="">
                  B. Your personal data could be retrieved from your device even
                  if you have removed the same from your device. So due to low
                  accountability of unauthorized service centers, data could be
                  stolen from your device during servicing.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="top-accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Book for a home visit repair service
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="h6" gutterBottom className="heading1">
                Home visit repair services are quite popular nowadays due to the
                convenience of home repair that they promise but this should be
                avoided due to the following reasons:
              </Typography>
              <div className="paragraph">
                <Typography variant="subtitle1" gutterBottom className="">
                  A. Most of the home repair services don’t have any
                  authorization from the device manufacture to provide
                  servicing, thus the accountability and quality of servicing is
                  low
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="">
                  B. Many a times your device demands a part replacement which
                  may not be available for the home visit repair agent at that
                  point and post their inspection of the device at your
                  location, they might take your device to their service center
                  thus causing an additional delay in the servicing of the
                  device
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="top-accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Device Insurance companies
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="h6" gutterBottom className="heading1">
                Although device Insurance companies promise to insure your
                device from future damage or malfunctioning:
              </Typography>

              <Typography variant="subtitle1" gutterBottom className="">
                They often result in long waiting time to get clearance from the
                smartphone manufacturer to get the ensuing servicing covered
                which offsets the cost savings that they promise through their
                insurance
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="">
                All these approaches have their own share of flaws.
              </Typography>

              <Typography variant="subtitle1" gutterBottom className="">
                ETark firmly believes that the best way to solve any technical
                issue is through authorized service centers only provided the
                inefficiencies of the service centers are removed and the
                customer doesn’t have to go through any hassle. This is exactly
                where we step in and we ensure that both the customer and the
                service center are seamlessly connected!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Typography
            variant="h6"
            gutterBottom
            className="heading"
            style={{ paddingTop: "20px" }}
          >
            Resolving non-technical problems :
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="">
            Problems like missing, damaged or duplicate items during purchase or
            Payment related issues like improper bill, wrongful deductions etc
            are some of the examples of non- technical problems that customers
            face.
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="">
            The ideal way to solve this is to reach out to the seller
            (e-commerce firm/ offline retailer) or the device manufacturer (e.g.
            Samsung, Apple etc.). However a customer’s voice can go unheard in a
            discussion with the other party. So to lend a strength to the
            customer’s voice, we do an instant analysis of his/ her complaint
            and share certain reports with him/ her which can help identify the
            merit of the complaint/ grievance.
          </Typography>

          <Accordion className="top-accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Chances of winning
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="subtitle1" gutterBottom className="">
                Chances of winning tells you how likely you are to win in a
                consumer court had the complaint been filed there
              </Typography>

              <Typography variant="subtitle1" gutterBottom className="">
                Or Alternatively,
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="">
                How likely you are to win in a negotiation with the other party
                (device manufacturer or seller) by quoting your winning chances
                in a consumer court as a reference
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="top-accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="accord-heading">
                Expected compensation
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accord-details">
              <Typography variant="subtitle1" gutterBottom className="">
                Expected compensation tells you what compensation (free
                servicing, product/ part replacement or monetary compensation)
                you are likely to get from the other party had your complaint
                been filed in a consumer court
              </Typography>

              <Typography variant="subtitle1" gutterBottom className="">
                Or Alternatively,
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="">
                what compensation (free servicing, product/ part replacement)
                you are likely to get from the other party in a negotiation
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
