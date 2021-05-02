/* eslint-disable no-multi-str */
import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Select, Slider } from 'antd';
import { GET_ALL_PROJECT_SAGA } from '../../redux/constants/Cyberbugs/ProjectCyberBugsContants';
import { GET_ALL_TASK_TYPE_SAGA } from '../../redux/constants/Cyberbugs/TaskTypeConstants';
import { GET_ALL_PRIORITY_SAGA } from '../../redux/constants/Cyberbugs/PriorityConstants';

export default function FormCreateTask(props) {
    const dispatch = useDispatch();

    //Lay du lieu tu redux
    const {arrProject} = useSelector(state => state.ProjectCyberBugsReducer);
    const {arrTaskType} = useSelector(state => state.TaskTypeReducer);  
    const {arrPriority} = useSelector(state => state.PriorityReducer);

    const { Option } = Select;

    const [timeTracking, setTimeTracking] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    })

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    //hook
    useEffect(() => {
        dispatch({
            type: GET_ALL_PROJECT_SAGA
        });
        dispatch({
            type: GET_ALL_TASK_TYPE_SAGA
        });
        dispatch({
            type: GET_ALL_PRIORITY_SAGA
        })
    }, [])

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,

    } = props;

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content)
    }

    return (
        <div className="container">
            <div className="form-group">
                <p>Project</p>
                <select name="projectId" className="form-control">
                    {
                        arrProject.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>{item.projectName}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                        <p>Priority</p>
                        <select name="priorityId" className="form-control">
                            {
                                arrPriority.map((item, index) => {
                                    return (
                                        <option key={index} value={item.priorityId}>
                                            {item.priority}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-6">
                        <p>Task type</p>
                        <select className="form-control" name="typeId">                      
                            {
                                arrTaskType.map((item, index) => {
                                    return (
                                        <option key={index} value={item.id}>{item.taskType}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                        <p>Assignees</p>
                        <Select
                            mode="tags"
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            // onChange={handleChange}
                            style={{ width: '100%' }}
                        >
                            {children}
                        </Select>
                        <div className="row">
                            <div className="col-12">
                                <p>Original Estimate</p>
                                <input type="number" min="0" name="originalEstimate" defaultValue="0" className="form-control" height="30" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <p>Time tracking</p>
                        <Slider value={timeTracking.timeTrackingSpent} max={Number(timeTracking.timeTrackingSpent) + Number(timeTracking.timeTrackingRemaining)} />
                        <div className="row">
                            <div className="col-6 text-left">
                                <span className="font-weight-bold">{timeTracking.timeTrackingSpent}h</span> logged
                            </div>
                            <div className="col-6 text-right">
                                <span className="font-weight-bold">{timeTracking.timeTrackingRemaining}h</span> remaining
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Time spent</p>
                                <input type="number" defaultValue="0" min="0" className="form-control" name="timeTrackingSpent" onChange={(e) => {
                                    setTimeTracking({
                                        ...timeTracking,
                                        timeTrackingSpent: e.target.value
                                    })
                                }} />
                            </div>
                            <div className="col-6">
                                <p>Time remaining</p>
                                <input type="number" defaultValue="0" min="0" className="form-control" name="timeTrackingRemaining" onChange={(e) => {
                                    setTimeTracking({
                                        ...timeTracking,
                                        timeTrackingRemaining: e.target.value
                                    })
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <p>Description</p>
                <Editor

                    name="description"
                    // initialValue={values.description}
                    init={{
                        selector: 'textarea#myTextArea',

                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={handleEditorChange}
                />
            </div>
        </div>
    )
}
