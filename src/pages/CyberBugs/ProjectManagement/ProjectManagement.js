import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, Avatar, Popover, AutoComplete } from 'antd';
import ReactHtmlParser from "react-html-parser";
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import FormEditProject from '../../../components/Forms/FromEditProject';
import LoadingComponent from '../../../components/GlobalSetting/LoadingComponent/LoadingComponent';
import { Popconfirm, message } from 'antd';


export default function ProjectManagement(props) {

    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);

    const userSearch = useSelector(state => state.UserCyberBugsReducer.userSearch);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_LIST_PROJECT_SAGA'
        })
    }, [])

    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (nextItem, item) => nextItem.id - item.id,
            sortDirections: ['descend'], //giam dan

        },
        {
            title: 'projectName',
            dataIndex: 'projectName',
            key: 'projectName',
            sorter: (nextItem, item) => {
                if (nextItem.projectName?.trim().toLowerCase() < item.projectName?.trim().toLowerCase()) {
                    return -1;
                }
                return 1;
            },
        },
        // {
        //     title: 'description',
        //     dataIndex: 'description',
        //     // key: 'description',
        //     render: (text, record, index) => {
        //         let contentJSX = ReactHtmlParser(text);

        //         return <div>
        //             {contentJSX}
        //         </div>
        //     }
        // },
        {
            title: 'category',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'creator',
            dataIndex: 'creator',
            // key: 'categoryName',
            render: (text, record, index) => {
                return <Tag color="green">{text?.name}</Tag>
            }
        },
        {
            title: 'member',
            key: 'member',
            render: (text, record, index) => {
                return <div>
                    {
                        record.members?.slice(0, 3).map((member, index) => {

                            return <Popover key={index} placement="top" title={"Member"} content={() => {
                                return <table className="table">
                                    <thead>
                                       <tr>
                                       <th>Id</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th></th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                        {record.members?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.userId}</td>
                                                <td><img src={item.avatar} style={{ borderRadius: '15px' }} width="30" height="30" alt="avt" /></td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <button onClick= {() => {
                                                        console.log("ahihi")
                                                        dispatch({
                                                            type: 'REMOVE_USER_PROJECT_API',
                                                            userProject: {userId: item.userId, projectId: record.id}
                                                        })
                                                    }} className="btn btn-danger">
                                                        <DeleteOutlined style={{ fontSize: 17 }} />
                                                    </button>
                                                </td>

                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            }}>
                                <Avatar key={index} src={member.avatar} />
                            </Popover>
                        })

                    }
                    {record.members.length > 3 ? <Avatar>...</Avatar> : ''}
                    <Popover placement="topLeft" title={"Add user"} content={() => {
                        return <AutoComplete
                            options={userSearch?.map((user, index) => {
                                return { label: user.name, value: user.userId.toString() }
                            })}

                            value={value}

                            onChange={text => {
                                //set value cua autoComplete khi nguoi dung nhap du lieu
                                setValue(text);
                            }}

                            onSelect={(selectedValue, option) => {

                                //set value cua autoComplete = option.lable
                                setValue(option.label);

                                //Goi api gui ve backend
                                dispatch({
                                    type: 'ADD_USER_PROJECT_API',
                                    userProject: {
                                        "projectId": record.id,
                                        "userId": selectedValue
                                    }
                                })

                                // console.log('userId', value)
                                // console.log('option', option)
                            }}
                            style={{ width: '100%' }} onSearch={(keyWord) => {
                                // console.log(keyWord)
                                dispatch({
                                    type: 'GET_USER_API',
                                    keyWord
                                })
                            }} />
                    }} >
                        <Button>+</Button>
                    </Popover>
                </div>
            },
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button onClick={() => {
                        //dispatch mo drawer va truyen component
                        dispatch({
                            type: 'OPEN_FORM_EDIT_PROJECT',
                            Component: <FormEditProject />,
                        })
                        //dispatch goi api lay du lieu dong hien tai
                        dispatch({
                            type: 'EDIT_PROJECT',
                            projectEdit: record
                        })
                    }} className="btn mr-2 btn-primary">
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={(e) => {
                            dispatch({
                                type: 'DELETE_PROJECT_SAGA',
                                projectId: record.id
                            })
                        }}
                        okText="Yes"
                        cancelText="No"

                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>


                </div>
            },
        }

    ];
    return (
        <div className="container-fluid mt-5">
            <h3>Project management</h3>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
            <LoadingComponent />
        </div>
    )
}