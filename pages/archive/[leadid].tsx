import { useRouter } from "next/router";
import { getLead } from "../../Firebase";
import { useEffect, useState } from "react";
import Script_ from "../../components/pages/Script_";
import Archive_ from "../../components/pages/Archive_";
import SideMenu_ from "../../components/SideMenu_";

interface LeadDetail_Props {}

const LeadDetail_ = ({}: LeadDetail_Props) => {
    const router = useRouter();
    const { query: _data } = router;
    const [data_, setData_] = useState('');
  
    const lead_ = async (data__: any) => {
      const y_ = data__;
      return y_;
    };
  
    useEffect(() => {
      const fetchData = async () => {
        if (!router.isReady) return;
        const q = router.query
        const result = await lead_(getLead(q.leadid));
        // console.log(result);
        setData_(result)
      };
  
      fetchData();
    }, [_data, router.isReady]);
  
  return (
    <div className={``}>
      <title>{router.query.leadid}</title>
      {router.query.leadid != null && (
        <Archive_ data={data_} />
        )}
        <SideMenu_ />
    </div>
  );
};

export default LeadDetail_;
