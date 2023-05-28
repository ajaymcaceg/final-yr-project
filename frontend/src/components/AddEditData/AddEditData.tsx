import { RadioChangeEvent, message } from "antd";
import { Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import { PersonalInformation } from "../TabView/PersonalInformation/PersonalInformation";
import { Education } from "../TabView/Education/Education";
import Experience from "../TabView/Experience/Experience";
import Designation from "../TabView/Designation/Designation";
import FacultyPublication from "../TabView/FacultyPublication/FacultyPublication";
import ResearchProject from "../TabView/ResearchProjects/ResearchProjects";
import AwardsRecognition from "../TabView/AwardsRecognition/AwardsRecognition";
import EContent from "../TabView/EContent/EContent";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { URL } from "../../env";
import { validateForm } from "../../utils/validator";
import { sampleData } from "../../constants/data";
import axios from "axios";
const { TabPane } = Tabs;

type TabPosition = "left" | "right" | "top" | "bottom";

export const AddEditData = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const [activeKey, setActiveKey] = useState("PersonalInfo");
  const [formData, setFormData] = useState({});
  const changeTabPosition = (e: RadioChangeEvent) => {};
  const dispatch = useAppDispatch();
  const onSave = (val: any) => {
    console.log(val, URL);
    // axios
    //   .post(URL, sampleData)
    //   .then((res) => {
    //     console.log(res);
    //     message.success("Data saved successfully !!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setFormData((data) => ({ ...data, ...val }));
  };

  const onSubmit = (val: any) => {
    let data: any = {};
    if (validateForm({ ...formData, ...val })) {
      dispatch({
        type: "api/apiRequestBegan",
        payload: {
          baseURL: URL,
          url: "/form",
          data: { ...formData, ...val },
          method: "post",
          // onSuccess: "/updateSettings",
          onError: "api/apiRequestFailed",
        },
      });
    } else {
    }
  };
  return (
    <div className="p-5">
      <Tabs
        tabPosition="left"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
      >
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "PersonalInfo" ? "bg-white" : ""
                }`}
              >
                Personal Information
              </div>
            </>
          }
          key="PersonalInfo"
        >
          <PersonalInformation
            onSubmit={onSave}
            nextTab={"Education"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "Education" ? "bg-white" : ""
                }`}
              >
                Education
              </div>
            </>
          }
          key="Education"
        >
          <Education
            onSubmit={onSave}
            nextTab={"Experience"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "Experience" ? "bg-white" : ""
                }`}
              >
                Experience
              </div>
            </>
          }
          key="Experience"
        >
          <Experience
            onSubmit={onSave}
            nextTab={"Designation"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "Designation" ? "bg-white" : ""
                }`}
              >
                Designation
              </div>
            </>
          }
          key="Designation"
        >
          <Designation
            onSubmit={onSave}
            nextTab={"FacultyPublication"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "FacultyPublication" ? "bg-white" : ""
                }`}
              >
                Faculty Publication
              </div>
            </>
          }
          key="FacultyPublication"
        >
          <FacultyPublication
            onSubmit={onSave}
            nextTab={"ResearchProjects"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "ResearchProjects" ? "bg-white" : ""
                }`}
              >
                Research Projects
              </div>
            </>
          }
          key="ResearchProjects"
        >
          <ResearchProject
            onSubmit={onSave}
            nextTab={"AwardsANDRecognition"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "AwardsANDRecognition" ? "bg-white" : ""
                }`}
              >
                Awards & Recognition
              </div>
            </>
          }
          key="AwardsANDRecognition"
        >
          <AwardsRecognition
            onSubmit={onSave}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane
          tab={
            <>
              <div
                className={`text-base font-bold  p-2 text-black rounded-lg  px-3 w-[200px] ${
                  activeKey == "EContent" ? "bg-white" : ""
                }`}
              >
                E-content
              </div>
            </>
          }
          key="EContent"
        >
          <EContent
            onSubmit={onSubmit}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};
