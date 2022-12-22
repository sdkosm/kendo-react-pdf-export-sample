import "./LayoutSample.css";
import KendokaLogo from "./kendoka-logo.svg";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import sampleData from "./invoice-data.json";
import { useRef, useState, useEffect } from "react";

function LayoutSample() {
  const pdfExportComponent = useRef(null);

  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
  ];

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const updatePageLayout = (event) => {
    setLayoutSelection(event.target.value);
  };

  return (
    <div id="example">
      <div className="box wide hidden-on-narrow">
        <div className="box-col">
          <h4>Select a Page Size</h4>
          <DropDownList
            data={ddData}
            textField="text"
            dataItemKey="value"
            value={layoutSelection}
            onChange={updatePageLayout}
          ></DropDownList>
        </div>
        <div className="box-col">
          <h4>Export PDF</h4>
          <Button primary={true} onClick={handleExportWithComponent}>
            Export
          </Button>
        </div>
      </div>

      <div className="page-container hidden-on-narrow">
        <PDFExport
          scale={0}
          paperSize="A3"
          ref={pdfExportComponent}
        >
      <div

      style={{
        margin: "10pt",
        border: "1px solid black",
        padding: "10px",
        width: "21cm",
        height: "29.7cm",
      }}
    >
        <div style={{ clear: "both" }}>
          <div
            style={{
              fontFamily: "Calibri",
              color: "#ffffff",
              backgroundColor: "#000033",
              height: "68pt",
              textAlign: "left",
              marginTop: "-0.9rem",
            }}
          >
            <p className="grid-container">
              <div>
                <p
                  style={{
                    height: "1pt",
                    color: "#de1e14",
                    marginLeft: "1rem",
                    fontSize: "20pt",
                  }}
                >
                  NexTurn India Private Limited
                </p>
                <p
                  style={{
                    height: "5pt",
                    marginLeft: "1.1rem",
                    marginTop: "0rem",
                  }}
                >
                  I-30/45, Prashanti Enclave, Kanajiguda, Hyderabad - 500015,
                  India
                </p>
              </div>

              <div>
                <p>
                  <p
                    style={{
                      height: "5pt",
                      marginLeft: "1rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    Mail Id: info@nexturntech.com
                  </p>
                  <p style={{ height: "0pt", marginLeft: "1rem" }}>
                    Phone: +91 7993810031
                  </p>
                </p>
              </div>
            </p>
          </div>
        </div>

        <p
          style={{
            marginTop: "30pt",
            marginLeft: "432.05pt",
            marginBottom: "10pt",
            textAlign: "right",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#00000a",
              }}
            >
              Date: {}
            </span>
          </strong>
        </p>

        <p
          style={{
            marginTop: "20pt",
            marginLeft: "0.05pt",
            marginBottom: "0pt",
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#00000a",
              }}
            >
              To, <br />
              Mr. {} <br />
              S/O: <br />
              Address: {} <br />
              Mobile No: {} <br />
              E-Mail: {} <br />
            </span>
          </strong>
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#00000a",
              }}
            >
              &nbsp;
            </span>
          </strong>
          <span style={{ width: "19.27pt", display: "inline-block" }}>
            &nbsp;
          </span>
        </p>

        <p
          style={{
            marginTop: "4.65pt",
            marginBottom: "0pt",
            textAlign: "center",
            fontSize: "14pt",
          }}
        >
          <strong>
            <u>
              <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
                Sub: Offer Letter
              </span>
            </u>
          </strong>
        </p>

        <p
          style={{
            marginTop: "4.75pt",
            marginLeft: "0.8pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "115%",
            fontSize: "10pt",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Dear&nbsp;
            </span>
          </strong>
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#00000a",
              }}
            >
              {}
            </span>
          </strong>
          <span
            style={{
              fontFamily: "Calibri",
              color: "#00000a",
            }}
          >
            ,
          </span>
        </p>

        <p
          style={{
            marginTop: "4.75pt",
            marginLeft: "0.8pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "115%",
            fontSize: "10pt",
          }}
        >
          <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
            With reference to the interview, and based on subsequent discussions
            we had with you, we are pleased to offer you the position of&nbsp;
          </span>

          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#000000",
              }}
            >
              {}
            </span>
          </strong>
          <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
            &nbsp; in our Company. We would expect you to join our company on or
            before&nbsp;
          </span>
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
                color: "#00000a",
              }}
            >
              {}.
            </span>
          </strong>

          <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
            &nbsp; This offer must be accepted within three (3) days from date
            of issuance beyond which it would stand withdrawn, your offer
            acceptance is subject to the following terms and conditions.
          </span>
          <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
            &nbsp;
          </span>
        </p>

        <ol style={{ margin: "0pt", paddingLeft: "0pt" }} type={1}>
          <li
            style={{
              marginTop: "3.95pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              You will be appointed as a regular employee under probation for a
              period of six months and your services can be regularized upon
              successful completion of the probation period.
            </span>
            <span style={{ color: "#00000a" }}>&nbsp;</span>
          </li>
          <li
            style={{
              marginTop: "1.75pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              You will be on an Annual CTC&nbsp;
            </span>
            of <strong>Rs.{} /- (Rupees Only)</strong> which include{" "}
            <span></span>
            <strong>{}</strong> <span></span>
            of Annual variable amount. For each Fiscal Year during the
            employment tenure,The company will pay to the employee a
            profit-sharing bonus (PSB), based on Fiscal year Performance. PSB
            will be determined for each fiscal year by the company.
            <span style={{ color: "#00000a" }}>
              &nbsp;Above CTC &amp; PSB will be subject to deductions for PF
              contributions, Group Insurance, Professional Tax, I.T. etc. This
              includes all allowances for Accommodation, Conveyance, Leave
              Travel, Medical Reimbursement &amp; required for Work from home
              infrastructure etc.
            </span>
            <span style={{ color: "#00000a" }}>&nbsp;</span>
          </li>
          <li
            style={{
              marginTop: "1.75pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              You shall keep your salary details strictly confidential &amp;
              with you only.
            </span>
            <span style={{ color: "#00000a" }}>&nbsp;</span>
          </li>
          <li
            style={{
              marginTop: "1.85pt",
              marginRight: "66.4pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              You shall submit the following self-attested copies of documents
              on or before the time of joining.
            </span>
          </li>
        </ol>

        <ul style={{ margin: "0pt", paddingLeft: "0pt" }} type="disc">
          <li
            style={{
              marginTop: "1.85pt",
              marginRight: "66.4pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Proof of Date of Birth certificate (10
            </span>
            <span
              style={{
                fontFamily: "Calibri",
                fontSize: "5.33pt",
                color: "#00000a",
              }}
            >
              <sup>th</sup>
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Marksheet/Passport/Voter card)&nbsp;
            </span>
          </li>
          <li
            style={{
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              All qualification certificates mentioned in resume.
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </li>
          <li
            style={{
              marginTop: "0.65pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              All experience certificates (N/A for fresher’s&amp; intern)
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </li>
          <li
            style={{
              marginTop: "0.55pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Scanned Passport size photograph.
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </li>
          <li
            style={{
              marginTop: "0.55pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Copy of both PAN &amp; Aadhaar card&nbsp;
            </span>
          </li>
          <li
            style={{
              marginTop: "0.55pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Address Proof (Voter Card/Passport) any one or both.
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </li>
          <li
            style={{
              marginTop: "0.55pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Local Address proof (Rental agreement/Gas bill not more than a
              month old/ Recent PG receipt)
            </span>
          </li>
          <li
            style={{
              marginTop: "0.65pt",
              marginLeft: "44.38pt",
              textAlign: "justify",
              paddingLeft: "9.32pt",
              fontFamily: "serif",
              fontSize: "8pt",
              color: "#000000",
            }}
          >
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Bank account details.
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              (Cancelled Cheque leaf /Front page of Passbook)
            </span>
          </li>
        </ul>
        <ol start={5} style={{ margin: "0pt", paddingLeft: "0pt" }} type={1}>
          <li
            style={{
              marginTop: "1.95pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              Company has the right to do background check for you, post joining
              the organization.
            </span>
          </li>
          <li
            style={{
              marginTop: "1.95pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              In the event of any information given in your
              application/C.V/Resume &amp; during interview being found
              incorrect in any respect, this offer will be held void and stands
              cancelled. If, any dispute arises, it will be handled legally if
              required.
            </span>
          </li>
          <li
            style={{
              marginTop: "1.75pt",
              marginLeft: "30.34pt",
              textAlign: "justify",
              lineHeight: "115%",
              paddingLeft: "5.41pt",
              fontFamily: "Calibri",
              fontSize: "10pt",
              color: "#000000",
            }}
          >
            <span style={{ color: "#00000a" }}>
              The detailed appointment letter will be issued to you from our
              office on or after the date of joining&amp; on submission of above
              said documents.
            </span>
            <span style={{ color: "#00000a" }}>&nbsp;</span>
          </li>
        </ol>

        <p
          style={{
            margin: "0pt 0.1pt 0pt 18.05pt",
            textAlign: "justify",
            lineHeight: "115%",
            fontSize: "10pt",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              Wishing you all the best,
            </span>
          </strong>
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </strong>
        </p>

        <p
          style={{
            marginTop: "0pt",
            marginLeft: "0.2pt",
            marginBottom: "0pt",
            textIndent: "0.6pt",
            textAlign: "justify",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              For NexTurn India Private Limited,
            </span>
          </strong>
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </strong>
        </p>

        <p
          style={{
            marginTop: "0pt",
            marginLeft: "0.2pt",
            marginBottom: "0pt",
            textIndent: "0.6pt",
            textAlign: "justify",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </strong>
        </p>

        <p
          style={{
            marginTop: "0pt",
            marginLeft: "0.05pt",
            marginBottom: "0pt",
            textAlign: "justify",
          }}
        >
          <p>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png"
              alt=""
            />
          </p>
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
              }}
            >
              Bhaskar Vadlamani <br />
              Founder, COO &amp; MD India
            </span>
          </strong>
          <strong>
            <span
              style={{
                fontFamily: "Calibri",
              }}
            >
              &nbsp;
            </span>
          </strong>
          <span style={{ width: "19.27pt", display: "inline-block" }}>
            &nbsp;
          </span>
        </p>

        <p
          style={{
            marginTop: "0.45pt",
            marginLeft: "0.8pt",
            marginBottom: "0pt",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#000000" }}>
              &nbsp;
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0.45pt",
            marginLeft: "0.8pt",
            marginBottom: "0pt",
            textAlign: "center",
            fontSize: "12pt",
          }}
        >
          <strong>
            <u>
              <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
                ACCEPTANCE
              </span>
            </u>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0.45pt",
            marginLeft: "0.8pt",
            marginBottom: "0pt",
            textAlign: "justify",
            fontSize: "10pt",
          }}
        >
          <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
            I, <strong>{}</strong> accept this offer and I will be joining on
            duty on or before <strong>{}</strong>
          </span>
        </p>

        <p
          style={{
            marginTop: "0pt",
            marginLeft: "0.2pt",
            marginBottom: "0pt",
            textIndent: "0.6pt",
            textAlign: "justify",
          }}
        >
          <strong>
            <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
              &nbsp;
            </span>
          </strong>
        </p>
        <p className="grid-container">
          <div>
            <strong>
              <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
                Signature &amp; Name
              </span>
            </strong>
          </div>

          <div>
            {" "}
            <strong>
              <span style={{ fontFamily: "Calibri", color: "#00000a" }}>
                Date &amp; Time
              </span>
            </strong>
          </div>
          <div>{}</div>
          <div>{}</div>
        </p>
    </div>
        </PDFExport>
      </div>
    </div>
  );
}

export default LayoutSample;
