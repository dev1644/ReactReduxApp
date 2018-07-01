import React, { Component } from "react";
import { Breadcrumb, Menu, Pagination, DatePicker } from "antd";
import moment from "moment";
import { DataTable } from "primereact/components/datatable/DataTable";
import { connect } from "react-redux";
import { Column } from "primereact/components/column/Column";
import { InputText } from "primereact/components/inputtext/InputText";
import { GET_USER_LIST_DETAILS_REQUEST } from "../actions/types";



class UserListTable extends Component {
  state = {
    page: 1,
    limit: 10,
  };
  render() {
    
  
    return (
      <div>
       
        <div className="depositncredit-table-operations">
          <span onClick={this.clearAll} id="resetText">
            Reset Filter
          </span>
          <span id="showText">Show</span>
          <span id="selecNos">
            <select
              id="NoDropDown"
             
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </span>
        </div>
        <DataTable
          columnResizeMode="expand"
          value={banklist}
          resizableColumns={true}
          loading={fetching}
          loadingIcon="fas fa-spinner"
          scrollHeight={"51vh"}
          ref={el => {
            this.dt = el;
          }}
          scrollable={true}
        >
          <Column
            field="index"
            header="S.No"
            filter={true}
            filterElement={SNoFilter}
            style={{ width: "50px", textAlign: "right", textAlign: "left" }}
          />
          <Column
            field="_id"
            header="Bank ID"
            filterElement={bankIdFilter}
            filter={true}
            style={{ width: "45px" }}
            className="BankId"
          />
          <Column
            field="picture"
            body={this.image}
            filter={true}
            filterElement={ImageFilter}
            header="Image"
            style={{ width: "100px", textAlign: "center" }}
            className="Image"
          />
          <Column
            field="bankName"
            header="Bank Name"
            filter={true}
            filterElement={bankNameFilter}
            style={{ width: "200px" }}
            className="bankName"
          />
          <Column
            field="bankShortName"
            header="Short Name"
            filter={true}
            filterElement={shortNameFilter}
            style={{ width: "90px", textAlign: "center" }}
            className="ShortName"
          />
          <Column
            field="createdAt"
            header="Created Date"
            body={this.createdAt}
            filterElement={createdDateFilter}
            filter={true}
            style={{ width: "90px", textAlign: "center" }}
            className="CreatedDate"
          />
          <Column
            field="CreatedBy"
            header="Created By"
            body={this.userNameTemplate}
            filter={true}
            filterElement={createdByFilter}
            filter={true}
            style={{ width: "120px", textAlign: "left" }}
            className="CreatedBy"
          />
          <Column
            field="status"
            header="Status"
            body={this.status}
            style={{ width: "120px", textAlign: "left", overflowX: "visible" }}
            filter={true}
            filterElement={statusFilter}
          />
        </DataTable>
       
        <Pagination
          defaultCurrent={0}
          pageSize={this.state.limit}
          total={
            fetching == true
              ? 1
              : (this.props.state.banklist &&
                  this.props.state.banklist.totalPages) * this.state.limit
          }
          onChange={current => {
            this.onPageChange(current), this.setState({ page: current });
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    fetching: state.fetching,
    banklist: state.banklist
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestData: data =>
      dispatch({ type: GET_USER_LIST_DETAILS_REQUEST, data }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListTable);
