import React ,{ useEffect, useState } from "react";
import {Routes , Route } from "react-router-dom";
import { Radio, Space, Table, Tag,DatePicker,MenuProps,Dropdown, Select  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from "axios";










interface DataType {
    key: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
    status: string;
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="data-sort-container">
            <div className="sort-header-container">
            <p className="sort-header-text"> Organization</p>
            </div>
            <Select
    defaultValue="Select"
    style={{ width: 200 }}
   
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
   <div className="sort-header-container">
            <p className="sort-header-text"> User</p>
            </div>
            <Select
    defaultValue="User"
    style={{ width: 200 }}
   
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
   <div className="sort-header-container">
            <p className="sort-header-text"> Email</p>
            </div>
            <Select
    defaultValue="Email"
    style={{ width: 200 }}
   
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
   <div className="sort-header-container">
            <p className="sort-header-text"> Date</p>
            </div>
            <DatePicker style={{ width: 200 }}/>

            <div className="sort-header-container">
            <p className="sort-header-text"> Phone Number</p>
            </div>
            <Select
    defaultValue="Phone Number"
    style={{ width: 200 }}
   
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
     <div className="sort-header-container">
            <p className="sort-header-text"> Status</p>
            </div>
            <Select
    defaultValue="Select"
    style={{ width: 200 }}
   
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
  <div className="btn-container">
    <button className="btn-reset">Reset</button>
    <button className="btn-filter">Filter</button>
  </div>
           

            
        </div>
      ),
    },
    
  ];
  
  const datas: DataType[] = [
    {
      key: '1',
      orgName: 'Lendsqr',
      userName: "Wilburn.Rice",
      email: 'New York No. 1 Lake Park',
      phoneNumber: "494-278-0946",
      createdAt: "2072-12-27T03:44:22.522Z",
      status: 'blacklisted'
    },
    {
      key: '2',
      orgName: 'Irorun',
      userName: "Jaycee15",
      email: 'London No. 1 Lake Park',
      phoneNumber: "494-278-0946",
      createdAt: "2072-12-27T03:44:22.522Z",
      status: 'inactive',
    },
    {
      key: '3',
      orgName: 'Lendsqr',
      userName: "Haylee19",
      email: 'Sidney No. 1 Lake Park',
      phoneNumber: "494-278-0946",
      createdAt: "2072-12-27T03:44:22.522Z",
      status: 'pending',
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <div className="table-header-container">
          <span>ORGANIZATION</span>{" "}
          <div className="header-icon-container">
          <Dropdown  className="header-dropdown" menu={{ items }}  trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
          <img
              className="icon sort-icon"
              src="/icons/sort.svg"
              width="16"
              height="10"
            />
      
    </a>
          </Dropdown>
          </div>
        </div>
      ),
      dataIndex: "orgName",
      key: "orgName",
    },
    {
      title: (
        <div className="table-header-container">
          <span>USERNAME</span>{" "}
          <div className="header-icon-container">
          <img
              className="icon sort-icon"
              src="/icons/sort.svg"
              width="16"
              height="10"
            />
         
           
          </div>{" "}
        </div>
      ),
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: (
        <div className="table-header-container">
          <span>EMAIL</span>{" "}
          <div className="header-icon-container">
            <img
              className="icon sort-icon"
              src="/icons/sort.svg"
              width="16"
              height="10"
            />
          </div>{" "}
        </div>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div className="table-header-container">
          <span>PHONE N0.</span>{" "}
          <div className="header-icon-container">
            <img
              className="icon sort-icon"
              src="/icons/sort.svg"
              width="16"
              height="10"
            />
          </div>{" "}
        </div>
      ),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: (
        <div className="table-header-container">
          <span>DATE JOINED</span>{" "}
          <div className="header-icon-container">
            <img
              className="icon sort-icon"
              src="/icons/sort.svg"
              width="16"
              height="10"
            />
          </div>{" "}
        </div>
      ),
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
        title: (
          <div className="table-header-container">
            <span>STATUS</span>{" "}
            <div className="header-icon-container">
              <img
                className="icon sort-icon"
                src="/icons/sort.svg"
                width="16"
                height="10"
              />
            </div>{" "}
          </div>
        ),
        dataIndex: "status",
        key: "status",
      },
    // {
    //   title: (
    //     <div className="table-header-container">
    //       <span>STATUS</span>{" "}
    //       <div className="header-icon-container">
    //         <img
    //           className="icon sort-icon"
    //           src="/icons/sort.svg"
    //           width="16"
    //           height="10"
    //         />
    //       </div>{" "}
    //     </div>
    //   ),
    //   key: "status",
    //   dataIndex: "phoneNumber",
    //   render: (status: string[]) => (
    //     <span>
    //       {status.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag}
    //           </Tag>
    //         );
    //       })}
    //     </span>
    //   ),
    // },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <img className="icon" src="/icons/more.svg" width="20" height="20" />
        </Space>
      ),
    },
   
  ];
 

function Users() {
   
    const [ data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
          .then((res) => res.json())
          .then(( results ) => {
         //  return  console.log(results)
           setData(results);
            setLoading(false);
           
          });
      };

    // const fetchData = async () =>{
    //     setLoading(true);
    //     try{
    //         const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    //         return  setData(response.data) 
    //     } catch(error){
    //         console.log(error)
    //     }
      
    // }

    useEffect(() =>{
        // fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        // .then(res => res.json())
        // .then(result => {
        //  //console.log (result)
        //  setData(result)
        // })
        fetchData();
      

    }, []);
   // console.log(datalog);

   
    
  

   
   
    return (
      <div>
      <div className="users-container">
        <h3 className="users-text">Users</h3>
        <div className="users-card-container">
        <div className="row gy-5">
        <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
            <div className="all-users-container ">
                <div className="card-content-container">
                <div className="img-container">
            <img
              className="icon"
              src="/icons/user.svg"
              width="20"
              height="20"
            />

            </div>
            <div className="card-text">
                USERS
            </div>
            <h3 className="total">2,453</h3>

                </div>
                

            </div>
        </div>
        <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-3">
        <div className="active-users-container ">
        <div className="card-content-container">
        <div className="img-container">
            <img
              className="icon"
              src="/icons/user-active.svg"
              width="20"
              height="20"
            />

            </div>
            <div className="card-text">
               ACTIVE USERS
            </div>
            <h3 className="total">2,453</h3>

                </div>

            </div>
        </div>
        <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
        <div className="loan-users-container ">
        <div className="card-content-container">
            <div className="img-container">
            <img
              className="icon"
              src="/icons/user-loan.svg"
              width="20"
              height="20"
            />

            </div>
            <div className="card-text">
                USER WITH LOANS
            </div>
            <h3 className="total">12,453</h3>
                   

                </div>

            </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3  ">
        <div className="savings-users-container ">
        <div className="card-content-container">
        <div className="img-container">
            <img
              className="icon"
              src="/icons/user-savings.svg"
              width="20"
              height="20"
            />

            </div>
            <div className="card-text">
                USERS WITH SAVINGS
            </div>
            <h3 className="total">102,453</h3>

                </div>

            </div>
        </div>
        </div>
        </div>
        <Table columns={columns}  dataSource={data}   loading={loading} rowKey={(record) => record.key} scroll={{ x: 0 }}/>
      </div>

  
          
      </div>
    )
  }
  export default  Users;