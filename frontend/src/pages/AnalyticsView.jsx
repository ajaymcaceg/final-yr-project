import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";

import axios from "axios";
import { URL } from "../env";
import { AwardsGraph } from "../components/Analytics/AwardsGraph";
import FacultyPerformance from "../components/Analytics/FacultyPerformance";
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
      <FacultyPerformance
        data={data.map((d) => ({
          name:
            d?.personalInfo?.firstName + " " + d?.personalInfo?.lastName ||
            "No name",
          ar: d?.awardsRecognition?.length,
          fp: d?.facultyPublication?.length,
          rp: d.researchProjects.length,
        }))}
      />

      <div className="mt-5">
        <AwardsGraph
          data={data.map((d) => ({
            userName: d?.personalInfo?.firstName || "No name",
            awardsCount: d?.awardsRecognition?.length,
          }))}
        />
      </div>
    </div>
  );
};
