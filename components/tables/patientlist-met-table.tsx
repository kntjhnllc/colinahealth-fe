"use client";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/
// react-dropdown-menu";
import { FaEllipsisV } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
// import viewActionButton from "../buttons/viewActionButton";
// import GetPatientListComponent from "../../components/data/getPatientList-comp";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

const PatientLisMetTable: React.FC = () => {
  return (
    <>
      <div className="col-xl-8 mb-5 mb-xl-10">
        {/* <!--begin::Table Widget 4--> */}
        <div className="card card-flush h-xl-100">
          {/* <!--begin::Card header--> */}
          <div className="card-header pt-7">
            {/* <!--begin::Title--> */}
            <h3 className="card-title align-items-start flex-column">
              <span
                className="card-label fw-bold text-gray-800"
                //   >Product Orders</span
              />
              <span
                className="text-gray-500 mt-1 fw-semibold fs-6"
                //   >Avg. 57 orders per day</span
              />
            </h3>
            {/* <!--end::Title-->
                          <!--begin::Actions--> */}
            <div className="card-toolbar">
              {/* <!--begin::Filters--> */}
              <div className="d-flex flex-stack flex-wrap gap-4">
                {/* <!--begin::Destination--> */}
                <div className="d-flex align-items-center fw-bold">
                  {/* <!--begin::Label--> */}
                  <div className="text-gray-500 fs-7 me-2">Category</div>
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Select--> */}
                  <select
                    className="
                                    form-select form-select-transparent
                                    text-graY-800
                                    fs-base
                                    lh-1
                                    fw-bold
                                    py-0
                                    ps-3
                                    w-auto
                                  "
                    data-control="select2"
                    data-hide-search="true"
                    data-dropdown-css-className="w-150px"
                    data-placeholder="Select an option"
                  >
                    <option></option>
                    <option value="Show All">Show All Show All</option>
                    <option value="a">Category A</option>
                    <option value="b">Category A</option>
                  </select>
                  {/* <!--end::Select--> */}
                </div>
                {/* <!--end::Destination--> */}
                {/* <!--begin::Status--> */}
                <div className="d-flex align-items-center fw-bold">
                  {/* <!--begin::Label--> */}
                  <div className="text-gray-500 fs-7 me-2">Status</div>
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Select--> */}
                  <select
                    className="
                                    form-select form-select-transparent
                                    text-gray-900
                                    fs-7
                                    lh-1
                                    fw-bold
                                    py-0
                                    ps-3
                                    w-auto
                                  "
                    data-control="select2"
                    data-hide-search="true"
                    data-dropdown-css-className="w-150px"
                    data-placeholder="Select an option"
                    data-kt-table-widget-4="filter_status"
                  >
                    <option></option>
                    <option value="Show All">Show All Show All</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Pending">Pending</option>
                  </select>
                  {/* <!--end::Select--> */}
                </div>
                {/* <!--end::Status--> */}
                {/* <!--begin::Search--> */}
                <div className="position-relative my-1">
                  <i
                    className="
                                    ki-duotone ki-magnifier
                                    fs-2
                                    position-absolute
                                    top-50
                                    translate-middle-y
                                    ms-4
                                  "
                  >
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <input
                    type="text"
                    data-kt-table-widget-4="search"
                    className="form-control w-150px fs-7 ps-12"
                    placeholder="Search"
                  />
                </div>
                {/* <!--end::Search-->/ */}
              </div>
              {/* <!--begin::Filters--> */}
            </div>
            {/* <!--end::Actions--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body pt-2">
            {/* <!--begin::Table--> */}
            <table
              className="
                              table
                              align-middle
                              table-row-dashed
                              fs-6
                              gy-3
                            "
              id="kt_table_widget_4_table"
            >
              {/* <!--begin::Table head--> */}
              <thead>
                {/* <!--begin::Table row--> */}
                <tr
                  className="
                                  text-start text-gray-500
                                  fw-bold
                                  fs-7
                                  text-uppercase
                                  gs-0
                                "
                >
                  <th className="min-w-100px">Order ID</th>
                  <th className="text-end min-w-100px">Created</th>
                  <th className="text-end min-w-125px">Customer</th>
                  <th className="text-end min-w-100px">Total</th>
                  <th className="text-end min-w-100px">Profit</th>
                  <th className="text-end min-w-50px">Status</th>
                  <th className="text-end"></th>
                </tr>
                {/* <!--end::Table row--> */}
              </thead>
              {/* <!--end::Table head--> */}
              {/* <!--begin::Table body--> */}
              <tbody className="fw-bold text-gray-600">
                <tr
                  data-kt-table-widget-4="subtable_template"
                  className="d-none"
                >
                  <td colSpan={Number("2")}>
                    <div className="d-flex align-items-center gap-3">
                      <a
                        href="#"
                        className="
                                        symbol symbol-50px
                                        bg-secondary bg-opacity-25
                                        rounded
                                      "
                      >
                        <img
                          src=""
                          data-kt-src-path="assets/media/stock/ecommerce/"
                          alt=""
                          data-kt-table-widget-4="template_image"
                        />
                      </a>
                      <div className="d-flex flex-column text-muted">
                        <a
                          href="#"
                          className="
                                          text-gray-800 text-hover-primary
                                          fw-bold
                                        "
                          data-kt-table-widget-4="template_name"
                        >
                          Product name
                        </a>
                        <div
                          className="fs-7"
                          data-kt-table-widget-4="template_description"
                        >
                          Product description
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="text-gray-800 fs-7">Cost</div>
                    <div
                      className="text-muted fs-7 fw-bold"
                      data-kt-table-widget-4="template_cost"
                    >
                      1
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="text-gray-800 fs-7">Qty</div>
                    <div
                      className="text-muted fs-7 fw-bold"
                      data-kt-table-widget-4="template_qty"
                    >
                      1
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="text-gray-800 fs-7">Total</div>
                    <div
                      className="text-muted fs-7 fw-bold"
                      data-kt-table-widget-4="template_total"
                    >
                      name
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="text-gray-800 fs-7 me-3">On hand</div>
                    <div
                      className="text-muted fs-7 fw-bold"
                      data-kt-table-widget-4="template_stock"
                    >
                      32
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #XGY-346
                    </a>
                  </td>
                  <td className="text-end">7 min ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Albert Flores
                    </a>
                  </td>
                  <td className="text-end">$630.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$86.70</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-warning
                                    "
                    >
                      Pending
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #YHD-047
                    </a>
                  </td>
                  <td className="text-end">52 min ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Jenny Wilson
                    </a>
                  </td>
                  <td className="text-end">$25.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$4.20</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-primary
                                    "
                    >
                      Confirmed
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #SRR-678
                    </a>
                  </td>
                  <td className="text-end">1 hour ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Robert Fox
                    </a>
                  </td>
                  <td className="text-end">$1,630.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$203.90</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-warning
                                    "
                    >
                      Pending
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #PXF-534
                    </a>
                  </td>
                  <td className="text-end">3 hour ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Cody Fisher
                    </a>
                  </td>
                  <td className="text-end">$119.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$12.00</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-success
                                    "
                    >
                      Shipped
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #XGD-249
                    </a>
                  </td>
                  <td className="text-end">2 day ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Arlene McCoy
                    </a>
                  </td>
                  <td className="text-end">$660.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$52.26</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-success
                                    "
                    >
                      Shipped
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #SKP-035
                    </a>
                  </td>
                  <td className="text-end">2 day ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Eleanor Pena
                    </a>
                  </td>
                  <td className="text-end">$290.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$29.00</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-danger
                                    "
                    >
                      Rejected
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary"
                    >
                      #SKP-567
                    </a>
                  </td>
                  <td className="text-end">7 min ago</td>
                  <td className="text-end">
                    <a href="#" className="text-gray-600 text-hover-primary">
                      Dan Wilson
                    </a>
                  </td>
                  <td className="text-end">$590.00</td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder">$50.00</span>
                  </td>
                  <td className="text-end">
                    <span
                      className="
                                      badge
                                      py-3
                                      px-4
                                      fs-7
                                      badge-light-success
                                    "
                    >
                      Shipped
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="
                                      btn
                                      btn-sm
                                      btn-icon
                                      btn-light
                                      btn-active-light-primary
                                      toggle
                                      h-25px
                                      w-25px
                                    "
                      data-kt-table-widget-4="expand_row"
                    >
                      <i
                        className="
                                        ki-duotone ki-plus
                                        fs-4
                                        m-0
                                        toggle-off
                                      "
                      ></i>
                      <i
                        className="
                                        ki-duotone ki-minus
                                        fs-4
                                        m-0
                                        toggle-on
                                      "
                      ></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              {/* <!--end::Table body--> */}
            </table>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Card body-->/ */}
        </div>
        {/* <!--end::Table Widget 4--> */}
      </div>
    </>
  );
};

export default PatientLisMetTable;
