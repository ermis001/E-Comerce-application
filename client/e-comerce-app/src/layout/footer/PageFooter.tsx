import { Footer } from "antd/es/layout/layout";

function PageFooter() {
  const showFooter: boolean = !window.location.pathname.includes("dashboard");

  return showFooter ? (
    <Footer className="page-footer">Page Footer</Footer>
  ) : null;
}

export default PageFooter;
