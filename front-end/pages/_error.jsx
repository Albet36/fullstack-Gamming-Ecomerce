import { useRouter } from "next/router";
import { ComponentPage404 } from "../components/ComponentPage404"

export const Page404 = () => {
    const router = useRouter();

  const handleInvalidPathClick = () => {
    router.push('/invalid-path');
  };
    return <ComponentPage404 />
} 