import React, { useEffect, useState } from "react";
import FormPDFGenerator from "../PDF/ShowPDFData";
import { URL } from "../../env";
import axios from "axios";
import { Button, Card } from "antd";

export const Analytics = () => {
  const [data, setdata] = useState([]);
  const [currData, setcurrData] = useState({});

  const [showForm, setshowForm] = useState(false);
  useEffect(() => {
    axios
      .get(URL + "/form")
      .then((res) => {
        console.log(res);
        let personalData = res.data.map((d) => ({
          ...{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          },
          ...d.personalInfo,
        }));
        setdata(res.data && res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  return (
    <div>
      {showForm ? (
        <div>
          <div
            className="p-5"
            onClick={() => {
              //   setcurrData({});
              setshowForm(false);
            }}
          >
            <Button>Go Back</Button>{" "}
          </div>
          <FormPDFGenerator data={currData} />
        </div>
      ) : (
        <>
          {data.map((userData) => (
            <Card className="cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <div>{userData?.personalInfo?.firstName || "Empty"}</div>

                  <p>
                    <strong>Last Name:</strong>{" "}
                    {userData.personalInfo?.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.personalInfo?.email}
                  </p>
                  <p>
                    <strong>Phone Number:</strong>{" "}
                    {userData.personalInfo?.phoneNumber}
                  </p>
                </div>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setcurrData(userData);
                      setshowForm(true);
                    }}
                  >
                    View Data
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};