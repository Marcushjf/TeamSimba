import { Fragment, useState } from "react";
import OpenAI from "openai";
import memory from '../assets/memory.png'
import OPENAI_API_KEY from "../SECRET";

const ImageGen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobDescription, setjobDescription] = useState<string>("");
  const [resultDescription, setResultDescription] = useState<string>("");
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const toggleLoading = () => {
    setLoading((prevLoading) => {
      console.log(`Setting loading from ${prevLoading} to ${!prevLoading}`);
      return !prevLoading;
    });
  };
  async function getChatCompletion(prompt: string) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: "Explain to me what does " + prompt + " mean.",
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const result = completion.choices[0]?.message.content ?? "No result";

      // Handle the completion here
      console.log(result);
      setResultDescription(result);
    } catch (error) {
      // Handle any errors that occurred during the API request
      console.error("Error fetching chat completion:", error);
    }
  }
  async function getImageCompletion(prompt: string) {
    try {
      toggleLoading(); // Start loading
  
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: jobDescription,
        n: 1,
        size: "1024x1024",
      });
  
      const imageUrl = response.data[0].url;
      console.log(imageUrl);
      setResultDescription(`${imageUrl}`);
    } catch (error) {
      // Handle any errors that occurred during the API request
      console.error("Error fetching image completion:", error);
    } finally {
      toggleLoading(); // Stop loading, whether it's success or error
    }
  }
  

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setjobDescription(event.target.value);
  };

  const handleClick = () => {
    //get inputs
    const data = {
      jobDescription: jobDescription,
    };

    const jsonData = JSON.stringify(data);

    console.log("JSON DATA:", jsonData);
    getImageCompletion(jobDescription);
  };
  return (
    <Fragment>
      <div className="row pt-5" style={{ height: "80vh" }}>
        <div className="col">
          <div className="form-floating p-0 m-0" style={{ height: "90%" }}>
            <textarea
              className="form-control h-100"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              onChange={handleTextareaChange}
            ></textarea>
            <label htmlFor="floatingTextarea">Describe a moment you cherish</label>
          </div>
          {loading ? (
            <button className="btn btn-dark mt-3 w-100" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-dark w-100 mt-3"
            >
              Generate !
            </button>
          )}
        </div>
        <div className="col">
          {resultDescription !== "" ? (
            <img src={resultDescription} alt="" className="w-100" />
          ) : (
            !loading && <img src={memory} alt="memory" className="w-100 rounded-5 mt-5"/>
          )}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ImageGen;
