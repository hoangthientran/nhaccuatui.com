// libs
import React from "react";
// components
import NameCompany from "../NameCompany";
import ContentDetail from "../ContentDetail";
// others
import "./style.scss";

const ContentCompany = () => (
  <div className="content-company-wrapper">
    <NameCompany />
    <ContentDetail>Chủ sở hữu website: Ông Nhan Thế Luân</ContentDetail>
    <ContentDetail>
      Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày
      28/09/2015.
    </ContentDetail>
    <ContentDetail>
      Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và Đầu tư
      thành phố Hồ Chí Minh cấp ngày 01/03/2008.
    </ContentDetail>
  </div>
);

export default ContentCompany;
