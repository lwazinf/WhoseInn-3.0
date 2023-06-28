import TextToSpeech_ from "../../components/ui/TTS_";

interface Narrate_Props {
  
}
 
const Narrate_ = ({}:Narrate_Props) => {
  return ( 
    <div className={`w-[800px] min-h-screen flex flex-col justify-center items-center mx-auto`}>
      <TextToSpeech_/>
    </div>
   );
}
 
export default Narrate_;