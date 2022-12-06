import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const { spotId } = router.query;
  return <div>hola {spotId}</div>;
};
export default Edit;
