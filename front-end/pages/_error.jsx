import { useRouter } from "next/router";
import { ComponentPage404 } from "../components/ComponentPage404"

 const Page404 = () => {
    const router = useRouter();

  const handleInvalidPathClick = () => {
    router.push('/invalid-path');
  };
    return <ComponentPage404 />
} 
export default Page404;