import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";

import axios from "axios";
import { URL } from "../env";
import { AwardsGraph } from "../components/Analytics/AwardsGraph";
Chart.register(...registerables);
export const AnalyticsView = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(URL + "/form")
      .then((res) => {
        console.log(res.data);

        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  return (
    <div className="p-4">
      <AwardsGraph
        data={data.map((d) => ({
          userName: d?.personalInfo?.firstName || "No name",
          awardsCount: d?.awardsRecognition?.length,
        }))}
      />
    </div>
  );
};
