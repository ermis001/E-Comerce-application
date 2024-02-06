import { useParams } from "react-router-dom";

function SubCategoryPage() {
  const { subCategory } = useParams();

  return <main>SubCategory: {subCategory}</main>;
}

export default SubCategoryPage;
