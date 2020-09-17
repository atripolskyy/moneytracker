import React, { Component } from 'react';

import s from './components/WrapperBlock/WrapperBlock.module.scss';

import HeaderBlock from './components/HeaderBlock/index';
import SidebarBlock from './components/SidebarBlock/index';
import ContentBlock from './components/ContentBlock/index';

const dataList = [
  {
    total: 13,
    category: 1,
    description: 'Dinner',
    date: '08/02/2020',
    id: 1,
  },
  {
    total: 110,
    category: 2,
    description: 'team building',
    date: '31/01/2019',
    id: 2,
  },
  {
    total: 1000,
    category: 3,
    description: 'tickets',
    date: '05/08/2020',
    id: 3,
  },
  {
    total: 400,
    category: 1,
    description: 'cafe',
    date: '11/01/2020',
    id: 4,
  },
];

class App extends Component {
  state = {
    dataArr: dataList,
    isActiveMoneyForm: false,
    order: 'asc',
    sortedBy: 'id',
    // editMoneyId: null,
  }

  handleShowMoneyForm = () => {
    //console.log('id: ', id);

    this.setState( state => {
      return {
        isActiveMoneyForm: !state.isActiveMoneyForm,
        // editMoneyId: id,
      }
    });
  }

  handleAddMoney = (id = null, total, category, description, date) => {
    const lastDataArrId = this.state.dataArr[this.state.dataArr.length - 1].id;

    // console.log(lastDataArrId);

    const newValue = {
      total,
      category,
      description,
      date,
      id: (id !== null) ? id : lastDataArrId + 1,
    };

    if (id !== null) {
      this.setState( ({dataArr, isActiveMoneyForm}) => {
        const idx = dataArr.findIndex( item => item.id === id);

        dataArr[idx] = newValue;

        return {
          isActiveMoneyForm: !isActiveMoneyForm,
        }
      });
    } else {
      this.setState( ({dataArr, isActiveMoneyForm}) => {
        const newDataArr = [
          ...dataArr,
          newValue,
        ];
        return {
          dataArr: newDataArr,
          isActiveMoneyForm: !isActiveMoneyForm,
        }
      });
    }

    // console.log(date);
  }

  handleDeleteMoney = id => {
    console.log('delete money, id: ', id);

    this.setState( ({dataArr}) => {
      const idx = dataArr.findIndex( item => item.id === id);

      const newDataArr = [
        ...dataArr.slice(0, idx),
        ...dataArr.slice(idx + 1),
      ];
      return {
        dataArr: newDataArr,
      }
    });
  }

  handleSortTable = sortField => {
    this.setState( ({dataArr}) => {
      const dataToSort = this.state.dataArr.concat();
      console.log(dataToSort);
      const sortOrder = (this.state.order === 'asc') ? 'desc' : 'asc';

      const sortedData = dataToSort.sort(function(prev, next) {
        console.log(sortOrder);
        switch(sortOrder){
          case 'asc':
            if (prev[sortField] > next[sortField]) return 1;
            if (prev[sortField] == next[sortField]) return 0;
            if (prev[sortField] < next[sortField]) return -1;
            break;
          case 'desc':
            if (prev[sortField] < next[sortField]) return 1;
            if (prev[sortField] == next[sortField]) return 0;
            if (prev[sortField] > next[sortField]) return -1;
            break;
          default:
            console.log('default');
        }
        
      });
      return {
      dataArr: sortedData,
      order: sortOrder,
      sortedBy: sortField,
      }
    }
    );
  }

  render() {
    const { dataArr, isActiveMoneyForm } = this.state;

    return (
      <div className={s.wrapper}>
        <HeaderBlock />
        <SidebarBlock />
        <ContentBlock
          onAddMoney={this.handleAddMoney}
          onDeleteMoney={this.handleDeleteMoney}
          onShowMoneyForm={this.handleShowMoneyForm}
          isActiveMoneyForm={isActiveMoneyForm}
          // editMoneyId={editMoneyId}
          item={dataArr}
          onSort={this.handleSortTable}
        />
      </div>
    );
  }
}

export default App;
