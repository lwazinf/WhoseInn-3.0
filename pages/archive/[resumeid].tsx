import { useRouter } from "next/router";
import { getResume } from "../../Firebase";
import { useEffect, useState } from "react";
import Script_ from "../../components/pages/Script_";
import Archive_ from "../../components/pages/Archive_";
import SideMenu_ from "../../components/SideMenu_";

interface ResumeDetail_Props {}

const ResumeDetail_ = ({}: ResumeDetail_Props) => {
    const router = useRouter();
    const { query: _data } = router;
    const [data_, setData_] = useState('');
  
    const resume_ = async (data__: any) => {
      const y_ = data__;
      return y_;
    };
  
    useEffect(() => {
      const fetchData = async () => {
        if (!router.isReady) return;
        const q = router.query
        const result = await resume_(getResume(q.resumeid));
        console.log(result);
        setData_(result)
      };
  
      fetchData();
    }, [_data, router.isReady]);
  
  return (
    <div className={``}>
      <title>{router.query.resumeid}</title>
      {router.query.resumeid != null && (
        <Archive_ />
        )}
        <SideMenu_ />
    </div>
  );
};

export default ResumeDetail_;
