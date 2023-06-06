import { useState } from "react";
import TextToSpeech from "../ui/TTS_";

interface Podcasts_Props {}

const Podcasts_ = ({}: Podcasts_Props) => {
  const [h1Value, setH1Value] = useState("");
  const [promptText, setPromptText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [quote, setQuote] = useState("");

  const fetchH1Value = async () => {
    try {
      const response = await fetch(`/api/scrapeWeb?address=${encodeURIComponent(address)}`);
      const data = await response.json();
      console.log(data.h1Value);
      setPromptText(data.h1Value);
    } catch (error) {
      console.error("Error fetching H1 value:", error);
    }
  };

  const generateText = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/chatGPT?prompt=${encodeURIComponent(`write a monologue of a podcast that brainstorms one business opportunity about: ${h1Value}`)}`);
      const data = await response.json();
      setQuote(data.quote);
      console.log(data.quote);
      setGeneratedText(data.generatedText);
    } catch (error) {
      console.error("Error generating text:", error);
    }

    setIsLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div className="w-full min-h-[200px] flex flex-row justify-center items-center relative mb-12">
      <div className="w-[1200px] min-h-[800px] bg-white/90 flex flex-col justify-start items-center rounded-[6px] shadow-md p-10 mt-8 relative">
          <TextToSpeech/>
      </div>
    </div>
  );
};

export default Podcasts_;
