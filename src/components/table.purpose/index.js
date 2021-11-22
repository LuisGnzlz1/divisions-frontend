import React, {useEffect, useState} from 'react'
import {Table, Input, Radio } from "antd";
import { PlusCircleFilled } from '@ant-design/icons';
import {TableArrayFilter} from "../../utils/table.util";
import './style.less';

const TableFilter = ({ dt, setDt }) => {
  const { Search } = Input

  const onFilterTable = (value) => {
    if (value && value.length >= 2) {
      const filteredData = TableArrayFilter([...dt], value)
      setDt(filteredData)
      return
    }
    setDt([...dt])
  }

  return (
      <Search
          onSearch={onFilterTable}
          placeholder="Buscar"
          style={{ width: 250 }}
          allowClear
      />
  )
}

export const TablePurpose = ({ loading, data }) => {

  const [dt, setDt] = useState([])

  const populateFilter = (column) => {
    let arrayResult = data.reduce((result, object) => {
      if(object[column]){
        result.push({
          text: object[column],
          value: object[column],
        })
      }
      return result
    }, [])
    return arrayResult.filter((v,i,a)=>a.findIndex(t=>(t.text === v.text && t.value===v.value))===i)
  }


  const columns = [
    {
      title: 'Division',
      dataIndex: 'name',
      key: 'name',
      sorter: (recordA, recordB) => recordA.name > recordB.name,
      filters: populateFilter('name'),
      onFilter: (value, record) => record.name === value
    },
    {
      title: 'Division Superior',
      dataIndex: 'parent_division_name',
      key: 'parent_division_name',
      render: name => name ? name : '-',
      sorter: (recordA, recordB) => recordA.parent_division_name > recordB.parent_division_name,
      filters: populateFilter('parent_division_name'),
      onFilter: (value, record) => record.parent_division_name === value
    },
    {
      title: 'Colaboradores',
      dataIndex: 'collaborators',
      key: 'collaborators',
      sorter: (recordA, recordB) => recordA.collaborators > recordB.collaborators
    },
    {
      title: 'Nivel',
      dataIndex: 'level',
      key: 'level',
      sorter: (recordA, recordB) => recordA.level > recordB.level,
      filters: populateFilter('level'),
      onFilter: (value, record) => record.level === value
    },
    {
      title: 'Subdivisiones',
      dataIndex: 'subdivisions',
      key: 'subdivisions',
      render: sub => <>{sub.length ? <>{sub.length} <PlusCircleFilled style={{ fontSize: 18, color: '#1bc47d'}} /></> : '0'} </>,
      sorter: (recordA, recordB) => {
        const data1 = recordA.subdivisions
        const data2 =recordB.subdivisions
        return data1.length > data2.length
      }
    },
    {
      title: 'Embajador',
      dataIndex: 'ambassador',
      key: 'ambassador',
      render: ambassador => ambassador ? ambassador : '-',
    },
  ];

  useEffect(() => {
    if (Array.isArray(data)) setDt([...data])
  }, [data])

  return (
    <div>
      <div className="search-section">
        <Radio.Group value='listado' >
          <Radio.Button value="listado">Listado</Radio.Button>
          <Radio.Button value="arbol">Arbol</Radio.Button>
        </Radio.Group>
        <TableFilter setDt={setDt} dt={data} />
      </div>
      <Table
          rowSelection={{
            type: 'checkbox'
          }}
          loading={loading}
          columns={columns}
          dataSource={dt}
          pagination={{
            pageSize: 4,
          }}
      />
    </div>
  )
}