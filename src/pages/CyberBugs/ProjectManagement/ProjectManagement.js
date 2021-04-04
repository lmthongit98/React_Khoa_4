import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import ReactHtmlParser from "react-html-parser";
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import FormEditProject from '../../../components/Forms/FromEditProject';
import LoadingComponent from '../../../components/GlobalSetting/LoadingComponent/LoadingComponent';


export default function ProjectManagement(props) {

    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);

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
                    <button className="btn btn-danger">
                        <DeleteOutlined style={{ fontSize: 17 }} />
                    </button>
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
            <LoadingComponent/>
        </div>
    )
}