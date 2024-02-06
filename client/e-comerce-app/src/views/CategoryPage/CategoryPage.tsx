import { useParams } from "react-router-dom";



function CategoryPage() {
  const {category} = useParams();

  return <main>Selected Category: {category}</main>
}

export default CategoryPage;