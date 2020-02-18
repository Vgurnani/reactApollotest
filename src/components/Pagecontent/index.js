import React, { useState, useEffect } from "react";

import {
  Pagecontent,
  Section,
  InputCover,
  SvgContent,
  Modal,
  Rangeslider,
  TableWrapper
} from "./style";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { Column, Table } from "react-virtualized";
import Loader from "../Loader";
import GET_LAUNCHES from "./graphql";
import subscription from "./subscriptionql";

let rangeValueState = 0;
let bulletPosition = "33.5px";
let linearGradient = "";
const PageContent = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES);
  const [tableData, setTableData] = useState([]);
  const [horizontal, setHorizontal] = useState("");
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [rangeValue, setRangeValue] = useState(bulletPosition);
  const testSubscription = useSubscription(subscription);
  useEffect(() => {
    if (data && data !== undefined && data.bets && data.bets.length > 0) {
      setTableData(data.bets);
    }
  }, [data]);

  let updateData = newData => {
    setTableData(newData);
  };

  useEffect(() => {
    let newData = [...tableData];
    if (
      testSubscription &&
      testSubscription.data &&
      testSubscription.data.betAdded
    ) {
      if (tableData[0].time !== testSubscription.data.betAdded.time) {
        newData.unshift(testSubscription.data.betAdded);
        // setTableData(newData)
        updateData(newData);
      }
    }
  }, [testSubscription]);

  if (loading) return <Loader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  let handleOnChange = value => {
    setHorizontal(value);
  };

  let modalHandle = () => {
    setmodalVisibility(!modalVisibility);
  };

  const verticalLabels = {
    0: "0",
    100: "100"
  };
  let rangeValueHandle = value => {
    bulletPosition = (value.target.value / 100) * 480 + 33.5;
    setRangeValue(bulletPosition + "px");
    rangeValueState = value.target.value;
    linearGradient = `${"linear-gradient(to right, #FA6868 0% , #FA6868 " +
      rangeValueState +
      "% , #6FF48D " +
      rangeValueState +
      "% , #6FF48D 100%)"}`;
  };
  return (
    <>
      <Pagecontent className="dFlex flex-direction-row justify-content-around">
        <Section className="dFlex flex-direction-column justify-content-center align-items-center">
          <Rangeslider>
            <div className="range-slider">
              <div className="range-slider__range-values">
                <span>100</span>
                <span>0</span>
              </div>

              <div className="range-slider__inner">
                <input
                  type="range"
                  className="range-slider__input"
                  value={rangeValueState}
                  onChange={e => rangeValueHandle(e)}
                  style={{ background: linearGradient }}
                />
                <label
                  className="range-slider__label"
                  style={{ left: rangeValue }}
                >
                  {rangeValueState}
                </label>
              </div>
            </div>
          </Rangeslider>
          <InputCover className="dFlex">
            <div className="floating-label-wrap">
              <input
                type="text"
                className="floating-label-field floating-label-field--s3"
                id="betAmount"
                placeholder="Bet Amount"
              />
              <label htmlFor="betAmount" className="floating-label">
                Bet Amount
              </label>
            </div>
            <button>1/2</button>
            <button className="lastBtn">x2</button>
          </InputCover>
        </Section>
        <Section
          className="dFlex justify-content-center align-items-center"
          width="36.93%"
        >
          {/* <ReactTable data={tableData} columns={columns} showPagination={false}/> */}
          <TableWrapper>
            <Table
              width={300}
              height={450}
              headerHeight={20}
              rowHeight={40}
              rowCount={tableData.length}
              rowGetter={({ index }) => tableData[index]}
            >
              <Column
                label="TIME"
                dataKey="time"
                width={200}
                cellRenderer={({ cellData }) => cellData}
              />
              <Column
                width={200}
                label="BET"
                dataKey="bet"
                cellRenderer={({ cellData }) => (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.511"
                      height="11.514"
                      viewBox="0 0 11.511 11.514"
                      className="bitcoin-icon"
                    >
                      <path
                        fill="#fec41c"
                        d="M11.342,7.149A5.754,5.754,0,1,1,7.15.171a5.753,5.753,0,0,1,4.192,6.978ZM8.3,4.936c.115-.763-.467-1.175-1.266-1.454L7.288,2.45l-.631-.158L6.405,3.3c-.166-.042-.338-.08-.51-.12l.252-1.02L5.514,2,5.255,3.043c-.137-.032-.271-.063-.4-.1l-.871-.216-.168.675s.468.108.458.113a.337.337,0,0,1,.3.367l-.709,2.84a.237.237,0,0,1-.295.151c.007.01-.461-.115-.461-.115l-.317.724.82.2.446.116L3.793,8.857l.633.157.259-1.041c.173.048.338.091.5.131L4.945,9.137l.633.158L5.84,8.245c1.075.2,1.885.123,2.226-.851a1.11,1.11,0,0,0-.584-1.533,1.009,1.009,0,0,0,.806-.926h0ZM6.851,6.961c-.194.787-1.514.36-1.943.254l.345-1.391c.43.11,1.8.321,1.6,1.137Zm.2-2.034c-.177.715-1.277.353-1.633.264l.314-1.266c.357.086,1.5.251,1.319,1v0Z"
                        transform="translate(-0.003 0.001)"
                      />
                    </svg>
                    {cellData / 1000}
                  </>
                )}
              />
              <Column
                width={200}
                label="MULTIPLIER"
                dataKey="payout"
                cellRenderer={({ cellData }) => <>{cellData / 4}</>}
              />
              <Column
                width={100}
                label="PROFIT"
                dataKey="profit"
                cellRenderer={({ cellData }) => (
                  <span
                    className={cellData / 1000 > 0 ? "text-green" : "text-red"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.511"
                      height="11.514"
                      viewBox="0 0 11.511 11.514"
                      className="bitcoin-icon"
                    >
                      <path
                        fill="#fec41c"
                        d="M11.342,7.149A5.754,5.754,0,1,1,7.15.171a5.753,5.753,0,0,1,4.192,6.978ZM8.3,4.936c.115-.763-.467-1.175-1.266-1.454L7.288,2.45l-.631-.158L6.405,3.3c-.166-.042-.338-.08-.51-.12l.252-1.02L5.514,2,5.255,3.043c-.137-.032-.271-.063-.4-.1l-.871-.216-.168.675s.468.108.458.113a.337.337,0,0,1,.3.367l-.709,2.84a.237.237,0,0,1-.295.151c.007.01-.461-.115-.461-.115l-.317.724.82.2.446.116L3.793,8.857l.633.157.259-1.041c.173.048.338.091.5.131L4.945,9.137l.633.158L5.84,8.245c1.075.2,1.885.123,2.226-.851a1.11,1.11,0,0,0-.584-1.533,1.009,1.009,0,0,0,.806-.926h0ZM6.851,6.961c-.194.787-1.514.36-1.943.254l.345-1.391c.43.11,1.8.321,1.6,1.137Zm.2-2.034c-.177.715-1.277.353-1.633.264l.314-1.266c.357.086,1.5.251,1.319,1v0Z"
                        transform="translate(-0.003 0.001)"
                      />
                    </svg>
                    {cellData / 1000}
                  </span>
                )}
              />
            </Table>
          </TableWrapper>
        </Section>
        <Section className="dFlex justify-content-center align-items-center">
          <SvgContent>
            <div className="box">
              <a onClick={modalHandle}>
                <span className="bottom">
                  <span className="upper"></span>
                </span>
              </a>
            </div>
          </SvgContent>
        </Section>
      </Pagecontent>
      <Modal className={modalVisibility && "is-visible"}>
        {/* Modal Content */}
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={modalHandle}>
              &times;
            </span>
            <h2 className="modal-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="30.046"
                viewBox="0 0 35 30.046"
              >
                <g transform="translate(0 -2.477)">
                  <path
                    fill="#fff"
                    d="M34.68,29.133,19.424,3.57a2.24,2.24,0,0,0-3.848,0L.32,29.133a2.242,2.242,0,0,0,1.925,3.39h30.51A2.242,2.242,0,0,0,34.68,29.133ZM17.5,31.183a2.123,2.123,0,1,1,2.123-2.124A2.123,2.123,0,0,1,17.5,31.183Zm2.115-7.974a1.683,1.683,0,0,1-1.68,1.575h-.87a1.683,1.683,0,0,1-1.68-1.575L14.6,11.1a1.684,1.684,0,0,1,1.68-1.793h2.446A1.684,1.684,0,0,1,20.4,11.1Z"
                  />
                </g>
              </svg>{" "}
              CONFIRM
            </h2>
          </div>
          <div className="modal-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PageContent;
