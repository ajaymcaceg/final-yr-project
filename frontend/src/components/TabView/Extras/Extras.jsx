import React from 'react'
import TeacherForm from './Teacher/TeacherForm'
import FellowshipForm from './Fellowship/FellowshipForm'
import PhdInput from './PhdScholar/PhdInput'
import WorkshopForm from './Workshop/WorkShopInput'
import { Typography } from 'antd'
import AwardForm from './Awards/AwardForm'
import PatentForm from './Patents/PatentsInput'
import FellowshipForm2 from './Fellowship/FellowshipForm2'

export const Extras = ({ onSubmit, nextTab, setActiveKey,formData }) => {
  return (
    <div className='h-[80vh] overflow-y-scroll'>
      <Typography.Title level={4}>Workshop</Typography.Title>
        <WorkshopForm formData={formData}
            onSubmit={onSubmit}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}/>

      <Typography.Title level={4}>Award</Typography.Title>
            <AwardForm onSubmit={onSubmit}
                  nextTab={"EContent"}
                  setActiveKey={setActiveKey}
                  formData={formData}
                  />

      <Typography.Title level={4}>Patents</Typography.Title>
            <PatentForm onSubmit={onSubmit}
                  nextTab={"EContent"}
                  setActiveKey={setActiveKey}
                  formData={formData}
                  />
      <Typography.Title level={4}>Research Funding for Teachers</Typography.Title>

      <TeacherForm  onSubmit={onSubmit}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}
            formData={formData}
            />
      <Typography.Title level={4}>Research Fellowship Awards</Typography.Title>

            <FellowshipForm
            formData={formData}
            onSubmit={onSubmit}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}/>

<Typography.Title level={4}>Research Fellowship data</Typography.Title>

<FellowshipForm2
formData={formData}
onSubmit={onSubmit}
nextTab={"EContent"}
setActiveKey={setActiveKey}/>

<Typography.Title level={4}>PHD Scholar</Typography.Title>

            <PhdInput  formData={formData}
            onSubmit={onSubmit}
            nextTab={"EContent"}
            setActiveKey={setActiveKey}/>

          
    </div>
  )
}
