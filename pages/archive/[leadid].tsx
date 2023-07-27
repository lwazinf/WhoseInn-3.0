import { useRouter } from "next/router";
import { getLead } from "../../Firebase";
import { useEffect, useState } from "react";
import Archive_ from "../../components/Archive_";

interface LeadDetail_Props {}

const LeadDetail_ = ({}: LeadDetail_Props) => {
  const router = useRouter();
  const { query: _data } = router;
  const [data_, setData_] = useState("");
  const [prePrompt_, setPrePrompt_] = useState('Give me email copy, with this new context in mind: ')

  const lead_ = async (data__: any) => {
    const y_ = data__;
    return y_;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const q = router.query;
      const result = await lead_(getLead(q.leadid));
      // console.log(result);
      setData_(result);
    };

    fetchData();
  }, [_data, router.isReady]);

  return (
    <div className={``}>
      {/* @ts-ignore */}
      <title>{data_.name+" :: "+data_.author}</title>
      {router.query.leadid != null && (
        <Archive_ data={data_} gptSpin={prePrompt_} />
      )}
    </div>
  );
};

export default LeadDetail_;
